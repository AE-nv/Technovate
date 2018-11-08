<template>
    <div class="text-area-box">
        <!-- TODO: bind value to property -->
        <v-textarea auto-grow v-model="text" box rows="1" color="aliceblue" :label="label"></v-textarea>
        <!-- TODO: bind a function to a click event -->
        <v-btn @click="addResponse" color="primary" class="text-area-box__submit-btn">{{ btnText }}</v-btn>
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
            // TODO: emit the response
            this.$emit('text', this.text);
            this.text = '';
        }
    }
</script>

<style lang="scss">

    .text-area-box {
        display: flex;
        flex-flow: column;

        &__submit-btn {

        }
    }

</style>
