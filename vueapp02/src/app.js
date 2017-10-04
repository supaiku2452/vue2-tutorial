import Vue from 'vue';

new Vue({
   el: '#app',
   data: {
       message: 'Hello Vue!!!'
   }
});

new Vue({
   el: '#app-2',
   data: {
       message: 'You loaded this page on ' + new Date().toLocaleString()
   }
});

