<template>
    <div>
        <navigation-component>
            <v-btn text @click="$router.go(-1)">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-btn text @click="$router.go(-1)" :disabled="!isQuestComplete">Complete Quest</v-btn>
        </navigation-component>

        <div>
            <v-card>
                <v-container>
                    <div>
                        <h2 class="quest-header">
                            I'm looking for a car.<br/>
                        </h2>
                        <div>
                            <p>
                                Oh no, my car broke down! 
                                Can you recommend me a new one?
                                Search for cars using the inputfield below. 
                                If you find one that suits me, recommend it!
                            </p>
                            <p>My car should have:</p>
                            <ul>
                                <li>Room for 3 children</li>
                                <li>A sporty look</li>
                                <li>A lot of safety features</li>
                                <li>A BMW Logo</li>
                            </ul>
                        </div>
                    </div>
                </v-container>
            </v-card>
            <div>
                <v-card>
                    <v-container>
                        <h3 class="quest-header">
                            Recommended Cars
                        </h3>

                        <!-- TODO: Implement a message to show when the list of recommendations is empty -->
                        <car-list :cars="recommendations" :btnText="'thumb_down'" @carClicked="unrecommend"></car-list>
                    </v-container>
                </v-card>
            </div>

            <div>
                <v-card>
                    <v-container>
                        <h3 class="quest-header">
                            Search for Cars
                        </h3>
                        <div>
                            <!-- Include the text-area-box component from the components/Shared folder -->
                            <text-area-box @text="searchForCars"
                                           :btnText="'Search Cars'"
                                           :label="'Car keywords go here'"></text-area-box>
                        </div>

                        <div>
                            <!-- TODO: Implement a message to show when the list of cars is empty -->
                            <!-- TODO: Extract this and the recommended cars to a shared component -->
                            <car-list :cars="foundCars" :btnText="'thumb_up'" @carClicked="recommend"></car-list>
                        </div>
                    </v-container>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import CarList from '@/components/Shared/CarList.vue';
    import NavigationComponent from '@/components/Shared/Navigation.vue';
    import TextAreaBox from '@/components/Shared/TextAreaBox.vue';
    import { Component, Vue } from 'vue-property-decorator';
    import { Car, carSearchService } from '../../services/CarSearchService';

    @Component({
        components: {
            NavigationComponent,
            TextAreaBox,
            CarList,
        },
    })
    export default class CarQuest extends Vue {
        public recommendations: Car[] = [];
        public foundCars: Car[] = [];

        // TODO: create a computed function which returns whether the quest is complete or not
        get isQuestComplete(): boolean {
            return !!this.recommendations.find((car: Car) => car.make_display.toLowerCase().indexOf('bmw') > -1);
        }

        // TODO: Call the carSearchService in order to search for cars
        public searchForCars(value: string): void {
            this.foundCars = carSearchService.search(value);
        }

        // TODO: Implement the action to add a car to the recomendations list
        public recommend(value: Car): void {
            this.recommendations.push(value);
            this.foundCars.splice(this.foundCars.indexOf(value), 1);
        }

        // TODO: Implement the action to add a car to the recomendations list
        public unrecommend(value: Car): void {
            this.foundCars.push(value);
            this.recommendations.splice(this.recommendations.indexOf(value), 1);
        }

    }
</script>

<style lang="scss" scoped>
    .v-card {
        margin-bottom: 10px;
    }
</style>
