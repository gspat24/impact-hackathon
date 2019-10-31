<template>
  <div>
    <zone-filter />
    <zone-map />
  </div>
</template>
<script>
import ZoneMap from './ZoneMap'
import ZoneFilter from './ZoneFilter'
export default {
  components: {
    ZoneMap,
    ZoneFilter
  }
}
</script>
