<template>
	<div>
		<p>Complete Tasks: {{ todos.filter(todo => { return todo.done === true }).length }}</p>
		<p>Pending Tasks: {{ todos.filter(todo => { return todo.done === false }).length }}</p>
		<hr>
		<todo v-for="(todo, index) in todos" v-bind:todo="todo" v-bind:index="index"></todo>
	</div>
</template>

<script>
	import Todo from '@/components/Todo'

	export default {
		props: ['todos'],
		components: {
			Todo,
		}
	}
</script>

<style type="scss" scoped>
	
</style>