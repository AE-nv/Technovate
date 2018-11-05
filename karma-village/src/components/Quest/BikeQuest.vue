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
                            Peferably not to far from Leuven. 
                            Lease a comment if you have one available.
                            <div class="half">
                                <v-img :src="require('@/assets/bike.jpeg')"></v-img>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style="padding-bottom:10px;" v-for="res in responses">
                                <v-card style="padding:10px;" color="primary">
                                    {{res}}
                                </v-card>
                            </div>
                        </div>
                        <div>
                            <v-textarea auto-grow v-model="response" box rows="1" color="aliceblue" label="Response"></v-textarea>
                            <v-btn v-on:click="addResponse" color="primary">Submit</v-btn>
                        </div>
                    </div>
            </v-container>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {IQuest} from '../../models/IQuest';
import NavigationComponent from '@/components/Shared/Navigation.vue';
import JQuery from 'jquery';

const $ = JQuery;

@Component({
    components: { NavigationComponent },
})
export default class BikeQuest extends Vue {
    public responses: string[] = [];
    public response: string = '';

    get isQuestComplete(): boolean {
        return this.responses.length >= 3;
    }

    public addResponse(): void {
        this.responses.push(this.response);
        this.response = '';
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
