<template>
  <div class="home">
    <questList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QuestList from '@/components/Quest/QuestList.vue';

@Component({
  components: {
    QuestList,
  },
})
export default class Home extends Vue {
}
</script>
