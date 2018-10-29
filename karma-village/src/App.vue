<template>
  <v-app>
    <header-component></header-component>
    <v-content>
      <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/quest">Quest</router-link> |-->
        <!--<router-link to="/confirmation">Confirmation</router-link>-->
      <!--</div>-->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import HeaderComponent from '@/components/Shared/Header.vue';

@Component({
  components: {
    HeaderComponent,
  },
})
export default class App extends Vue {

}

</script>

<style>
  /* #app > div > main > div {
    background-color: #8895DC;
  } */
</style>