<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }

</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        background-color: #373131;
    }

    li {
        margin-right: 10px;
    }

    a {
        text-decoration: none;
        transition: .5s;
    }

    a:hover {
        color: rgb(132, 190, 185);
    }


</style>