<template>
    <div class="input-group">
        <input type="text" v-model="todo" title="todoitem" class="form-control" placeholder="Input something ...(e.g. Learn Vue.js)">
        <span class="input-group-btn">
            <button type="button" v-on:click="addTodoItem" class="btn btn-primary"># Add</button>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: '',
        }
    },
    methods: {
        addTodoItem: function() {
            if ( this.todo.trim() === '' ) {
                alert('Todo is empty. Input something.')
                return;
            }
            this.$parent.todo_list.push({
                id: this.$parent.todo_list.length + 1,
                detail : this.todo,
                isDone: false
            });
        }
    }
}
</script>