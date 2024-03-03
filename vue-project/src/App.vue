<template>
    <div>
        <Header />
        <FirstComp />
        <LifeCycle />
        <Pessoa />
    </div>
</template>

<script>
    import FirstComp from './components/First.vue'
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue';
    import Header from './components/Header.vue';


    export default{
        name: 'App',
        components: {
            FirstComp,
            LifeCycle,
            Pessoa,
            Header
        },
        data() {
            return {
                teste: "Testando app"
            }
        }
    }
</script>