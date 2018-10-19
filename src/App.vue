<template>
    <div id="app">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo></create-todo>
    </div>
</template>

<script>
import sweetalert from 'sweetalert'
import TodoList from '@/components/TodoList'
import CreateTodo from '@/components/CreateTodo'
export default {
    name: 'App',
    components: {
        TodoList,
        CreateTodo
    },
    data() {
        return {

        }
    },
    computed: {
        todos() {
            return this.$store.state.storeTodo.todos
        }
    },

    methods: {
    
    }
}
</script>

<style>

</style>
