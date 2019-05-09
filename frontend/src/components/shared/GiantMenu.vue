<template>
    <div :class="`${menuClass} dropdown`">
        <div class="dropdown-container">
            <div class="dropdown-category">{{ group }}</div>
            <div class="dropdown-category-line"></div>
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
        <div>
            <div class="dropdown-container">
                <div class="dropdown-category">{{ group }}</div>
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
                </ul>
            </div>
            <div class="dropdown-container">
                <div class="dropdown-category">{{ group }}</div>
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
                </ul>
            </div>
        </div>
        <div>
            <div class="dropdown-container">
                <div class="dropdown-category">{{ group }}</div>
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
                </ul>
            </div>
            <img src="../../assets/img/super_sale.png" alt=""
                 style="margin-left: -13px">
        </div>
    </div>
</template>

<script>
export default {
  name: 'GiantMenu',
  props: ['menuClass', 'group']
}
</script>

<style scoped>

</style>
