<script setup lang="ts">
import { ref } from 'vue';

withDefaults(defineProps<{
    label?: string;
    btnText?: string;
}>(), {
    label: 'Response',
    btnText: 'Submit'
})

const emit = defineEmits<{
    submit: [value: string]
}>()

const text = ref('');

const handleClick = () => {
    emit('submit', text.value);
    text.value = '';
}
</script>

<template>
    <v-textarea auto-grow v-model="text" filled rows="1" :label="label"></v-textarea>
    <v-btn @click="handleClick" :disabled="!text">{{ btnText }}</v-btn>
</template>
