<template>
    <div>
        <div style="height: 100%" class="large">
            
        <v-container class="info">
        <p>
            Have a chair for me? 
            My ideal chair has these characteristics:
        </p>
        <ul>
            <li>Color: red</li>
            <li>Two seater</li>
            <li>Not smelly</li>
        </ul>
        </v-container>        
    </div>
    <navigation-component></navigation-component>

    </div>
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IQuest } from '../../models/IQuest';
import NavigationComponent from '@/components/Shared/Navigation.vue';

@Component({
  components: { NavigationComponent },
})
export default class ChairQuest extends Vue {
  @Prop()
  public quest!: IQuest;
}
</script>

<style>
.info {
  background-color: #8895dc !important;
}
</style>
