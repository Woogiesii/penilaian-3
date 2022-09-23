require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('index', require('./components/IndexComponent.vue').default);
Vue.component('all-product', require('./components/ProductComponent.vue').default);
Vue.component('index-cart', require('./components/IndexCart.vue').default);
Vue.component('cart-table', require('./components/CartTable.vue').default);
Vue.component('cart', require('./components/CartComponent.vue').default);

const app = new Vue({
    el: '#app',
});
