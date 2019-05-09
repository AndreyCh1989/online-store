<template>
    <div id="cart">
        <header class="subheader">
            <div class="container subheader-container">
                <div class="subheader-leftside">
                    <p class="subheader-leftside-text">
                        New Arrivals
                    </p>
                </div>
                <div class="subheader-rightside">
                    <div class="subheader-rightside-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"
                                                               class="breadcrumb-item-link">Home</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#"
                                                               class="breadcrumb-item-link">Man</a>
                                </li>
                                <li class="breadcrumb-item active"
                                    aria-current="page">New Arrivals
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <div class="container cart-container">
            <table class="cart-table">
                <colgroup>
                    <col class="column-prod-det"/>
                    <col class="column-unit-price"/>
                    <col class="column-quantity"/>
                    <col class="column-shipping"/>
                    <col class="column-subtotal"/>
                    <col class="column-action"/>
                </colgroup>
                <thead class="cart-table-headers">
                <tr class="cart-table-headers-row">
                    <th class="cart-table-headers-cell cart-table-header-font">
                        Product Details
                    </th>
                    <th class="cart-table-headers-cell cart-table-header-font centered-text">
                        unite Price
                    </th>
                    <th class="cart-table-headers-cell cart-table-header-font centered-text">
                        Quantity
                    </th>
                    <th class="cart-table-headers-cell cart-table-header-font centered-text">
                        shipping
                    </th>
                    <th class="cart-table-headers-cell cart-table-header-font centered-text">
                        Subtotal
                    </th>
                    <th class="cart-table-headers-cell cart-table-header-font centered-text">
                        ACTION
                    </th>
                </tr>
                </thead>
                <tbody>
                  <el-cart-item v-for="cartItem in $root.$children[0].$refs.topCart.getItems()" :key="cartItem.id" :cartItem="cartItem"></el-cart-item>
                </tbody>
            </table>

            <div class="cart-container-buttons" style="margin-top: 44px;">
                <input type="submit" class="gotocart"
                       value="cLEAR SHOPPING CART">
                <input type="submit" class="gotocart"
                       value="cONTINUE sHOPPING">
            </div>
        </div>

        <div class="container" style="margin-top: 63px;">
            <div class="shipping-container">
                <div class="shipping-address">
                    <p class="shipping-container-header-font"
                       style="margin: 0 0 22px 0">Shipping Adress</p>
                    <select
                        class="shipping-container-input-font shipping-container-input"
                        style="margin: 0 0 20px 0">
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Bangladesh2">Bangladesh2</option>
                        <option value="Bangladesh3">Bangladesh3</option>
                        <option value="Bangladesh4">Bangladesh4</option>
                    </select>
                    <input
                        class="shipping-container-input-font shipping-container-input"
                        style="margin: 0 0 20px 0; width: 332px;" type="text" name="state"
                        placeholder="State">
                    <input
                        class="shipping-container-input-font shipping-container-input"
                        type="text" name="zip" style="width: 332px;" placeholder="Postcode / Zip">
                </div>
                <div class="shipping-discount">
                    <p class="shipping-container-header-font"
                       style="margin: 0 0 28px 0">coupon discount</p>
                    <p class="shipping-container-description-font"
                       style="margin: 0 0 24px 0">Enter your coupon code if you
                        have one</p>
                    <input
                        class="shipping-container-input-font shipping-container-input"
                        style="margin: 0 0 25px 0" type="text" name="state"
                        placeholder="State">
                    <div>
                        <a href="#" class="shipping-container-button">Apply
                            coupon</a>
                    </div>
                </div>
                <div class="grand-total">
                    <div class="grand-total-container">
                        <div class="grand-total-container-elements"
                             style="margin: 0 42px 0 0;">
                            <p class="shipping-container-description-font"
                               style="margin: 40px 0 0 0;">Sub total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${{ getTotalPrice }}</p>
                            <p class="shipping-container-header-font grand-total-container-elements-underline"
                               style="margin-top: 14px;">GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                class="pink">${{ getTotalPrice }}</span></p>
                            <a href="#"
                               class="grand-total-container-elements-button">proceed
                                to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin: 40px 0 79px 0">
                <a href="#" class="shipping-container-button">get a quote</a>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/cart.css'
import CartItem from './shared/CartItem'
import api from '../js/api'

export default {
  name: 'Cart',
  components: {
    'el-cart-item': CartItem
  },
  methods: {
    async addItemToCartAmount (product, amount) {
      try {
        const data = await api.post(`/api/cart?amount=${amount}`, product)
        this.$root.$children[0].$refs.topCart.setItems((data && data.contents) || '')
      } catch (e) {
        console.log(e)
      }
    },
    async deleteFromCartAll (cartItem) {
      try {
        const data = await api.delete(`/api/cart/${cartItem.id}/all`)
        this.$root.$children[0].$refs.topCart.setItems((data && data.contents) || '')
      } catch (e) {
        console.log(e)
      }
    }
  },
  computed: {
    getTotalPrice () {
      return this.$root.$children[0].$refs.topCart.getItems().reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
    }
  }
}
</script>

<style scoped>

</style>
