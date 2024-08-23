<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import bikeImage from '@/assets/bike.png'
import NavigationComponent from '@/components/shared/Navigation.vue';

const router = useRouter();

const isQuestComplete = computed(() => false);

const text = ref('');
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
          <v-textarea auto-grow v-model="text" filled rows="1" label="Response"></v-textarea>
          <v-card class="mb-2 pa-2">{{ text }}</v-card>

          <!--TODO 3: add response to list + show the list of all responses -->
          <!--TODO 4: implement function to determine if quest is complete -->
          <!--TODO 5: add the textbox to a seperate component -->

        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>
