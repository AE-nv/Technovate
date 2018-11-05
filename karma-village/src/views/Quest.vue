<template>
  <v-container>
    <navigation-component>
      <v-btn flat @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-btn flat @click="$router.go(-1)" :disabled="!isQuestComplete">Complete Quest</v-btn>
    </navigation-component>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          The quest page
        </h1>
      </v-flex>
    </v-layout>
  </v-container> 
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavigationComponent from '@/components/Shared/Navigation.vue';

@Component({
  components: { NavigationComponent },
})
export default class QuestComponent extends Vue {}
</script>

<style>
</style>
