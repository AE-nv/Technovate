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
                            Have a chair for me?<br/>
                        </h2>
                        <div class="quest-info">
                            <div>
                                <p>
                                    My ideal chair has these characteristics:
                                </p>
                                <ul>
                                    <li>Chair</li>
                                    <li>Color: red</li>
                                    <li>Made out of plastic</li>
                                </ul>
                            </div>
                            <div class="quest-image">
                                <v-img :src="require('@/assets/Red_Chair.png')"></v-img>
                            </div>
                        </div>          
                    </div>
                </v-container>
            </v-card>
            <v-card>
                <v-container>
                    <h3 class="quest-header">
                        Add a picture of the chair you can offer
                    </h3>

                    <!--TODO 1: add the drop-zone element -->
                    <!--TODO 2: show list of files that are uploaded -->
                    <!--TODO 3: call function whenever a file is added that sends file to google api service -->
                    <!--TODO 4: determine if result of google api contains required characteristics to complete quest -->
                    <!--TODO 5: provide user feedback in the list of characteristics -->
                
                </v-container>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import NavigationComponent from '@/components/Shared/Navigation.vue';
import { googleApiService, GoogleVisionResponse } from '@/services/GoogleApi.service';
import JQuery from 'jquery';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IQuest } from '../../models/IQuest';

const $ = JQuery;

@Component({
    components: { NavigationComponent},
})
export default class ChairQuest extends Vue {

    get isQuestComplete(): boolean {
        return false;
    }
}
</script>

<style lang="scss" scoped>
    .quest-info {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 100%;
    }

    .quest-uploader {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }

    .quest-image{
        width: 40%;
    }

    ul {
        list-style: disc;
    }

    .file-select > .select-button {
        padding: 1rem;

        color: white;
        background-color: #2EA169;

        border-radius: .3rem;

        text-align: center;
        font-weight: bold;
    }

    /* Don't forget to hide the original file input! */
    .file-select > input[type="file"] {
        display: none;
    }

    // Define vars we'll be using
    $brand-success: #5cb85c;
    $loader-size: 7em;
    $check-height: $loader-size/2;
    $check-width: $check-height/2;
    $check-left: ($loader-size/6 + $loader-size/12);
    $check-thickness: 6px;
    $check-color: $brand-success;

    .circle-loader {
        margin-bottom: $loader-size/2;
        border: 3px solid rgba(0, 0, 0, 0.2);
        border-left-color: $check-color;
        animation: loader-spin 1.2s infinite linear;
        position: relative;
        display: inline-block;
        vertical-align: top;
        border-radius: 50%;
        width: $loader-size;
        height: $loader-size;
    }

    .load-complete {
        -webkit-animation: none;
        animation: none;
        border-color: $check-color;
        transition: border 500ms ease-out;
    }

    .checkmark {
        display: none;

        &.draw:after {
            animation-duration: 800ms;
            animation-timing-function: ease;
            animation-name: checkmark;
            transform: scaleX(-1) rotate(135deg);
        }

        &:after {
            opacity: 1;
            height: $check-height;
            width: $check-width;
            transform-origin: left top;
            border-right: $check-thickness solid $check-color;
            border-top: $check-thickness solid $check-color;
            content: '';
            left: $check-left;
            top: $check-height;
            position: absolute;
        }
    }

    @keyframes loader-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes checkmark {
        0% {
            height: 0;
            width: 0;
            opacity: 1;
        }
        20% {
            height: 0;
            width: $check-width;
            opacity: 1;
        }
        40% {
            height: $check-height;
            width: $check-width;
            opacity: 1;
        }
        100% {
            height: $check-height;
            width: $check-width;
            opacity: 1;
        }
    }
</style>
