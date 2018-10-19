<template>
	<div class="ui centered card">
		<div class="content" v-show="!isEditing">
			<div class="header">
				{{ todo.title }}
			</div>
			<div class="meta">
				{{ todo.project }}
			</div>
			<div class="extra content">
				<span class="right floated edit icon" v-on:click="showForm">
					<i class="edit icon"></i>
				</span>
				<div class="right floated trash icon" v-on:click="handleDelete(todo.id)">
					<i class="trash icon"></i>
				</div>
			</div>
		</div>
		<!-- form -->
		<div class="content" v-show="isEditing">
			<div class="ui form">
				<div class="field">
					<label>Title</label>
					<input type="text" v-model="todo.title">
				</div>
				<div class="field">
					<label>Project</label>
					<input type="text" v-model="todo.project">
				</div>
				<div class="ui two button attached buttons">
					<button class="ui basic blue button" v-on:click="handleEdit">
						Close X
					</button>
				</div>
			</div>
		</div>
		<div class="ui bottom attached green basic button" v-show="!isEditing && todo.done">
			Completed
		</div>
		<div class="ui bottom attached red basic button" v-show="!isEditing && !todo.done" v-on:click="handleChangeStatus(todo.id)">
			Complete
		</div>
	</div>
</template>

<script>
	import sweetalert from 'sweetalert';

	export default {
		props: ['todo', 'index'],
		data() {
			return {
				isEditing: false,
			}
		},
		computed: {

		},
		methods: {
			showForm() {
				this.isEditing = true
			},
			hideForm() {
				this.isEditing = false
			},
			handleDelete(id) {
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
				        this.$store.dispatch('actionTodoDelete', id)
				        sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success');
					} else {
					    swal("Your action was rollback!");
					}
				})
			},
			handleChangeStatus(id) {
				this.$store.dispatch('actionTodoChangeStatus', id)
				sweetalert('Success!', 'To-Do completed!', 'success');
			},
			handleEdit(event) {
				event.preventDefault()
				this.$store.dispatch('actionTodoEdit', this.todo)
				this.isEditing = false

			}
		}
	}
</script>

<style type="scss" scoped>

</style>