<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import bikeImage from '@/assets/bike.png'
import NavigationComponent from '@/components/shared/Navigation.vue';
import TextAreaBox from '@/components/shared/TextAreaBox.vue';

const router = useRouter();

const isQuestComplete = computed(() => ['saddle', 'pedals', 'wheels'].every(item => responses.value.includes(item)));

const responses = ref<string[]>([])

const addResponse = (value: string) => {
  responses.value.push(value);
}
</script>

<template>
  <v-container>
    <NavigationComponent>
      <v-btn variant="text" icon="mdi-arrow-left" @click="router.push('/')"></v-btn>
      <v-btn variant="text" @click="router.push('/')" :disabled="!isQuestComplete">Complete Quest</v-btn>
    </NavigationComponent>
    <v-container>
      <v-card class="mb-2">
        <v-container>
          <h2>Have a bike for me?</h2>
          <v-img :src="bikeImage"></v-img>
          <p>
            I'm looking for a bike with two wheels, pedals and a saddle.
            Preferably not too far from Leuven.
            Leave a comment if you have one available.
          </p>
        </v-container>
      </v-card>
      <v-card class="mb-2">
        <v-container>
          <v-card v-for="(response, index) in responses" :key="index" class="mb-2 pa-2">{{ response }}</v-card>
          <TextAreaBox @submit="addResponse" />
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>
