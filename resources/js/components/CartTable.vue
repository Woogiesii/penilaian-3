<template>
    <div>
        <h1>Cart</h1>
        <index-cart :cartProduct="cartProduct" />
        <index-cart :listProduct="listProduct" />
    </div>
</template>
<script>
export default {
    props: {
        listProduct: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
}
</script>