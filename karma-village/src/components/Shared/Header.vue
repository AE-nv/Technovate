<template>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Karma village</span>
        <span class="font-weight-light">Technovate</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/AE-nv/Technovate"
        target="_blank"
      >
        <span class="mr-2">Our github repository</span>
      </v-btn>
    </v-toolbar>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class HeaderComponent extends Vue {

}
</script>

<style>

</style>
