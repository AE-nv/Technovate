<!--<template>-->
    <!--&lt;!&ndash;-->
   <!--Everything is wrapped in a label, which acts as a clickable wrapper around a form element.-->
   <!--In this case, the file input.-->
 <!--&ndash;&gt;-->
    <!--<label class="file-select">-->
        <!--&lt;!&ndash; We can't use a normal button element here, as it would become the target of the label. &ndash;&gt;-->
        <!--<div class="select-button">-->
            <!--&lt;!&ndash; Display the filename if a file has been selected. &ndash;&gt;-->
            <!--<span v-if="value">Selected File: {{value.name}}</span>-->
            <!--<span v-else>Select File</span>-->
        <!--</div>-->
        <!--&lt;!&ndash; Now, the file input that we hide. &ndash;&gt;-->
        <!--<input type="file" @change="handleFileChange"/>-->
    <!--</label>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--props: {-->
            <!--// Using value here allows us to be v-model compatible.-->
            <!--value: File,-->
        <!--},-->

        <!--methods: {-->
            <!--handleFileChange(e) {-->
                <!--// Whenever the file changes, emit the 'input' event with the file data.-->
                <!--this.$emit('input', e.target.files[0]);-->
            <!--},-->
        <!--},-->
        <!--name: 'FileSelect',-->
    <!--};-->
<!--</script>-->

<!--<style scoped>-->
    <!--.file-select > .select-button {-->
        <!--padding: 1rem;-->

        <!--color: white;-->
        <!--background-color: #2EA169;-->

        <!--border-radius: .3rem;-->

        <!--text-align: center;-->
        <!--font-weight: bold;-->
    <!--}-->

    <!--/* Don't forget to hide the original file input! */-->
    <!--.file-select > input[type="file"] {-->
        <!--display: none;-->
    <!--}-->
<!--</style>-->