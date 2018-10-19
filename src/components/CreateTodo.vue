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
                        <button class="ui basic blue button" v-on:click="handleAddTodo">
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
    import sweetalert from 'sweetalert'

    export default {
        data() {
            return {
                titleName: '',
                projectName: '',
                isCreating: false
            }
        },
        computed: {
            todos() {
                return this.$store.state.storeTodo.todos
            },
            autocrement() {
                return this.$store.state.storeTodo.autocrement
            }
        },
        methods: {
            openForm() {
                this.isCreating = true
            },
            closeForm() {
                this.isCreating = false
            },
            handleAddTodo(event) {
                event.preventDefault()

                let title = this.titleName
                let project = this.projectName
                let id = this.autocrement

                if (title.length > 0 && project.length > 0) {
                    this.$store.dispatch('actionTodoAdd', { id, title, project, done: false })
                    sweetalert('Success!', 'To-Do created!', 'success');
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