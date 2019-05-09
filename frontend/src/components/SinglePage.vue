<template>
    <div id="single-page">
        <div class="item-container">
            <div class="catalog-item-container">
                <img src="../assets/img/catalog/catalog_big.jpg" alt=""
                     class="catalog-item-container__img">
            </div>

            <div class="container buy-container">
                <p class="buy-container__text buy-container__text_collection">
                    WOMEN COLLECTION</p>
                <div class="text-underline"></div>
                <p class="buy-container__text-2 buy-container__text-2_name">
                    Moschino Cheap And Chic</p>
                <p class="buy-container__text-3 buy-container__text-3_description">
                    Compellingly actualize fully researched processes before
                    proactive outsourcing. Progressively syndicate<br/>
                    collaborative architectures before cutting-edge services.
                    Completely visualize parallel core competencies<br/> rather
                    than exceptional portals. </p>
                <div class="buy-container-characteristics">
                    <p class="buy-container-characteristics__text">MATERIAL:
                        <span
                            class="buy-container-characteristics__text_black">COTTON</span>
                    </p>
                    <p class="buy-container-characteristics__text">DESIGNER:
                        <span
                            class="buy-container-characteristics__text_black">BINBURHAN</span>
                    </p>
                </div>
                <p class="buy-container__text-4 buy-container__text-4_price">
                    $561</p>
                <div class="buy-options">
                    <div class="buy-option">
                        <p class="buy-option__text">CHOOSE COLOR</p>
                        <select class="buy-options-input" id="color">
                            <option default value="red">RED</option>
                            <option value="blue">BLUE</option>
                            <option value="white">WHITE</option>
                            <option value="blck">BLACK</option>
                            <option value="pink">PINK</option>
                        </select>
                    </div>
                    <div class="buy-option">
                        <p class="buy-option__text">CHOOSE SIZE</p>
                        <select class="buy-options-input" id="size">
                            <option default value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <div class="buy-option">
                        <p class="buy-option__text">QUANTITY</p>
                        <input type="number" class="buy-options-input" min="0"
                               max="10000">
                    </div>
                </div>
                <a href="./cart.html"
                   class="buy-container__button buy-container__button_addtocard"><img
                    alt="" src="../assets/img/cart_pink.svg"
                    class="buy-container__cart buy-container__cart_pink">Add to
                    card</a>
            </div>
        </div>

        <div class="container proposal-container">
            <p class="text proposal-container__text">you may like also</p>
            <div class="features proposal-container__features">
                <el-product v-for="product in products" :key="product.id" :product="product"></el-product>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/single_page.css'
import Product from './shared/Product'
import api from '../js/api'

export default {
  name: 'SinglePage',
  data () {
    return {
      products: []
    }
  },
  components: {
    'el-product': Product
  },
  methods: {
    async getProducts () {
      try {
        const data = await api.get(`/api/catalog?amount=4&gender=w`)
        this.products = data || ''
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted () {
    await this.getProducts()
  }
}
</script>
