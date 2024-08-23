<script setup lang="ts">
import { ICar } from '@/models/ICar';

defineProps<{
  cars?: ICar[];
  icon: string
}>();

const emit = defineEmits<{
  carClicked: [car: ICar]
}>()

const carClicked = (car: ICar) => {
  emit('carClicked', car);
}
</script>

<template>
  <v-card v-for="(car, index) in cars" :key="index" class="mb-2 pa-2 card">
    <span>{{ car.make_display }} - {{ car.model_trim }}</span>
    <v-btn variant="text" :icon="icon" @click="carClicked(car)"></v-btn>
  </v-card>
  <span v-if="cars !== undefined && !cars.length">No cars found...</span>
</template>
