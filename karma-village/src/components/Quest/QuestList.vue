<template>
    <div>
        <v-card v-for="(quest,index) in quests" :key="index">
            <v-container>
                <quest-tile v-bind:quest="quest"></quest-tile>
             </v-container>
        </v-card>
   </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import QuestTile from './QuestTile.vue';
import {questService} from '@/services/Quest.service';

import {IQuest} from '@/models/IQuest';

@Component({
  components: {
    QuestTile,
  },
})
export default class QuestList extends Vue {
  private quests: IQuest[] = [];

  private created() {
    this.quests = questService.getAllQuests();
  }
}
</script>

<style>

</style>
