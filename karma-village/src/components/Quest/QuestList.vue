<script setup lang="ts">
import { onMounted, ref } from 'vue';

import type { IQuest } from '@/models/IQuest'
import { questService } from '@/services/Quest.service'

import HeaderComponent from '../shared/Header.vue';
import QuestTile from './QuestTile.vue';

const quests = ref<IQuest[]>([]);

onMounted(() => {
  quests.value = questService.getAllQuests();
})
</script>

<template>
  <HeaderComponent />
  <v-container fluid>
    <v-row justify="center">
      <v-col>
        <QuestTile v-for="quest in quests" :key="quest.id" :quest="quest" />
      </v-col>
    </v-row>
  </v-container>
</template>
