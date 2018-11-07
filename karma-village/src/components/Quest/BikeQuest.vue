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
                            Have a bike for me?<br/>
                        </h3>
                        <div class="info-container">
                            I'm looking for a bike with two wheels, pedals and a saddle. 
                            Preferably not too far from Leuven.
                            Leave a comment if you have one available.
                            <div class="half">
                                <v-img :src="require('@/assets/bike.jpeg')"></v-img>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <!--TODO 1: show the last response -->
                            <!--TODO 2: show the list of all responses -->
                            <div style="padding-bottom:10px;" v-for="(res, index) in responses" :key="index">
                                <v-card style="padding:10px;" color="primary">
                                    {{res}}
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

    //TODO: create a computed function which returns whether the quest is complete or not
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
    .info {
        color: aliceblue;
        height: 100%;
        background-color: #8895dc !important;

        .half {
            width: 50%;
            height: auto;
        }

        .info-header {
            padding-bottom: 12px;
        }
    }

    .info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;;
    }

</style>
