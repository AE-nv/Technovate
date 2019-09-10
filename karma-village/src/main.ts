import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from './router';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

Vue.config.productionTip = false;

Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyCQjG9US2rLx9DONkqukNMjTbZzQjjCy44', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
  });

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');


