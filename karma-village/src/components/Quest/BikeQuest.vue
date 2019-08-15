<template>
    <v-container>
        <div class="full-height">
            <navigation-component>
                <v-btn flat @click="$router.go(-1)">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-btn flat @click="$router.go(-1)" :disabled="!isQuestComplete">Complete Quest</v-btn>
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
                     <v-card  v-for="(res, index) in responses" :key="index" class="response-card">
                        {{ res }}
                    </v-card>

                    <v-textarea auto-grow v-model="text" box rows="1" label="Response"></v-textarea>
                    <v-btn @click="addResponse" :disabled="!text">Submit</v-btn>
                    
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
    public responses: string[] = [];

    get isQuestComplete(): boolean {
        return false;
    }

    public addResponse(): void {
        this.responses.push(this.text);
        this.text = '';
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
