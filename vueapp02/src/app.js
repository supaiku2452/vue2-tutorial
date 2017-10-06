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

new Vue({
   el: '#app-3',
   data: {
       seen: true
   }
});

new Vue({
   el: '#app-4',
   data: {
       todos: [
           { text: 'Learn JavaScript' },
           { text: 'Learn Vue' },
           { text: 'Build something awesome' }
       ],
       fruits: [
           "banana", "apple", "strawberry"
       ]
   }
});

new Vue({
    el: '#app-5',
    data: {
       message: 'Hello Vue.js!',
    },
    methods: {
        reverseMessage: function() {
           this.message = this.message.split('').reverse().join('');
        },
        upperMessage: function(message) {
           alert(message.toUpperCase());
        }
    }
});

new Vue({
   el: '#app-6',
   data: {
       message: 'Hello Vue.js!'
   }
});

Vue.component('my-component', {
    template: '<div>A custom component.</div>'
});