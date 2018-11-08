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
        padding-bottom: 12px;
    }

    .full-height{
        height:100%;
    }

    .info {
        color: aliceblue;
        height: 100%;
        background-color: #8895dc !important;

        .half {
            width: 50%;
            height: auto;
        }

        .info-header {
            padding-bottom: 12px;
        }
    }

</style>