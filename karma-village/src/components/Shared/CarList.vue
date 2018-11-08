<template>
    <div class="car-list">
        <div v-if="cars.length === 0">
            No cars found...
        </div>

        <div style="padding-bottom:10px;" v-for="(car, index) in cars" :key="index">
            <v-card style="padding:10px;" color="primary">
                <div class="car-quest__car-card-title">
                    {{car.make_display}} - {{car.model_trim}}
                </div>
                <div class="car-quest__car-card-btn">
                    <v-btn @click="carClicked(car)" color="primary">
                        {{ btnText }}
                    </v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Car } from '../../services/CarSearchService';

    @Component({})
    export default class CarList extends Vue {
        @Prop({default: 'Submit'})
        public btnText: string;

        @Prop()
        public cars: Car[];

        private carClicked(value: Car) {
            // TODO: emit the response
            this.$emit('carClicked', value);
        }
    }
</script>

<style scoped>

</style>