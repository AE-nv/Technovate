<template>
    <div class="text-area-box">
        <v-textarea auto-grow v-model="text" box rows="1" :label="label"></v-textarea>
        <v-btn @click="addResponse" :disabled="!text">{{ btnText }}</v-btn>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({})
    export default class TextAreaBox extends Vue {
        @Prop({default: 'Submit'})
        public btnText: string;

        @Prop({default: 'Response'})
        public label: string;

        private text: string = '';

        private addResponse() {
            this.$emit('text', this.text);
            this.text = '';
        }
    }
</script>

<style lang="scss">
    .text-area-box {
        display: flex;
        flex-flow: column;
    }
</style>