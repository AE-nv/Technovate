<template>
    <v-list-tile
        :key="quest.title"
        avatar
        
            :to="`/quest/${quest.id}`"
    >
        <v-list-tile-content>
            <v-list-tile-title>{{ quest.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ quest.description }}</v-list-tile-sub-title>
        </v-list-tile-content>

    </v-list-tile>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {RawLocation, Location} from 'vue-router';

import {IQuest} from '@/models/IQuest';

@Component({})
export default class QuestTileComponent extends Vue {
    @Prop() public quest!: IQuest;
}
</script>

<style>

</style>
