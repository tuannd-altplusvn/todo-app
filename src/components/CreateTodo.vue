<template>
	<div class="ui basic content center aligned segment">
		<button class="ui basic button icon" v-on:click="openForm" v-show="!isCreating">
			<i class="plus icon"></i>
		</button>
		<div class="ui centered card" v-show="isCreating">
			<div class="content">
				<div class="ui form">
					<div class="field">
						<label>Title</label>
						<input type="text" ref="title" defaultValue="" v-model="titleName">
					</div>
					<div class="field">
						<label>Project</label>
						<input type="text" ref="project" defaultValue="" v-model="projectName">
					</div>
					<div class="ui two button attached buttons">
						<button class="ui basic blue button" v-on:click="sendForm()">
							Add
						</button>
						<button class="ui basic red button" v-on:click="closeForm">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				titleName: '',
				projectName: '',
				isCreating: false 
			}
		},
		methods: {
			openForm() {
				this.isCreating = true
			},
			closeForm() {
				this.isCreating = false
			},
			sendForm() {
				if (this.titleName.length > 0 && this.projectName.length > 0) {
					const title = this.titleName
					const project = this.projectName

					this.$emit('add-todo', {
						title,
						project,
						done: false
					})
				}

				this.isCreating = false
				this.titleName = ''
				this.projectName = ''
			}
		}
	}
</script>

<style type="scss" scoped>
	
</style>