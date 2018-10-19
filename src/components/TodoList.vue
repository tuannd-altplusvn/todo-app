<template>
	<div>
		<div class="ui basic content center aligned segment">
			<p>Complete Tasks: {{ todos.filter(todo => { return todo.done === true }).length }}</p>
			<p>Pending Tasks: {{ todos.filter(todo => { return todo.done === false }).length }}</p>
		</div>
		<hr>
		<todo v-for="(todo, index) in todos" v-bind:todo="todo" :key="index" :todo.sync="todo"></todo>
	</div>
</template>

<script>
	import Todo from '@/components/Todo'
	import sweetalert from 'sweetalert';

	export default {
		props: ['todos'],
		components: {
			Todo,
		},
		methods: {
			 
		}
	}
</script>

<style type="scss" scoped>

</style>