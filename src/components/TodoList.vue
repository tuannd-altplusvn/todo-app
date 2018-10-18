<template>
	<div>
		<div class="ui basic content center aligned segment">
			<p>Complete Tasks: {{ todos.filter(todo => { return todo.done === true }).length }}</p>
			<p>Pending Tasks: {{ todos.filter(todo => { return todo.done === false }).length }}</p>
		</div>
		<hr>
		<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="(todo, index) in todos" v-bind:todo="todo" :key="index" :todo.sync="todo"></todo>
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
			 deleteTodo(todo) {
		      	swal({
			        title: 'Are you sure?',
			        text: 'This To-Do will be permanently deleted!',
			        icon: 'warning',
			        buttons: true,
		        	dangerMode: true,
			        confirm: {
			        	text: 'Yes, delete it!',
			        },
			        closeModal: false,
		      	}).then((willDelete) => {
				  	if (willDelete) {
					    const todoIndex = this.todos.indexOf(todo);
				        this.todos.splice(todoIndex, 1);
				        sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success');
					} else {
					    swal("Your action was rollback!");
					}
				});
			},
			completeTodo(todo) {
				const todoIndex = this.todos.indexOf(todo)
				this.todos[todoIndex].done = true
				sweetalert('Success!', 'To-Do completed!', 'success');
			}
		}
	}
</script>

<style type="scss" scoped>

</style>