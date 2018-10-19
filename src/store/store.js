import Vue from 'vue'
import Vuex from 'vuex'

const TODO_FETCH = 'todo_fetch'
const TODO_ADD = 'todo_add'
const TODO_TOGGLE_STATUS = 'todo_toggle_status'
const TODO_DELETE = 'todo_delete'
const TODO_COMPLETE = 'todo_complete'
const TODO_EDIT = 'todo_edit'

const state = {
	todos: [
        { title: 'Todo A', project: 'Project A', done: false },
        { title: 'Todo B', project: 'Project B', done: false },
        { title: 'Todo C', project: 'Project C', done: true },
        { title: 'Todo D', project: 'Project D', done: false },
    ]
}

const mutations = {
	[TODO_FETCH](state) {
		return state.todos
	},
	[TODO_ADD](state, todo) {
		return state.todos = [todo, ...state.todos]
	},
	[TODO_TOGGLE_STATUS](state, todo) {
		let todos = state.todos
		let index = todos.indexOf(todo)
		return state.todos = state.todos[index].done = true
	},
	[TODO_DELETE](state, todo) {
		let todos = state.todos
		let index = todos.indexOf(todo)
		todos.splice(index, 1)

		return state.todos = todos
	},
	[TODO_EDIT](state, todo) {

	}
}

const actions = {
	actionTodoFetch({ commit }) {
		return commit('TODO_FETCH')
	},
	actionTodoAdd({ commit }, todo) {
		return commit(TODO_ADD, todo)
	},
	actionTodoChangeStatus({ commit }, todo) {
		return commit(TODO_TOGGLE_STATUS, todo)
	},
	actionTodoDelete({ commit }, todo) {
		return commit(TODO_DELETE, todo)
	},
	actionTodoEdit({ commit }, todo) {
		return commit(TODO_EDIT, todo)
	}
}

export default {
	state,
	mutations,
	actions
}

