<template>
  <tr class="cart-table-row">
    <td class="cart-table-cell">
      <div class="cart-table-cell-pd">
        <img :src="`data:image/png;base64, ${this.cartItem.image_base64}`"
             class="cart-table-cell-pd-pic" alt="">
        <div class="cart-table-cell-pd-details"
             style="margin-left: 15px; margin-top: 13px;">
          <b-link :to="{ name: 'SinglePage' }"
             class="cart-table-header-font"
             style="margin-bottom: 38px;">{{ cartItem.product_name }}</b-link>
          <p class="cart-table-cell-font"
             style="margin-bottom: 0;">Color: <span
              style="font-weight: 300;">Red</span></p>
          <p class="cart-table-cell-font"
             style="margin-bottom: 0;">Size: <span
              style="font-weight: 300;">Xll</span></p>
        </div>
      </div>
    </td>
    <td class="cart-table-cell cart-table-cell-font centered-text">
        ${{ formatNumber(cartItem.price) }}
    </td>
    <td class="cart-table-cell centered-content">
      <input class="cart-table-cell-quonity-border cart-table-cell-font"
        type="number" name="quantity" min="0" max="10000" v-model="cartItem.quantity" :value="cartItem.quantity" @change="changeAmount"></td>
    <td class="cart-table-cell cart-table-cell-font centered-text">
        Free
    </td>
    <td class="cart-table-cell cart-table-cell-font centered-text">
        ${{ formatNumber(cartItem.price * cartItem.quantity) }}
    </td>
    <td class="cart-table-cell cart-table-cell-font centered-text">
      <div @click.prevent.stop="remove">
        <a href="#" class="fas fa-times-circle bag-item-cancel-icon"></a>
      </div>
    </td>
  </tr>
</template>

<script>
import formatter from '../../js/formatter'

export default {
  name: 'CartItem',
  props: ['cartItem'],
  methods: {
    formatNumber (number) {
      return formatter.numberToText(number)
    },
    changeAmount () {
      this.$parent.addItemToCartAmount(this.cartItem, this.cartItem.quantity)
    },
    remove () {
      this.$parent.deleteFromCartAll(this.cartItem)
    }
  }
}
</script>

<style scoped>

</style>
