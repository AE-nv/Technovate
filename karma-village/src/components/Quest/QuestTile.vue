<script setup lang="ts">
import { computed } from 'vue'

import type { IQuest } from '@/models/IQuest'

const props = defineProps<{
  quest: IQuest
}>()

const imageUrl = computed(() => new URL('/src/assets/' + props.quest.image, import.meta.url).href)
</script>

<template>
  <v-card :title="quest.title" :subtitle="quest.description" :href="`/quest/${quest.link}`" class="mb-2">
    <template #prepend>
      <v-avatar>
        <v-img :src="imageUrl" contain height="200"></v-img>
      </v-avatar>
    </template>
  </v-card>
</template>
