<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-content>
            <router-view/>
        </v-content>
    </v-flex>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class App extends Vue {

    }
</script>

<style lang="scss">
    .v-card {
        margin: 10px;
    }

    ul {
       list-style-type: disc;
       margin-left: 40px;
    }
</style>