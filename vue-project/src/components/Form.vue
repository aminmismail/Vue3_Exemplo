<template>
    <div>
        <h2>Formulario: </h2><br>
        <form action="" @submit="enviarForm($event)">
            <div>
                <!-- <InputText/> -->
                <input type="text" v-model="nome">
            </div>
            <div>
                <!-- <InputText/> -->
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit/>
            </div>
        </form>
    </div>
</template>

<script>
    import InputText from './form/InputText.vue';
    import Submit from './form/Submit.vue';

    export default {
        name: "Form",
        components: {
            InputText,
            Submit
        },
        data() {
            return {
                nome: "Amin",
                email: "amin@Mail.com"
            }
        },
        methods: {
            enviarForm(e) {

                e.preventDefault();

                const nome = this.nome;
                const email = this.email;

                // console.log("Enviou!");
                // console.log("Nome: " + nome)
                // console.log("Email: " + email)
            }
        }
    }

</script>