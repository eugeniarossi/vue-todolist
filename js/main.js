'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Todo List',
            newTodo: '',
            //searchKey: '',
            //newTodoList: [],
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
            console.log(this.todoList);
        },
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todoList.push(
                    {
                        text: this.newTodo,
                        done: false
                    }
                );
                this.newTodo = '';
            }
        },
        barTodo(index) {
            const item = this.todoList[index];
            if (item.done === false) {
                item.done = true;
            } else {
                item.done = false;
            }
        }
    }
}).mount('#app');