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

                        <!-- TODO 1: include the text-area-box component -->
                        <!-- TODO 2: implement function that calls the CarSearchService -->
                        <!-- TODO 3: show list of cars returned by the CarSearchService -->
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

    @Component({
        components: {
            NavigationComponent,
        },
    })
    export default class CarQuest extends Vue {

        get isQuestComplete(): boolean {
            return false;
        }

    }
</script>

<style lang="scss" scoped>
    .v-card {
        margin-bottom: 10px;
    }
</style>
