<template>
    <div>
        <img :src="avatar" :alt="descricao" width="100px">
        <MudarImagem @mudar-imagem="trocarImagem" />
    </div>
</template>

<script>
    import MudarImagem from './MudarImagem.vue';

    export default {
        name: "Picture",

        data() {
            return {
                avatar: "/favicon.ico",
                descricao: "Imagem exemplo"
            }
        },

        components: {
            MudarImagem
        },

        methods: {
            trocarImagem() {
                this.avatar = "/galcon.ico"
            }
        }
    }
</script>