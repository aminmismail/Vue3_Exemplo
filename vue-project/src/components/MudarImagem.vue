<template>
    <div>
        <v-btn @click="$emit('mudarImagem')"> Trocar imagem </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'MudarImagem',
        emits: ['mudarImagem']
    }

</script>