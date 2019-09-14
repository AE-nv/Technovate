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
                        <text-area-box @text="searchForCars" :btnText="'Search Cars'" :label="'Car keywords go here'"></text-area-box>
                        <car-list :cars="foundCars" :btnText="'thumb_up'" @carClicked="recommend"></car-list>
                    </v-container>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import CarList from '@/components/Shared/CarList.vue';
    import NavigationComponent from '@/components/Shared/Navigation.vue';
    import { Component, Vue } from 'vue-property-decorator';
    import { Car, carSearchService } from '../../services/CarSearchService';
    import TextAreaBox from '@/components/Shared/TextAreaBox.vue';

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

        get isQuestComplete(): boolean {
            return !!this.recommendations.find((car: Car) => car.make_display.toLowerCase().indexOf('bmw') > -1);
        }

        public searchForCars(value: string): void {
            this.foundCars = carSearchService.search(value);
        }

        public recommend(value: Car): void {
            this.recommendations.push(value);
            this.foundCars.splice(this.foundCars.indexOf(value), 1);
        }

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

    .car-card {
        margin: 0px 0px 10px 0px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
    }
</style>
