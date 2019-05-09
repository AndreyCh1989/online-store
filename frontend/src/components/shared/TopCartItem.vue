<template>
    <div class="bag-position">
        <div class="bag-item">
            <div class=""></div>
            <img :src="`data:image/png;base64, ${this.cartItem.image_base64}`"
                 alt=""
                 class="bag-item-img">
            <div class="bag-item-desc">
                <b-link :to="{ name: 'Product' }"
                   class="bag-item-name">{{ cartItem.product_name }}</b-link>
                <div
                    class="bag-item-rating">
                    <i class="fas fa-star bag-item-rating-star"></i>
                    <i class="fas fa-star bag-item-rating-star"></i>
                    <i class="fas fa-star bag-item-rating-star"></i>
                    <i class="fas fa-star bag-item-rating-star"></i>
                    <i class="fas fa-star-half-alt bag-item-rating-star"></i>
                </div>
                <p class="bag-item-amount">
                    {{ cartItem.quantity }} x ${{ formatNumber(cartItem.price) }}</p>
            </div>
            <div @click.prevent.stop="removeItemFromCart" style="display: flex; align-items: center;">
                <a href="#" class="fas fa-times-circle bag-item-cancel-icon"></a>
            </div>
        </div>
        <div
            class="bag-position-line"></div>
    </div>
</template>

<script>
import formatter from '../../js/formatter'

export default {
  name: 'TopCartItem',
  props: ['cartItem'],

  methods: {
    removeItemFromCart () {
      this.$root.$children[0].$refs.topCart.deleteFromCart(this.cartItem)
    },
    formatNumber (number) {
      return formatter.numberToText(number)
    }
  }
}
</script>

<style scoped>

</style>
