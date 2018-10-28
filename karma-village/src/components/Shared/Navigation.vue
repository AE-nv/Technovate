<template>
<v-navigation-drawer permanent>
    <v-toolbar app full-width>
        <v-toolbar-items style="padding: 0">
            <v-btn flat><v-icon>arrow_back</v-icon></v-btn>
            <v-btn flat>Complete Quest</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</v-navigation-drawer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Navigation extends Vue {
    }
</script>

<style lang="scss">
    #app > div > nav > div{
        background-color: #3F51B5;
        color: #f5f5f5!important;
        width: 100%;
        padding: 4px 4px;
        display: flex;
        justify-content: center;
        .headline {
            align-self: center;
        }
    }

    .is-uppercase{
        text-transform: uppercase;
    }

</style>
