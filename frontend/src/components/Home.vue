<template>
    <div class="home">
        <div class="promo-top">
            <div class="container">
                <div class="container promo-content">
                    <div class="promo-text">
                        <h3 class="promo-h3">THE BRAND</h3>
                        <p class="promo-p">OF LUXERIOUS <span class="pink">FASHION</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot-deal container">
            <a href="#" class="deal-for-man">
                <div class="block-deal-txt">
                    <p class="deal-upper-txt">HOT DEAL</p>
                    <p class="pink deal-bottom-txt">FOR MEN</p>
                </div>
            </a>
            <a href="#" class="deal-for-woman">
                <div class="block-deal-txt">
                    <p class="deal-upper-txt">30% offer</p>
                    <p class="pink deal-bottom-txt">women</p>
                </div>
            </a>
            <a href="#" class="deal-accesories">
                <div class="deal-for-accesories-img">
                    <div class="block-deal-txt" style="margin-left: -149px">
                        <p class="deal-upper-txt">LUXIROUS & trendy</p>
                        <p class="pink deal-bottom-txt">ACCESORIES</p>
                    </div>
                </div>
            </a>
            <a href="#" class="deal-for-kids">
                <div class="block-deal-txt">
                    <p class="deal-upper-txt">new arrivals</p>
                    <p class="pink deal-bottom-txt">FOR kids</p>
                </div>
            </a>
        </div>
        <section class="featured-items container">
            <div class="column">
                <h3 class="featured-items-header centered">Featured Items</h3>
                <p class="featured-item-desc centered">Shop for items based on what we featured in this week</p>
            </div>
            <div class="features" style="height: 745px">
              <el-product v-for="product in products" :key="product.id" :product="product"></el-product>
            </div>
            <div class="column">
                <b-link :to="{ name: 'Product' }" class="browse-all centered">Browse All Product<img src="../assets/img/arrow-right-white.png" alt="" style="margin: 3px 0px 1px 9px"></b-link>
            </div>
        </section>
        <div class="promo-bottom container">
            <div class="offer-right-side">
                <div style="margin: 146px 0 0 39px">
                    <p class="offer-upper-text">30% <span class="pink">OFFER</span></p>
                    <p class="offer-bottom-text">FOR WOMEN</p>
                </div>
            </div>
            <div class="offer-left-side">
                <div class="free-deliv">
                    <div style="width: 49px;">
                        <img src="../assets/img/free_deliv.svg" alt="">
                    </div>
                    <div class="desc">
                        <p class="desc-upper">Free Delivery</p>
                        <p class="desc-botom"><span style="letter-spacing: 0.35px;">Worldwide</span> delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div class="sales-disc">
                    <div style="width: 49px;">
                        <img src="../assets/img/sales_disc.svg" alt="">
                    </div>
                    <div class="desc">
                        <p class="desc-upper">Sales & discounts</p>
                        <p class="desc-botom"><span style="letter-spacing: 0.35px;">Worldwide</span> delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
                <div class="qual-assur">
                    <div style="width: 49px;">
                        <img src="../assets/img/qual_assur.svg" alt="">
                    </div>
                    <div class="desc">
                        <p class="desc-upper">Quality assurance</p>
                        <p class="desc-botom"><span style="letter-spacing: 0.35px;">Worldwide</span> delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import product from './shared/Product'
import api from '../js/api'

export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  components: {
    'el-product': product
  },
  methods: {
    async getProducts () {
      try {
        const data = await api.get('/api/catalog?amount=8')
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
