<template>
  <div>
    <l-map ref="myMap" :zoom="zoom" :center="center" style="width:100%; height:calc(100vh - 84px - 38px)">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-polygon :lat-lngs="coordinates" fill-color="red" :fill-opacity="0.9" color="red"></l-polygon>
    </l-map>
    <!-- <GmapMarker
      ref="myMarker"
      :position="google && new google.maps.LatLng(1.38, 103.8)" /> -->
  </div>
</template>
<script>
import { LMap, LTileLayer, LPolygon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
export default {
  components: {
    LMap,
    LTileLayer,
    LPolygon
  },
  mounted () {
    this.$nextTick(() => {
      // this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD()
    })
  },
  data() {
    return {
      zoom: 12,
      center: L.latLng(10.350853, 123.916998),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      coordinates: [
        [
          [10.350290, 123.906934],
          [10.356791, 123.909979],
          [10.350417, 123.914098]
        ]
      ]
    }
  },
  computed: {
  }
}
</script>
