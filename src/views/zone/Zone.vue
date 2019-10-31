<template>
  <div>
    <zone-filter />
    <zone-map ref="zoneMap" />
  </div>
</template>
<script>
import ZoneMap from './ZoneMap'
import ZoneFilter from './ZoneFilter'
import ZoneStore from '@/database/zone-store'
export default {
  components: {
    ZoneMap,
    ZoneFilter
  },
  mounted(){
    setTimeout(() => {
      this.init()
    }, 3000)
  },
  methods: {
    init(){
      let zones = ZoneStore.state.zones
      this.$refs.zoneMap._setZones(zones)
    }
  }
}
</script>
