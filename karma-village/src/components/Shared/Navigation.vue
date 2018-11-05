<template>
    <v-toolbar app full-width>
        <v-toolbar-items style="padding: 0; display: flex; width: 100%">
            <slot></slot>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Navigation extends Vue {}
</script>

<style lang="scss">
.v-toolbar__content {
  width: 100%;
  display: flex;
  padding: 0;
  .v-toolbar__items {
    justify-content: space-between;
  }
}

#app > div > nav > div {
  background-color: #3f51b5;
  color: #f5f5f5 !important;
  width: 100%;
  padding: 4px 4px;
  display: flex;
  justify-content: center;
  .headline {
    align-self: center;
  }
}

.is-uppercase {
  text-transform: uppercase;
}
</style>
