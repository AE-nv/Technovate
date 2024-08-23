<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import chairImage from '@/assets/Red_Chair.png'
import NavigationComponent from '@/components/shared/Navigation.vue';

const router = useRouter();

const isQuestComplete = computed(() => false);
</script>

<template>
  <NavigationComponent>
    <v-btn variant="text" icon="mdi-arrow-left" @click="router.push('/')"></v-btn>
    <v-btn variant="text" @click="router.push('/')" :disabled="!isQuestComplete">Complete Quest</v-btn>
  </NavigationComponent>

  <v-container>
    <v-card class="mb-2">
      <v-container>
        <h2>Have a chair for me?</h2>
        <div class="quest-info">
          <div>
            <p>My ideal chair has these characteristics:</p>
            <ul class="pl-6">
              <li>Chair</li>
              <li>Color: red</li>
              <li>Made out of plastic</li>
            </ul>
          </div>
          <div class="quest-image">
            <v-img :src="chairImage"></v-img>
          </div>
        </div>
      </v-container>
    </v-card>
    <v-card class="mb-2">
      <v-container>
        <h3>Add a picture of the chair you can offer</h3>

        <!--TODO 1: add the drop-zone element -->
        <!--TODO 2: show list of files that are uploaded -->
        <!--TODO 3: call function whenever a file is added that sends file to google api service -->
        <!--TODO 4: determine if result of google api contains required characteristics to complete quest -->
        <!--TODO 5: provide user feedback in the list of characteristics -->
      </v-container>
    </v-card>
  </v-container>
</template>

<style lang="scss">
.quest-info {
  display: flex;
}

.quest-image {
  width: 40%;
}
</style>
