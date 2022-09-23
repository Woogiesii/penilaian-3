<template>
    <div class="wrap">
        <all-product :listProduct="product" @emitSubtract="subtract" />
        <cart :cartProduct="cartProduct" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: [
                {
                    id: 1,
                    name: "Indomie Rendang",
                    description: "Mie Goreng dengan Rasa Rendang",
                    quantity: 20,
                    price: 3000
                },
                {
                    id: 2,
                    name: "Indomie Kari Ayam",
                    description: "Mie Kuah dengan rasa Kari Ayam",
                    quantity: 10,
                    price: 2500
                },
                {
                    id: 3,
                    name: "Mie Sedap Korea",
                    description: "Mie Goreng dengan perpaduan bumbu Korea",
                    quantity: 40,
                    price: 5000
                }
            ],
            cartProduct: [
                {
                    id: 1,
                    name: "Indomie Rendang",
                    description: "Mie Goreng dengan Rasa Rendang",
                    quantity: 20,
                    price: 3000
                },
                {
                    id: 2,
                    name: "Indomie Kari Ayam",
                    description: "Mie Kuah dengan rasa Kari Ayam",
                    quantity: 10,
                    price: 2500
                },
                {
                    id: 3,
                    name: "Mie Sedap Korea",
                    description: "Mie Goreng dengan perpaduan bumbu Korea",
                    quantity: 40,
                    price: 5000
                }
            ]
        }
    },
    methods: {
        subtract(index) {
            this.product.stock - 1
        }
    }
}
</script>
