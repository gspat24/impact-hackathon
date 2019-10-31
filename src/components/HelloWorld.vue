<template>
  <div>
    <!-- <GmapMarker
      ref="myMarker"
      :position="google && new google.maps.LatLng(1.38, 103.8)" /> -->
  </div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  computed: {
    google: gmapApi
  }
}
</script>
