<template>
    <div>
        <vuetify-google-autocomplete
            id="map"
            append-icon="search"
            placeholder="Start typing"
            v-on:placechanged="getAddressData"
        >
        </vuetify-google-autocomplete>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import VueGoogleAutocomplete from 'vue-google-autocomplete';

@Component({
    components: {
        VueGoogleAutocomplete,
    },
})
export default class LocationComponent extends Vue {
    private address: any;

    private getAddressData(addressData, placeResultData, id) {
        this.address = addressData;
    }
}
</script>

<style>

</style>
