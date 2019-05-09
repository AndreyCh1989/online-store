<template>
    <div id="app">
        <div class="wrapper">
            <div class="top">
                <header class="header">
                    <div class="container header-flex">
                        <div class="header-left">
                            <b-link :to="{ name: 'Home' }" class="logo"><img
                                src="./assets/img/logo.png"
                                class="logo-img"
                                alt="logo">BRAN<span
                                class="logo-d">D</span></b-link>
                            <div class="browse">Browse<img
                                src="./assets/img/arrow-down-black.png"
                                alt=""
                                style="margin: 0 0 1px 8px">
                                <div class="browse-dropdown dropdown">
                                    <div class="dropdown-container">
                                        <div class="dropdown-category">Women
                                        </div>
                                        <div
                                            class="dropdown-category-line"></div>
                                        <ul class="dropdown-category-items">
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Dresses</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Tops</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Sweaters/Knits</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Jackets/Coats</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Blazers</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Denim</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Leggings/Pants</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Skirts/Shorts</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Accessories</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown-container">
                                        <div class="dropdown-category">Men
                                        </div>
                                        <div
                                            class="dropdown-category-line"></div>
                                        <ul class="dropdown-category-items">
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Tees/Tank
                                                    tops</b-link></li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Shirts/Polos</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Sweaters</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Sweatshirts/Hoodies</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Blazers</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Denim</b-link>
                                            </li>
                                            <li class="dropdown-category-item">
                                                <b-link :to="{ name: 'Product' }"
                                                   class="dropdown-item">Jackets/vests</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <el-search></el-search>
                        </div>
                        <div class="header-right">
                            <el-top-cart ref="topCart"></el-top-cart>
                            <a class="button-account" href="#">My Account<img
                                src="./assets/img/arrow-down.png" alt=""
                                style="margin: 0 0 1px 8px"></a>
                        </div>
                    </div>
                </header>

                <nav class="navigation">
                    <div class="container">
                        <ul class="menu">
                            <li class="navigation-item nav-item-home">
                              <b-link :to="{ name: 'Home' }" class="menu-link">Home</b-link>
                            </li>
                            <li class="navigation-item nav-item-man">
                                <b-link :to="{ name: 'Product' }" class="menu-link">Man</b-link>
                                <el-giant-menu menuClass="dropdown-menu-man" group="Man"></el-giant-menu>
                            </li>
                            <li class="navigation-item nav-item-women">
                                <b-link :to="{ name: 'Product' }" class="menu-link">Women</b-link>
                                <el-giant-menu menuClass="dropdown-menu-women" group="Women"></el-giant-menu>
                            </li>
                            <li class="navigation-item nav-item-kids">
                                <a href="" class="menu-link">Kids</a>
                                <el-giant-menu menuClass="dropdown-menu-kids" group="Kids"></el-giant-menu>
                            </li>
                            <li class="navigation-item nav-item-accessories">
                                <a href="" class="menu-link">Accessories</a>
                                <el-giant-menu menuClass="dropdown-menu-accessories" group="Accessories"></el-giant-menu>
                            </li>
                            <li class="navigation-item nav-item-featured">
                                <a href="" class="menu-link">Featured</a>
                                <el-giant-menu menuClass="dropdown-menu-featured" group="Featured"></el-giant-menu>
                            </li>
                            <li class="navigation-item nav-item-hot">
                                <a href="" class="menu-link">Hot Deals</a>
                                <el-giant-menu menuClass="dropdown-menu-hot flip" group="Hot Deals"></el-giant-menu>
                            </li>
                        </ul>
                    </div>
                </nav>
                <router-view ref="view"></router-view>
                <div class="subscribe-back">
                    <img src="./assets/img/subscribe_back.jpg" alt=""
                         class="subscribe-img">
                    <div class="subscribe-section">
                        <figure class="subscribe-left-side">
                            <img src="./assets/img/BB.png" alt="" class="bb-pic">
                            <div class="bb">
                                <p class="bb-quote">“Vestibulum quls porttitor
                                    dul! Qulsque
                                    viverra nunc mi,<br/>
                                    a pulvinar purus condimentum a. Aliquam
                                    condimentum<br/>
                                    mattis neque sed pretium”</p>
                                <p class="bb-name">Bin Burhan</p>
                                <p class="bb-place">Dhaka, Bd</p>
                                <div class="figure">
                                    <div class="figure-gray"></div>
                                    <div class="figure-rad"></div>
                                    <div class="figure-gray"></div>
                                </div>
                            </div>
                        </figure>
                        <div class="subscribe-line"></div>
                        <div class="subscribe-right-side">
                            <p class="subscribe-upper-text">Subscribe</p>
                            <p class="subscribe-bottom-text">FOR OUR NEWLETTER
                                AND
                                PROMOTION</p>
                            <form class="subscribe-interaction">
                                <input type="email" class="subscribe-email"
                                       placeholder="Enter Your Email">
                                <input type="submit" class="subscribe-submit"
                                       value="Subscribe">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class="container">
                    <div class="footer-middle">
                        <div class="about">
                            <b-link :to="{ name: 'Home' }" class="logo"><img
                                src="./assets/img/logo.png"
                                class="logo-img"
                                alt="logo">BRAN<span
                                class="logo-d">D</span></b-link>
                            <p class="about-text">Objectively transition
                                extensive data
                                rather than cross functional<br/> solutions.
                                Monotonectally
                                syndicate multidisciplinary materials<br/>
                                before go forward
                                benefits. Intrinsicly syndicate an expanded
                                array<br/> of
                                processes and cross-unit
                                partnerships.<br/><br/>

                                Efficiently plagiarize 24/365 action items and
                                focused
                                infomediaries.<br/>
                                Distinctively seize superior initiatives for
                                wireless
                                technologies.<br/> Dynamically optimize.</p>
                        </div>
                        <nav class="nav">
                            <p class="nav-header">COMPANY</p>
                            <ul class="nav-ul">
                                <li><a href="" class="nav-button">Home</a></li>
                                <li><a href="" class="nav-button">Shop</a></li>
                                <li><a href="" class="nav-button">About</a>
                                </li>
                                <li><a href="" class="nav-button">How It
                                    Works</a></li>
                                <li><a href="" class="nav-button">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="nav">
                            <p class="nav-header">INFORMATION</p>
                            <ul class="nav-ul">
                                <li><a href="" class="nav-button">Tearms &
                                    Condition</a></li>
                                <li><a href="" class="nav-button">Privacy
                                    Policy</a></li>
                                <li><a href="" class="nav-button">How to
                                    Buy</a></li>
                                <li><a href="" class="nav-button">How to
                                    Sell</a></li>
                                <li><a href="" class="nav-button">Promotion</a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="nav">
                            <p class="nav-header">SHOP CATEGORY</p>
                            <ul class="nav-ul">
                                <li><a href="" class="nav-button">Men</a></li>
                                <li><a href="" class="nav-button">Women</a>
                                </li>
                                <li><a href="" class="nav-button">Child</a>
                                </li>
                                <li><a href="" class="nav-button">Apparel</a>
                                </li>
                                <li><a href="" class="nav-button">Brows All</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container footer-bottom-flex">
                        <div class="footer-bottom-left">
                            © 2018 Brand All Rights Reserved.
                        </div>
                        <div class="footer-bottom-right">
                            <a href="" class="link">
                                <img src="./assets/img/f.png" alt="">
                            </a>
                            <a href="" class="link"
                               style="background-color: #f16d7f;">
                                <img src="./assets/img/t.png" alt="">
                            </a>
                            <a href="" class="link isDisabled">
                                <img src="./assets/img/in.png" alt="">
                            </a>
                            <a href="" class="link">
                                <img src="./assets/img/p.png" alt="">
                            </a>
                            <a href="" class="link">
                                <img src="./assets/img/g.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import TopCart from './components/shared/TopCart'
import Search from './components/shared/Search'
import GiantMenu from './components/shared/GiantMenu'

export default {
  name: 'App',
  components: {
    'el-top-cart': TopCart,
    'el-search': Search,
    'el-giant-menu': GiantMenu
  }
}
</script>

<style>
</style>
