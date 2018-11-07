<template>
<v-container>
    <navigation-component>
        <v-btn flat @click="$router.go(-1)">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-btn flat @click="$router.go(-1)" :disabled="!isQuestComplete">Complete Quest</v-btn>
    </navigation-component>
    <v-card>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Location</h3>
                <div>Please give the location where we can find your quest</div>
            </div>
        </v-card-title>

        <v-card-actions>
            <location @address="addressGiven"></location>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import NavigationComponent from '@/components/Shared/Navigation.vue';
import Location from '@/components/Shared/Location.vue';

@Component({
    components: {
        NavigationComponent,
        Location,
    },
})
export default class CarQuest extends Vue {
    private isQuestComplete: boolean = false;

    private addressGiven(value: any) {
        if (value) {
            this.isQuestComplete = true;
        } else {
            this.isQuestComplete = false;
        }
    }
}
</script>

<style>

</style>
