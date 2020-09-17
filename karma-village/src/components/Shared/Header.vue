<template>
    <v-app-bar app class="header__toolbar">
        <v-toolbar-title class="header__title headline font-weight-ligth has-text-weight-semibold is-uppercase">
            <span class="font-weight-light">Quest App</span>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class HeaderComponent extends Vue {
    }
</script>

<style lang="scss">
    $bg-color: #3F51B5;

    .header__toolbar.theme--light.v-toolbar {
        background-color: $bg-color;
    }

    .header__title {
        background-color: $bg-color;
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
