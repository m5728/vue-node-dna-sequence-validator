import Vue from 'vue';
import App from './App.vue';
import ResultsTable from './components/ResultsTable.vue';

Vue.component('ResultsTable', ResultsTable);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
