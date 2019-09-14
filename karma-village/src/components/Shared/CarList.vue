<template>
    <div class="car-list">
        <div v-if="cars.length === 0">
            No cars found...
        </div>

        <div v-for="(car, index) in cars" :key="index">
            <v-card class="car-card">
                <div>
                    {{car.make_display}} - {{car.model_trim}}
                </div>
                <div>
                    <v-btn text icon @click="carClicked(car)">
                        <v-icon>{{btnText}}</v-icon>
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
            this.$emit('carClicked', value);
        }
    }
</script>

<style scoped>
    .car-card {
        margin: 0px 0px 10px 0px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
    }
</style>