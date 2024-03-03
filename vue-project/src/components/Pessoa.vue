<template>
    <div>
        <h2>Descrição da pessoa: {{ nome }}</h2>
        <Info :email="email" :esta_trabalhando="esta_trabalhando"/>
        <Form />
        <v-btn variant="elevated"> Button </v-btn>
    </div>
</template>

<script>
    import Info from './Info.vue';
    import Form from './Form.vue';

    export default {
        name: "Pessoa",
        data() {
            return {
                nome: "Amin",
                email: "amin@mail.com",
                esta_trabalhando: false
            }
        },
        components: {
            Info,
            Form
        }
    }

</script>