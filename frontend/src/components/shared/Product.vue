<template>
    <div class="feature">
        <b-link :to="{ name: 'SinglePage' }" class="product">
            <img :src='`data:image/png;base64, ${this.product.image_base64}`' class="feature-pic" alt="">
            <div @click.prevent.stop="addItemToCart" class="add-cart-txt">
                <img src="../../assets/img/cart-white.svg" alt="" style="margin: 7px 0 12px 10px">
                <span style="margin: 5px 0 7px 8px">Add to Cart</span>
            </div>
        </b-link>
        <b-link :to="{ name: 'SinglePage' }" class="feature-desc">{{ product.product_name }}</b-link>
        <p class="feature-price">${{ formatNumber(product.price) }}</p>
    </div>
</template>

<script>
import formatter from '../../js/formatter'

export default {
  name: 'Product',
  props: ['product'],
  methods: {
    addItemToCart () {
      this.$root.$children[0].$refs.topCart.addItemToCart(this.product)
    },
    formatNumber (number) {
      return formatter.numberToText(number)
    }
  }
}
</script>
