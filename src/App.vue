<template>
    <div id="app">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:add-todo="addTodo"></create-todo>
    </div>
</template>

<script>
import sweetalert from 'sweetalert';
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
            todos: [
                {
                    title: 'Todo A',
                    project: 'Project A',
                    done: false
                },
                {
                    title: 'Todo B',
                    project: 'Project B',
                    done: false
                },
                {
                    title: 'Todo C',
                    project: 'Project C',
                    done: true
                },
                {
                    title: 'Todo D',
                    project: 'Project D',
                    done: false
                },
            ]
        }
    },

    methods: {
        addTodo(newTodo) {
            this.todos.push(newTodo)
            sweetalert('Success!', 'To-Do created!', 'success');
        }
    }
}
</script>

<style>

</style>
