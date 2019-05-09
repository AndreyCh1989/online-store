<template>
  <div class="top-cart">
    <div class="cart">
        <b-link :to="{ name: 'Cart' }" style="display: block; width: 32px; margin-right: 26px;">
            <img src="../../assets/img/cart.svg" alt="cart" class="cart">
          <div class="index" v-if="getItemsAmount > 0">
            <span class="index-text">{{ getItemsAmount }}</span>
          </div>
        </b-link>
        <div class="bag">
            <div class="bag-items" v-if="cartItems.length">
                <el-top-cart-item v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem"></el-top-cart-item>
            </div>
            <div v-else class="no-items-text">No items in bag</div>
            <div class="bag-total">
                <div class="bag-total-container">
                    <div class="total">
                        <p class="total-text">TOTAL</p>
                        <p class="total-text">
                            ${{ formatNumber(getTotalPrice) }}</p>
                    </div>
                    <b-link :to="{ name: 'Checkout' }"
                       class="checkout">Checkout</b-link>
                    <b-link :to="{ name: 'Cart' }"
                       class="gotocart">Go to cart</b-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TopCartItem from './TopCartItem'
import api from '../../js/api'
import formatter from '../../js/formatter'

export default {
  name: 'TopCart',
  components: {
    'el-top-cart-item': TopCartItem
  },
  data () {
    return {
      cartItems: []
    }
  },
  methods: {
    async getCartItems () {
      try {
        const data = await api.get(`/api/cart`)
        this.cartItems = (data && data.contents) || ''
      } catch (e) {
        console.log(e)
      }
    },
    async addItemToCart (product) {
      try {
        const data = await api.post('/api/cart', product)
        this.cartItems = (data && data.contents) || ''
      } catch (e) {
        console.log(e)
      }
    },
    async deleteFromCart (cartItem) {
      try {
        const data = await api.delete(`/api/cart/${cartItem.id}`)
        this.cartItems = (data && data.contents) || ''
      } catch (e) {
        console.log(e)
      }
    },
    getItems () {
      return this.cartItems
    },
    setItems (cartItems) {
      this.cartItems = cartItems
    },
    formatNumber (number) {
      return formatter.numberToText(number)
    }
  },
  async created () {
    await this.getCartItems()
  },
  computed: {
    getTotalPrice () {
      return this.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
    },
    getItemsAmount () {
      return this.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
    }
  }
}
</script>

<style scoped>

</style>
