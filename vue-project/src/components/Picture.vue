<template>
    <img :src="avatar" :alt="descricao" width="100px">
</template>

<script>
    export default {
        name: "Picture",
        data() {
            return {
                avatar: "/favicon.ico",
                descricao: "Imagem exemplo"
            }
        }
    }
</script>