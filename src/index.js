import Vue from 'vue';
import App from './components/App.vue';

console.log('Environment variable demo: ' + process.env.DEMO);

new Vue({
    render: h => h(App),
}).$mount('#app')