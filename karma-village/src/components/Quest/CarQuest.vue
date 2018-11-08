<template>
    <div class="full-height">
        <navigation-component>
            <v-btn flat @click="$router.go(-1)">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-btn flat @click="$router.go(-1)" :disabled="!isQuestComplete">Complete Quest</v-btn>
        </navigation-component>


        <div class="full-height">
            <v-container class="info">
                <div class="info-header">
                    <h1 class="quest-header">
                        Oh no, my car broke down! Can you recommend me a new one?<br/>
                    </h1>
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

                <h1>
                    Recommended Cars
                </h1>

                <!-- TODO: Implement a message to show when the list of recommendations is empty -->
                <car-list :cars="recommendations" :btnText="'x'" @carClicked="unrecommend"></car-list>

                <hr />

                <h1>
                    Search for Cars
                </h1>

                <div class="car-quest__text-box">
                    <!-- Include the text-area-box component from the components/Shared folder -->
                    <text-area-box @text="searchForCars"
                                   :btnText="'Search Cars'"
                                   :label="'Car keywords go here'"></text-area-box>
                </div>

                <hr/>

                <div class="car-quest__results">
                    <!-- TODO: Implement a message to show when the list of cars is empty -->
                    <!-- TODO: Extract this and the recommended cars to a shared component -->
                    <car-list :cars="foundCars" :btnText="'Recommend!'" @carClicked="recommend"></car-list>
                </div>
            </v-container>
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
            CarList
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
