<template>
  <div>
    {{zoneTypeLookUp[1]}}
    <div class="text-left mx-5 mb-2">
      <b-dropdown variant="outline-primary" >
        <template v-slot:button-content variant="primary">
          <fa icon="filter" /> Filter
        </template>
        <b-dropdown-form style="width: 360px">
          <template v-for="zoneType in zoneTypeLookUp">
            <b-form-checkbox
              v-bind:key="zoneType['id']"
              @change="changeFilter(zoneType['id'])"
              name="checkbox-1"
            >
              <fa icon="circle" :color="zoneType['color']" />{{zoneType['description']}}
            </b-form-checkbox>
          </template>
        </b-dropdown-form>
      </b-dropdown>

    </div>
    <l-map ref="myMap" :zoom="zoom" :center="center" style="width:100%; height:calc(100vh - 84px - 38px)">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <template v-for="zone in zoneList">
        <l-polygon v-if="zoneTypeLookUp[zone['zone_type_id']]['selected']" v-bind:key="zone['id']" :lat-lngs="zone['coordinates']" tooltip="yawa" :fill-color="zoneTypeLookUp[zone['zone_type_id']]['color']" :fill-opacity="zone['keyAttributeValue'] / 100" :opacity="zone['keyAttributeValue'] / 110"  :color="zoneTypeLookUp[zone['zone_type_id']]['color']"></l-polygon>
      </template>
    </l-map>
    <!-- <GmapMarker
      ref="myMarker"
      :position="google && new google.maps.LatLng(1.38, 103.8)" /> -->
  </div>
</template>
<script>
import Vue from 'vue'
import { LMap, LTileLayer, LPolygon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import ZoneTypeStore from '@/database/zone-type-store'
export default {
  components: {
    LMap,
    LTileLayer,
    LPolygon
  },
  mounted () {
    let zoneTypes = ZoneTypeStore.state.zoneTypes
    for(let x = 0; x < zoneTypes.length; x++){
      zoneTypes[x]['selected'] = true
      Vue.set(this.zoneTypeLookUp, zoneTypes[x]['id'], zoneTypes[x])
    }
    this.$nextTick(() => {
      // this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD()
    })
  },
  data() {
    return {
      zoneTypeLookUp: {},
      zoom: 13,
      center: L.latLng(10.350853, 123.916998),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      zoneList: [],
    }
  },
  methods: {
    _setZones(zoneList){
      this.zoneList = zoneList
    },
    changeFilter(zoneTypeId){
      Vue.set(this.zoneTypeLookUp[zoneTypeId], 'selected', !this.zoneTypeLookUp[zoneTypeId]['selected'])
    }
  },
  computed: {
  }
}
</script>
