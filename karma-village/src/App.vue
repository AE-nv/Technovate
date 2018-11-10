<template>
    <v-app>
        <header-component></header-component>
        <v-flex xs12 sm6 offset-sm3>
            <v-content>
                <router-view/>
            </v-content>
        </v-flex>
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

    .v-card {
        margin: 10px;
    }

</style>