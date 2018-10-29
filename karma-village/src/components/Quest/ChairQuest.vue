<template>
    <div style="height: 100%;">
        <navigation-component></navigation-component>

        <div style="height: 100%">

            <v-container class="info">
                <div style="display: flex;height: 100%;flex-direction: column;justify-content: space-between;">
                    <div>
                        <h3 style="text-align: center;padding-bottom: 12px;">
                            Have a chair for me?<br/>
                            My ideal chair has these characteristics:
                        </h3>
                        <div class="list-container">
                            <ul type="">
                                <li :style="{color: getColorColor}">Color: red</li>
                                <li>One seater</li>
                                <li>Not smelly</li>
                            </ul>
                            <div class="half">
                                <v-img :src="require('@/assets/Red_Chair.png')"></v-img>
                            </div>
                            <hr/>

                        </div>
                    </div>
                    <div>
                        <drop-zone :enabled="!uploading" v-on:filesAdded="onFilesAdded"></drop-zone>
                        <div v-if="this.files">
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

    @Component({
        components: {DropZone, NavigationComponent},
    })
    export default class ChairQuest extends Vue {
        @Prop() public quest!: IQuest;
        public keyWords: string[] = [];
        public file: File[] = [];
        private uploadProgress: { [key: string]: { state: string; percentage: number } } = {};
        private uploading = false;
        private successfullUploaded = false;

        get getColorColor() {
            if (this.file && this.keyWords.indexOf('red') > -1) {
                return 'green';
            }
            if (this.file) {
                return 'red';
            }
            return 'black';
        }

        public onFilesAdded(file: File[]) {
            debugger;
            this.file = file;
        }


    }
</script>

<style lang="scss">
    .info {
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
        font-family: FontAwesome;
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
</style>
