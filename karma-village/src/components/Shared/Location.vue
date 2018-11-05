<template>
    <div>
    <vue-google-autocomplete
        id="map"
        classname="form-control"
        placeholder="Start typing"
        v-on:placechanged="getAddressData"
    >
    </vue-google-autocomplete>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import VueGoogleAutocomplete from 'vue-google-autocomplete';

@Component({
    components: {
        VueGoogleAutocomplete,
    }
})
export default class LocationComponent extends Vue {
    address: any;

    getAddressData(addressData, placeResultData, id) {
        this.address = addressData;
    }
}
</script>

<style>

</style>
