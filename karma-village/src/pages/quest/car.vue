<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'

import NavigationComponent from '@/components/shared/Navigation.vue'
import TextAreaBox from '@/components/shared/TextAreaBox.vue'
import { ICar } from '@/models/ICar';
import { carService } from '@/services/Car.service';

const router = useRouter();

const isQuestComplete = computed(() => false)

const foundCars = ref<ICar[]>([])

const searchForCars = (value: string) => {
  foundCars.value = carService.search(value);
}
</script>

<template>
  <NavigationComponent>
    <v-btn variant="text" icon="mdi-arrow-left" @click="router.push('/')"></v-btn>
    <v-btn variant="text" @click="router.push('/')" :disabled="!isQuestComplete">Complete Quest</v-btn>
  </NavigationComponent>

  <v-container>
    <v-card class="mb-2">
      <v-container>
        <h2>I'm looking for a car.</h2>
        <p>
          Oh no, my car broke down!
          Can you recommend me a new one?
          Search for cars using the inputfield below.
          If you find one that suits me, recommend it!
        </p>
        <p>My car should have:</p>
        <ul class="pl-6">
          <li>Room for 3 children</li>
          <li>A sporty look</li>
          <li>A lot of safety features</li>
          <li>A BMW Logo</li>
        </ul>
      </v-container>
    </v-card>

    <v-card class="mb-2">
      <v-container>
        <h3>Recommended Cars</h3>

        <!-- TODO: Show list of recommended cars -->

      </v-container>
    </v-card>

    <v-card class="mb-2">
      <v-container>
        <h3>Search for Cars</h3>

        <TextAreaBox label="Car keywords go here" btn-text="Search Cars" @submit="searchForCars" />
        <v-card v-for="(car, index) in foundCars" :key="index" class="mb-2 pa-2">
          {{ car.make_display }} - {{ car.model_trim }}
        </v-card>

        <!-- TODO 4: implement function to recommend car -->
        <!-- TODO 5: implement function to unrecommend car -->
        <!-- TODO 6: implement a message to show when the list of cars is empty -->
        <!-- TODO 7: extract the list of found and recommended cars to a shared component -->

      </v-container>
    </v-card>
  </v-container>
</template>

<style lang="scss"></style>
