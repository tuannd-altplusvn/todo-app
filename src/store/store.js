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
        { id: 0, title: 'Todo A', project: 'Project A', done: false },
        { id: 1, title: 'Todo B', project: 'Project B', done: false },
        { id: 2, title: 'Todo C', project: 'Project C', done: true },
        { id: 3, title: 'Todo D', project: 'Project D', done: false },
    ],
    autocrement: 4
}

const mutations = {
	[TODO_FETCH](state) {
		return state.todos
	},
	[TODO_ADD](state, todo) {
		state.todos = [todo, ...state.todos]
		state.autocrement = state.autocrement + 1
	},
	[TODO_TOGGLE_STATUS](state, id) {
		return state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
	},
	[TODO_DELETE](state, id) {
		return state.todos = state.todos.filter((todo) => todo.id !== id)
	},
	[TODO_EDIT](state, editTodo) {
		return state.todos = state.todos.map((todo) => todo.id === editTodo.id ? { ...todo, title:editTodo.title, project:editTodo.project } : todo)
	}
}

const actions = {
	actionTodoFetch({ commit }) {
		return commit('TODO_FETCH')
	},
	actionTodoAdd({ commit }, todo) {
		return commit(TODO_ADD, todo)
	},
	actionTodoChangeStatus({ commit }, id) {
		return commit(TODO_TOGGLE_STATUS, id)
	},
	actionTodoDelete({ commit }, id) {
		return commit(TODO_DELETE, id)
	},
	actionTodoEdit({ commit }, editTodo) {
		return commit(TODO_EDIT, editTodo)
	}
}

export default {
	state,
	mutations,
	actions
}

