<template>
    <div class="todo-content">
        <h1>Todo Application</h1>
        <div>
            <mainComponent v-bind:todo_list="todo_list" class="child-content"></mainComponent>
        </div>
        <div>
            <footerComponent class="child-content"></footerComponent>
        </div>
    </div>
</template>

<script>
import mainComponent from './Main.vue';
import footerComponent from './Footer.vue';

export default {
    data() {
        return {
            todo_list: [
                {id: 1, detail: 'cook', isDone: false},
                {id: 2, detail: 'dinner', isDone: false},
                {id: 3, detail: 'wash dishes', isDone: false},
            ]
        }
    },
    components: {
        mainComponent,
        footerComponent
    }
}
</script>

<style>
.todo-content {
    margin: 20px;
}
.child-content {
    margin-top:10px;
}
</style>