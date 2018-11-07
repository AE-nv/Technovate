<template>
    <div>
        <v-textarea auto-grow v-model="text" box rows="1" color="aliceblue" label="Response"></v-textarea>
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
        this.$emit('text', this.text);
        this.text = '';
    }
}
</script>

<style>

</style>
