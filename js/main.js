'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Todo List',
            newTodo: '',
            todoList: [
                {
                    text: "Completare l'esercizio",
                    done: false
                }, {
                    text: 'Fare la spesa',
                    done: true
                }, {
                    text: 'Annaffiare le piante',
                    done: true
                }, {
                    text: "Pulire l'acquario",
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTodo(index) {
            this.todoList.splice(index, 1);
        },
        addTodo() {
            this.todoList.push(
                {
                    text: this.newTodo,
                    done:false
                }
            );
            this.newTodo = '';
        }
    }
}).mount('#app');