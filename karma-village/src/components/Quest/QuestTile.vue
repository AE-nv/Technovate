<template>
    <v-list-item
            :key="quest.title"
            :to="`/quest/${quest.link}`"
    >

        <v-list-item-avatar>
            <v-img
                    :src="getImage()"
                    class="my-3"
                    contain
                    height="200"
            ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>{{ quest.title }}</v-list-item-title>
            <v-list-item-subtitle class="text--primary">{{ quest.description }}</v-list-item-subtitle>
        </v-list-item-content>


    </v-list-item>
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
