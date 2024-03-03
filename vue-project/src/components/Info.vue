<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando.</p>
        <p v-else>Não estou trabalhando.</p>
        <br><hr><br>
        <p>Linguagens que sei:</p>
        <ul>
            <li v-for="(tecnologias, index) in tecno" :key="index">
                {{ tecnologias }}
            </li>
        </ul>
        <br><hr><br>
        <p>Linguagens que ainda nao sei:</p>
        <ul>
            <li v-for="tecnologias in nao_tecno" :key="tecnologias.id">
                {{ tecnologias.lang }}
            </li>
        </ul>
        <v-data-table :items="nao_tecno"></v-data-table>

        <p>Email props: {{ email }}</p>
        <div>
            <button @click="showEmail">{{ botaoEmail }}</button>
        </div>
        <p v-show="mostrar_email">Email pessoal: {{ email }}</p>
        <p>Acesse meu CV: <a v-bind:href="cv">Curriculo</a>.</p>
        <Picture />
        <div>
            <button @click="incr">{{ countInc }}</button>
        </div>
    </div>
</template>

<script>

    import Picture from './Picture.vue';

    export default {
        nome: "Info",
        data() {
            return {
                mostrar_email: false,
                botaoEmail: "Mostrar email",
                cv: "https://www.google.com",
                countInc: 0,
                tecno: [
                    "Python",
                    "C++",
                    "C"
                ],
                nao_tecno: [
                    {id:0, lang: "Haskel"},
                    {id:1, lang: "JavaScript"},
                    {id:2, lang: "TypeScript"}
                ]
            }
        },

        props: {
            email: String,
            esta_trabalhando: Boolean
        },

        components: {
            Picture
        },

        methods: {
            showEmail() {
                this.mostrar_email = !(this.mostrar_email)

                if(this.mostrar_email) {
                    this.botaoEmail = "Esconder email"
                } else {
                    this.botaoEmail = "Mostrar email"
                }
            },
            incr(){
                this.countInc++
            }
        }
    }

</script>