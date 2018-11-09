<template>
    <v-app>
        <header-component></header-component>
        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HeaderComponent from '@/components/Shared/Header.vue';

@Component({
        components: {
            HeaderComponent,
        },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
    .quest-header{
        text-align: center;
    }

    .full-height{
        height:100%;
    }

    .quest-info {
        height: 100%;

        .half {
            width: 50%;
            height: auto;
        }
    }

    .v-card {
        margin: 10px;
    }

</style>