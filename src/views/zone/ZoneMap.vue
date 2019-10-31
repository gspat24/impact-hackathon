<template>
  <div>
    <l-map ref="myMap" :zoom="13" :center="center" style="width:100%; height:calc(100vh - 84px - 38px)">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
    <!-- <GmapMarker
      ref="myMarker"
      :position="google && new google.maps.LatLng(1.38, 103.8)" /> -->
  </div>
</template>
<script>
import { LMap, LTileLayer } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
export default {
  components: {
    LMap,
    LTileLayer
  },
  mounted () {
    this.$nextTick(() => {
      // this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD()
    })
  },
  data() {
    return {
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  },
  computed: {
  }
}
</script>
