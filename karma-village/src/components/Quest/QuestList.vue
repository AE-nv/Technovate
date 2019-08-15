<template>
    <div>
        <header-component></header-component>

        <v-card v-for="(quest,index) in quests" :key="index">
            <v-container>
                <quest-tile v-bind:quest="quest"></quest-tile>
            </v-container>
        </v-card>
    </div>
</template>

<script lang="ts">
    import HeaderComponent from '@/components/Shared/Header.vue';
    import { IQuest } from '@/models/IQuest';
    import { questService } from '@/services/Quest.service';
    import { Component, Vue } from 'vue-property-decorator';
    import QuestTile from './QuestTile.vue';

    @Component({
        components: {
            QuestTile,
            HeaderComponent,
        },
    })
    export default class QuestList extends Vue {
        private quests: IQuest[] = [];

        private created() {
            this.quests = questService.getAllQuests();
        }
    }
</script>

<style lang="scss">
    .quest-header {
        text-align: center;
    }
</style>
