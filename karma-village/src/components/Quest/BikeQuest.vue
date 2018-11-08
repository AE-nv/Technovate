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
                        <h3 class="quest-header">
                            Have a bike for me?<br/>
                        </h3>
                        <div class="quest-image-container">
                                <div class="quest-image">
                                <v-img  :src="require('@/assets/bike.png')"></v-img>
                            </div>
                         </div>
                        <div>
                            I'm looking for a bike with two wheels, pedals and a saddle. 
                            Preferably not too far from Leuven.
                            Leave a comment if you have one available.
                        </div>
                    </div>
                    <div>
                        <div>
                            <!--TODO 1: show the last response -->
                            <!--TODO 2: show the list of all responses -->
                            <div class="card" v-for="(res, index) in responses" :key="index">
                                <v-card class="card-content" color="primary">
                                    <span class="card-content-text">{{res}}</span>
                                </v-card>
                            </div>
                        </div>
                        <!--TODO 1: create a text box + add the response to the list -->
                        <!--TODO 2: add the textbox to a seperate component -->
                        <text-area-box @text="addResponse"></text-area-box>
                    </div>
            </v-container>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavigationComponent from '@/components/Shared/Navigation.vue';
import TextAreaBox from '@/components/Shared/TextAreaBox.vue';

@Component({
    components: { NavigationComponent, TextAreaBox },
})
export default class BikeQuest extends Vue {
    public responses: string[] = [];
    public response: string = '';

    // TODO: create a computed function which returns whether the quest is complete or not
    get isQuestComplete(): boolean {
        let completed = false;
        for (const res of this.responses) {
            if (res.indexOf('saddle') > -1 && res.indexOf('pedals') > -1 && res.indexOf('wheels') > -1) {
                completed = true;
            }
        }
        return completed;
    }

    public addResponse(value: string): void {
        this.responses.push(value);
    }
}
</script>

<style lang="scss">
    .quest-image-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quest-image{
        width: 80%;
    }

    .card {
        padding-bottom: 10px;
    }

    .card-content {
        padding: 10px;
    }

    .card-content-text {
        color: aliceblue;
    }
</style>
