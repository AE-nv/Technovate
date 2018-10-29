<template>
    <v-list-tile
            :key="quest.title"
            avatar
            :to="`/quest/${quest.link}`"
    >

        <v-list-tile-avatar>
            <v-img
                    :src="getImage()"
                    class="my-3"
                    contain
                    height="200"
            ></v-img>
        </v-list-tile-avatar>
        <v-list-tile-content>
            <v-list-tile-title>{{ quest.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ quest.description }}</v-list-tile-sub-title>
        </v-list-tile-content>


    </v-list-tile>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import {IQuest} from '@/models/IQuest';

    @Component({})
    export default class QuestTileComponent extends Vue {
        @Prop() public quest!: IQuest;

        public getImage() {
            return require('@/assets/' + this.quest.image);
        }
    }
</script>
<style>

</style>
