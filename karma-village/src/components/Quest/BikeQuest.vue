<template>
    <v-container>
        <div class="full-height">
            <navigation-component>
                <v-btn text @click="$router.go(-1)">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-btn text @click="$router.go(-1)" :disabled="!isQuestComplete">Complete Quest</v-btn>
            </navigation-component>
            <div>
                <v-card>
                    <v-container>
                        <h2 class="quest-header">
                            Have a bike for me?
                        </h2>
                        <div class="quest-container">
                            <div class="quest-image">
                                <v-img :src="require('@/assets/bike.png')"></v-img>
                            </div>
                        </div>
                        <div class="quest-container">
                            <p>
                                I'm looking for a bike with two wheels, pedals and a saddle.
                                Preferably not too far from Leuven.
                                Leave a comment if you have one available.
                            </p>
                        </div>
                </v-container>
            </v-card>
            <v-card>
                <v-container>
                    <v-textarea auto-grow v-model="text" filled rows="1" label="Response"></v-textarea>
                    <v-card class="response-card">
                        {{ text }}
                    </v-card>
                    
                    <!--TODO 3: add response to list + show the list of all responses -->
                    <!--TODO 4: implement function to determine if quest is complete -->
                    <!--TODO 5: add the textbox to a seperate component -->
                    </v-container>
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavigationComponent from '@/components/Shared/Navigation.vue';

@Component({
    components: { NavigationComponent },
})
export default class BikeQuest extends Vue {
    public text: string = '';

    private get isQuestComplete(): boolean {
        return false;
    }

}
</script>

<style lang="scss" scoped>
    .quest-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quest-image {
        width: 80%;
    }

    .response-card {
        margin: 0px 0px 10px 0px;
        padding: 10px;
    }
    
</style>
