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

                        <!-- TODO: Show list of recommended cars -->

                    </v-container>
                </v-card>
            </div>

            <div>
                <v-card>
                    <v-container>
                        <h3 class="quest-header">
                            Search for Cars
                        </h3>
                        <text-area-box @text="searchForCars" :btnText="'Search Cars'" :label="'Car keywords go here'"></text-area-box>
                        <div v-for="(car, index) in foundCars" :key="index">
                            <v-card class="car-card">
                                <div>
                                    {{car.make_display}} - {{car.model_trim}}
                                </div>
                            </v-card>
                        </div>     
                        <!-- TODO 4: implement function to recommend car -->
                        <!-- TODO 5: implement function to unrecommend car -->
                        <!-- TODO 6: implement a message to show when the list of cars is empty -->
                        <!-- TODO 7: extract the list of found and recommended cars to a shared component -->
                    
                    </v-container>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import NavigationComponent from '@/components/Shared/Navigation.vue';
    import { Component, Vue } from 'vue-property-decorator';
    import { Car, carSearchService } from '../../services/CarSearchService';
    import TextAreaBox from '@/components/Shared/TextAreaBox.vue';

    @Component({
        components: {
            NavigationComponent,
            TextAreaBox,
        },
    })
    export default class CarQuest extends Vue {
        public foundCars: Car[] = [];

        get isQuestComplete(): boolean {
            return false;
        }

        public searchForCars(value: string): void {
            this.foundCars = carSearchService.search(value);
        }

    }
</script>

<style lang="scss" scoped>
    ul {
        list-style: disc;
    }

    .v-card {
        margin-bottom: 10px;
    }

    .car-card {
        margin: 0px 0px 10px 0px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
    }
</style>
