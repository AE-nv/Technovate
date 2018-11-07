<template>
    <div>
        <!-- TODO: bind value to property -->
        <v-textarea auto-grow v-model="text" box rows="1" color="aliceblue" label="Response"></v-textarea>
        <!-- TODO: bind a function to a click event -->
        <v-btn v-on:click="addResponse" color="primary">Submit</v-btn>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({

})
export default class TextAreaBox extends Vue {
    private text: string = '';

    private addResponse() {
        // TODO: emit the response
        this.$emit('text', this.text);
        this.text = '';
    }
}
</script>

<style>

</style>
