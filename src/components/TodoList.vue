<template>
	<div>
		<div class="ui basic content center aligned segment">
			<p>Complete Tasks: {{ todos.filter(todo => { return todo.done === true }).length }}</p>
			<p>Pending Tasks: {{ todos.filter(todo => { return todo.done === false }).length }}</p>
		</div>
		<hr>
		<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="(todo, index) in todos" v-bind:todo="todo" v-bind:index="index"></todo>
	</div>
</template>

<script>
	import Todo from '@/components/Todo'

	export default {
		props: ['todos'],
		components: {
			Todo,
		},
		methods: {
			deleteTodo(todo) {
				const todoIndex = this.todos.indexOf(todo)
				this.todos.splice(todoIndex, 1)
			},
			completeTodo(todo) {
				const todoIndex = this.todos.indexOf(todo)
				this.todos[todoIndex].done = true
			}
		}
	}
</script>

<style type="scss" scoped>
	
</style>