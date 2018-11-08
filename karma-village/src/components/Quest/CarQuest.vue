<template>
    <div style="height: 100%;">
        <navigation-component>
            <v-btn flat @click="$router.go(-1)">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-btn flat @click="$router.go(-1)" :disabled="!isQuestComplete">Complete Quest</v-btn>
        </navigation-component>


        <div style="height: 100%">
            <v-container class="info">
                <div class="info-header">
                    <h3 style="text-align: center;padding-bottom: 12px;">
                        Oh no, my car broke down! Can you recommend me a new one?<br/>
                    </h3>
                    <div class="info-container">
                        <p>Search for cars using the inputfield below. If you find one that suits me, recommend
                            it!</p>
                    </div>
                    <div class="info-container">
                        <p>My car should have:</p>
                        <ul>
                            <li>Room for 3 children</li>
                            <li>A sporty look</li>
                            <li>A lot of safety features</li>
                            <li>A BMW Logo</li>
                        </ul>
                    </div>

                </div>
                <hr/>
                <div class="car-quest__text-box">
                    <!-- Include the text-area-box component from the components/Shared folder -->
                    <text-area-box @text="searchForCars"
                                   :btnText="'Search Cars'"
                                   :label="'Car keywords go here'"></text-area-box>
                </div>

                <hr />

                <div class="car-quest__results">

                    <!-- TODO: Implement a message to show when the list of cars is empty -->
                    <div v-if="foundCars.length === 0">
                        No cars with these keywords were found...
                    </div>

                    <div v-if="foundCars.length > 0">
                        <!--TODO: show the matching cars -->
                        <div style="padding-bottom:10px;" v-for="(res, index) in foundCars" :key="index">
                            <v-card style="padding:10px;" color="primary">
                                {{res.make_display}} - {{res.model_trim}}
                            </v-card>
                        </div>
                    </div>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script lang="ts">
    import NavigationComponent from '@/components/Shared/Navigation.vue';
    import TextAreaBox from '@/components/Shared/TextAreaBox.vue';
    import { Component, Vue } from 'vue-property-decorator';
    import { Car, carSearchService } from '../../services/CarSearchService';

    @Component({
    components: {
        NavigationComponent,
        TextAreaBox,
    },
})
export default class CarQuest extends Vue {
    public recommendations: Car[] = [];
    public foundCars: Car[] = [];

    // TODO: create a computed function which returns whether the quest is complete or not
    get isQuestComplete(): boolean {
        return !!this.recommendations.filter((car: Car) => car.make_display.toLowerCase().indexOf('bmw'));
    }

    public searchForCars(value: string): void {
        this.foundCars = carSearchService.search(value);
    }

    public recommend(value: Car): void {
        this.recommendations.push(value);
    }
}

</script>

<style lang="scss" scoped>
    .info {
        color: aliceblue;
        height: 100%;
        background-color: #8895dc !important;
        .half {
            width: 50%;
            height: auto;
        }
    }

    .list-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        list-style: disc;
    }

    .car-quest__text-box {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    hr {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

</style>
