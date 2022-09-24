<style>
button {
    background: salmon;
    width: 5rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    height: 2rem;
}
</style>
<template>
    <div style="display: flex;">
        <all-product :allProduct="allProduct" @emitAddToCart="addToCart" />
        <cart :carts="carts" />
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            allProduct: [
                {
                    id: 1,
                    name: "Indomie Goreng",
                    description: "Mie Instan",
                    qty: 20,
                    carts_qty: 0,
                    price: 2500,
                    carts_price: 0,
                },
                {
                    id: 2,
                    name: "Indomie Kari Spesial",
                    description: "Mie Instan Kuah rasa Kari Spesial",
                    qty: 10,
                    carts_qty: 0,
                    price: 2500,
                    carts_price: 0,
                },
                {
                    id: 3,
                    name: "Sedap Korea",
                    description: "Mie Instan dengan Bumbu Pedas Korea",
                    qty: 20,
                    carts_qty: 0,
                    price: 550000,
                    carts_price: 0,
                }
            ],
            carts: []
        }
    },
    methods: {
        addToCart(id) {
            let produk = this.allProduct.find((item) => item.id == id);
            let cart = this.carts.find((item) => item.idProduk == id);
            let idProduk = produk.id;
            let name = produk.name;
            let price = produk.price;
            if (!cart) {
                let cartTotal = {
                    idProduk: idProduk,
                    name: name,
                    price: price,
                    qty: 1,
                    subTotal: price,
                };
                this.carts.push(cartTotal);
                console.log(cartTotal.imgUrl)
            } else {
                cart.qty++;
                cart.subTotal = cart.qty * cart.price;
            }
        },
    }
}
</script>