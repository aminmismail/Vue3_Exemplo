<template>
    <div>
        <h1>Ola usuário!</h1>
        <h3>Meu nome é {{ nome }}</h3>
        <h3>Atualmente sou {{ profissao }}</h3>
        <MultiplosEventos/>
    </div>

</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';

    export default{
    name: 'FirstComp',
    data() {
        return {
            nome: "Amin",
            profissao: "Estudante"
        };
    },
    components: { MultiplosEventos }
}
</script>