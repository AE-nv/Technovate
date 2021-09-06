<template>
    <div class="text-area-box">
        <v-textarea auto-grow v-model="text" filled rows="1" :label="label"></v-textarea>
        <v-btn @click="addResponse" :disabled="!text">{{ btnText }}</v-btn>
    </div>
</template>

<script lang="ts">
    import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

    @Component({})
    export default class TextAreaBox extends Vue {
        @Prop({default: 'Submit'})
        public btnText: string;

        @Prop({default: 'Response'})
        public label: string;

        private text: string = '';

        @Emit('text')
        private addResponse() {
            const output = this.text;
            this.text = '';
            return output;
        }
    }
</script>

<style lang="scss">
    .text-area-box {
        display: flex;
        flex-flow: column;
    }
</style>