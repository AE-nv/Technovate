<template>
    <v-toolbar app>
        <v-toolbar-title class="headline font-weight-ligth has-text-weight-semibold is-uppercase">
            <span>Technovate</span>
            <span>  -  </span>
            <span class="font-weight-light">Quest App</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class HeaderComponent extends Vue {
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
