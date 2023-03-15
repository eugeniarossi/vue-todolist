'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Todo List',
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

    }
}).mount('#app');