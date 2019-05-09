<template>
    <div id="checkout">
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

        <div class="container">
            <div class="checkout-container checkout-container-active">
                <a href="#" class="checkout-container-title">01.&nbsp;&nbsp;&nbsp;Shipping
                    Adress</a>
                <div class="checkout-container-options">
                    <div class="options-column">
                        <div class="option">
                            <p class="option-header">Check as a guest or
                                register</p>
                            <p class="option-description">Register with us for
                                future convenience</p>
                            <div class="radio-container">
                                <input type="radio" name="checkType"
                                       value="guest" id="guest">
                                <label class="option-label" for="guest">checkout
                                    as guest</label>
                            </div>
                            <div
                                class="radio-container option__radio-register">
                                <input type="radio" name="checkType"
                                       value="register" id="register">
                                <label class="option-label" for="register">register</label>
                            </div>
                        </div>
                        <div class="option">
                            <p class="option-header">register and save
                                time!</p>
                            <p class="option-description option__option-description">
                                Register with us for future convenience</p>
                        </div>
                        <p class="option-description options-column__option-description">
                            <i class="fas fa-angle-double-right"></i>Fast and
                            easy checkout</p>
                        <p class="option-description"><i
                            class="fas fa-angle-double-right"></i>Easy access
                            to your order history and status</p>
                        <div class="options-column__button">
                            <a href="#" class="button">continue</a>
                        </div>
                    </div>
                    <div class="options-column">
                        <div class="option">
                            <p class="option-header">Already registed?</p>
                            <p class="option-description">Please log in
                                below</p>
                            <div
                                style="display: flex; flex-direction: column-reverse">
                                <input class="input-text" type="email"
                                       id="emailAddress" required>
                                <label class="input-label" for="emailAddress">EMAIL
                                    ADDRESS</label>
                            </div>
                            <div
                                style="display: flex; flex-direction: column-reverse">
                                <input class="input-text" type="password"
                                       id="password" required>
                                <label class="input-label" for="password">PASSWORD</label>
                            </div>
                            <p class="text-required option__text-required">*
                                Required Fields</p>
                        </div>
                        <div style="display: flex; align-items: center">
                            <a href="#" class="button">Log in</a>
                            <a href="#" class="text-forgot-pass">Forgot
                                Password ?</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="checkout-container">
                <a href="#" class="checkout-container-title">02.&nbsp;&nbsp;&nbsp;BILLING
                    INFORMATION</a>
                <div class="checkout-container-options"
                     style="display: none"></div>
            </div>
            <div class="checkout-container">
                <a href="#" class="checkout-container-title">03.&nbsp;&nbsp;&nbsp;SHIPPING
                    INFORMATION</a>
                <div class="checkout-container-options"
                     style="display: none"></div>
            </div>
            <div class="checkout-container">
                <a href="#" class="checkout-container-title">04.&nbsp;&nbsp;&nbsp;SHIPPING
                    METHOD</a>
                <div class="checkout-container-options"
                     style="display: none"></div>
            </div>
            <div class="checkout-container">
                <a href="#" class="checkout-container-title">05.&nbsp;&nbsp;&nbsp;PAYMENT
                    METHOD</a>
                <div class="checkout-container-options"
                     style="display: none"></div>
            </div>
            <div class="checkout-container">
                <a href="#" class="checkout-container-title">06.&nbsp;&nbsp;&nbsp;ORDER
                    REVIEW</a>
                <div class="checkout-container-options"
                     style="display: none"></div>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/checkout.css'

export default {
  name: 'Checkout'
}
</script>

<style scoped>

</style>
