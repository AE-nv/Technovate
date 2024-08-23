<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import chairImage from '@/assets/Red_Chair.png';
import DropZone from '@/components/shared/DropZone.vue';
import NavigationComponent from '@/components/shared/Navigation.vue';
import { googleApiService } from '@/services/GoogleApi.service';

const router = useRouter();

const files = ref<File[]>([])
const keywords = ref<string[]>([])
const isUploading = ref(false);

const isQuestComplete = computed(() => isChair.value && isRed.value && isPlastic.value);
const isChair = computed(() => keywords.value.includes('chair'));
const isRed = computed(() => keywords.value.includes('red'));
const isPlastic = computed(() => keywords.value.includes('plastic'));

const handleFilesAdded = async (newFiles: File[]) => {
  isUploading.value = true;
  files.value = newFiles;

  const file1 = files.value[0];

  try {
    const result = await googleApiService.detectLabels(file1);
    const response = result.responses[0];
    keywords.value = response.labelAnnotations.map(labelAnnotation => labelAnnotation.description.toLowerCase());

    const color = response.imagePropertiesAnnotation.dominantColors.colors.sort(color => color.score)[0].color;
    const isRedDominant = color.red > color.blue && color.red > color.green;
    if (isRedDominant) keywords.value.push('red');
  } catch (error) {
    alert('There was an error labeling the image through google api: ' + (error as Error).toLocaleString());
  } finally {
    isUploading.value = false;
  }
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
        <h2>Have a chair for me?</h2>
        <div class="quest-info">
          <div>
            <p>My ideal chair has these characteristics:</p>
            <ul class="pl-6">
              <li :class="{ invalid: keywords.length && !isChair }">Chair</li>
              <li :class="{ invalid: keywords.length && !isRed }">Color: red</li>
              <li :class="{ invalid: keywords.length && !isPlastic }">Made out of plastic</li>
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

        <DropZone :disabled="isUploading" @files-added="handleFilesAdded" />
        <ul v-if="files.length && !isUploading" class="pl-6 mt-2">
          <li v-for="file in files" :key="file.lastModified">{{ file.name }}</li>
        </ul>
        <v-skeleton-loader v-if="isUploading" type="sentences"></v-skeleton-loader>
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

.invalid {
  color: red;
}
</style>
