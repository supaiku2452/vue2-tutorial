<template>
    <div>
        <div class="tab-pane active" id="all-todo-list">
            <ul class="list-group">
                <li v-for="todo in todo_list" v-on:click="change_status(todo)" class="list-group-item">
                    <span v-bind:class="{doing: todo.isDone, done: !todo.isDone}">{{ todo.detail }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todo_list'],
        methods: {
            change_status: function(todo) {
                todo.isDone = !todo.isDone;
            },
            change_visible_todolist: function(status) {
                this.visible_status = status;
            }
        }
    }
</script>

<style>
    .doing {
        text-decoration: line-through;
    }
    .done {
        font-style: italic;
    }
</style>