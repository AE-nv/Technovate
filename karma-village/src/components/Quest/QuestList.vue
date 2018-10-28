<template>
    <v-list two-line>
        <template>
            <v-img
                   contain
                   class="my-3 home-image"
                   height="200"
                    :src="require('@/assets/logo.svg')"></v-img>
                    <v-carousel>
                        <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.image"
                        ></v-carousel-item>
                    </v-carousel>
            <div v-for="(quest,index) in quests" :key="index">
                <div :key="index">
                    <quest-tile v-bind:quest="quest"></quest-tile>
                    <v-divider
                            v-if="index + 1 < quests.length"
                            :key="index"
                    ></v-divider>
                </div>
            </div>
        </template>
    </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestTile from "./QuestTile.vue";
import { questService } from "@/services/Quest.service";

import { IQuest } from "@/models/IQuest";

@Component({
  components: {
    QuestTile
  },
  data() {
    return {
      items: [
        {
          src: require("@/assets/bike.jpeg")
        },
        {
          src: require("@/assets/bike.jpeg")
        },
        {
          src: require("@/assets/bike.jpeg")
        },
        {
          src: require("@/assets/bike.jpeg")
        }
      ]
    };
  }
})
export default class QuestList extends Vue {
  private quests: IQuest[] = [];

  private created() {
    this.quests = questService.getAllQuests();
  }
}
</script>

<style>
/* .home > div > div, .home > div{
        background-color: #132584!important;
    } */
</style>
