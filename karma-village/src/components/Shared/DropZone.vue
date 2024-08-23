<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  disabled?: boolean;
}>()

const emit = defineEmits<{
  filesAdded: [files: File[]]
}>();

const fileInput = ref<HTMLInputElement>();
const highlight = ref(false);

const handleFileChanged = (event: Event) => {
  const files = Array.from((event.target as HTMLInputElement).files || []);
  emit('filesAdded', files);
}

const openFileSelection = () => {
  if (props.disabled) return;
  fileInput.value?.click();
}

const handleDragOver = (event: DragEvent) => {
  if (props.disabled) return;
  event.preventDefault();
  highlight.value = true;
}

const handleDragLeave = (event: DragEvent) => {
  event.preventDefault();
  highlight.value = false;
}

const handleDrop = (event: DragEvent) => {
  if (props.disabled) return;
  event.preventDefault();
  if (event && event.dataTransfer && event.dataTransfer.files) {
    const files = Array.from(event.dataTransfer.files);
    emit('filesAdded', files);
    highlight.value = false;
  }
}
</script>

<template>
  <div class="dropzone" :class="{ highlight: highlight, disabled: disabled }" @click="openFileSelection"
    @dragover="handleDragOver" @dragleave="handleDragLeave" @drop="handleDrop">
    <span>Add file</span>
    <input ref="fileInput" class="file-input" type="file" multiple @change="handleFileChanged" />
  </div>
</template>

<style lang="scss">
.dropzone {
  border: 4px dashed #42b983;
  color: #42b983;
  font: bold 24px arial;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.file-input {
  display: none;
}

.highlight {
  background-color: #b3dbc9;
}

.disabled {
  border-color: gray;
  color: gray;
}
</style>
