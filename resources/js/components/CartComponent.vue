<template>
    <div>
        <h1>Cart</h1>
        <index-cart :cartProduct="cartProduct" />
    </div>
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