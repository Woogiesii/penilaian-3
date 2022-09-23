<template>
    <table style="border-spacing: 30px; text-align: center;">
        <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Quantity</td>
            <td>Price</td>
            <td></td>
        </tr>
        <tr v-for="(item, index) in cartProduct.filter(item => item.quantity > 0)" :key="index">
            <div v-if="item.quantity > 0">
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.price}}</td>
                <td></td>
            </div>
            <div v-else>
                <h1>Empty Cart</h1>
            </div>
        </tr>
    </table>
</template>
<script>
export default {
    props: {
        cartProduct: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
}
</script>