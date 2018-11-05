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
                <div style="display: flex;height: 100%;flex-direction: column;justify-content: space-evenly; align-items: center">

                    <div>
                        <h3 style="text-align: center;padding-bottom: 12px;">
                            Have a chair for me?<br/>
                            My ideal chair has these characteristics:
                        </h3>
                        <div class="list-container">
                            <ul type="" id="checks">
                                <li :style="{color: isChair}">Chair</li>
                                <li :style="{color: isColorRed}">Color: red</li>
                                <li :style="{color: getPlastic}">Made out of plastic</li>
                            </ul>
                            <div class="half">
                                <v-img :src="require('@/assets/Red_Chair.png')"></v-img>
                            </div>
                        </div>
                    </div>
                    <hr style="width: 100%;"/>
                    <div class="circle-loader" style="justify-self: center; display: none;margin-top: 24px;margin-bottom: 12px;" v-show="uploading">
                        <div class="checkmark draw"></div>
                    </div>
                    <div class="circle-loader load-complete" style="justify-self: center; display: none;margin-top: 24px;margin-bottom: 12px;" v-show="succesfulUpload">
                        <div class="checkmark draw"></div>
                    </div>
                    <div class="file-uploading" style="width: 95%;" v-show="!uploading && !succesfulUpload">
                        <h3 style="text-align: center;">Add a picture of the chair you can offer</h3>
                        <drop-zone :enabled="!uploading" v-on:filesAdded="onFilesAdded"></drop-zone>
                        <div v-if="files">
                            <p v-for="file in files">
                                {{file.name}}
                            </p>
                        </div>
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
import DropZone from '@/components/Shared/DropZone.vue';
import {googleApiService, GoogleVisionResponse} from '@/services/GoogleApi.service';
import JQuery from 'jquery';

const $ = JQuery;

@Component({
    components: {DropZone, NavigationComponent},
})
export default class ChairQuest extends Vue {

    get getPlastic(): string {
        return this.getColorKeywordPresent('plastic');
    }

    get isColorRed() {
        return this.getColorKeywordPresent('red');
    }

    get isChair() {
        return this.getColorKeywordPresent('chair');
    }

    get isQuestComplete(): boolean {
        return this.isKeywordPresent('chair')
            && this.isKeywordPresent('plastic')
            && this.isKeywordPresent('red');
    }

    @Prop() public quest!: IQuest;
    public keyWords: string[] = [];
    public files: File[] = [];
    private dominantColor: string;
    private uploading = false;

    public onFilesAdded(file: File[]) {
        $('.file-uploading').hide();
        $('.circle-loader').show();

        this.files = file;
        const file1 = file[0];
        googleApiService.detectLabels(file1).then((response: GoogleVisionResponse) => {
            this.keyWords = response.responses[0].labelAnnotations
                .map((labelAnnotation) => labelAnnotation.description);

            const dominantColor1 = response.responses[0].imagePropertiesAnnotation.dominantColors.colors.sort((color) => color.score)[0].color;
            this.dominantColor = (dominantColor1.red > dominantColor1.blue && dominantColor1.red > dominantColor1.green) ? 'red' : 'doesntmatter';
            this.keyWords.push(this.dominantColor);
            if (this.isQuestComplete) {
                $('.circle-loader').toggleClass('load-complete');
                $('.checkmark').toggle();
                $('.file-uploading').hide();
            } else {
                $('.circle-loader').hide();
                $('.file-uploading').show();
            }
        }).catch(reason => {
            $('.circle-loader').hide();
            $('.file-uploading').show();
            console.error('There was an error labeling the image through google api: ' + reason.toLocaleString());
            alert('An error occured while labeling the image through google vision api');
        });

    }

    private getColorKeywordPresent(keyWord: string): string {
        if (this.isKeywordPresent(keyWord)) {
            return 'green';
        }
        if (this.files) {
            return 'red';
        }
        return 'black';
    }

    private isKeywordPresent(keyword: string): boolean {
        return this.files && this.keyWords && this.keyWords.indexOf(keyword) > -1;
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
    }

    .list-container {
        display: flex;
        justify-content: space-between;
        align-items: center;;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding-left: 1.3em;
    }

    li:before {
        content: "\f00c"; /* FontAwesome Unicode */
        font-family: FontAwesome, serif;
        display: inline-block;
        margin-left: -1.3em; /* same as padding-left set on li */
        width: 1.3em; /* same as padding-left set on li */
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
