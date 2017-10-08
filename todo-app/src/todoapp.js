import Vue from 'vue';
import todoApp from './component/TodoApp.vue';

new Vue({
   el: '#todoapp',
    components: {
       'todoAppComponent': todoApp
    },
    template: '<todoAppComponent></todoAppComponent>'
});