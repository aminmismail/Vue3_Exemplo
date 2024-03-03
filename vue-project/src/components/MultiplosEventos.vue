<template>
    <div>
        <v-btn @click="primeiro(txt1, $event),segundo(txt2 ,$event), clean()" class="text-red-darken-2">Ativar multiplos eventos</v-btn>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
    export default {
        name: "MultiplosEventos",
        data() {
            return {
                multiplos_eventos: "",
                txt1: "Primeiro evento!",
                txt2: "Segundo evento!"
            }
        },
        methods: {
            primeiro(txt1, e) {
                this.multiplos_eventos =  txt1
            },

            segundo(txt2, e) {
                setTimeout(
                    () => this.multiplos_eventos = txt2, 500)
            },
            clean() {
                setTimeout(
                    () => this.multiplos_eventos = "", 1000)
            }
        }

    }
</script>