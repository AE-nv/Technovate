<template>
    <v-list two-line>
        <template v-for="(quest,index) in quests">
            <div :key="index">
                <quest-tile v-bind:quest="quest"></quest-tile>
                <v-divider
                v-if="index + 1 < quests.length"
                :key="index"
                ></v-divider>
            </div>
        </template>
    </v-list>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
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
