<template>
  <div>
    <b-container>
      Zone Type Management
      <br>
      <zone-type-form />
      <b-row class="mt-4">
        <b-col><b-table striped hover :items="zoneTypeList"></b-table></b-col>
      </b-row>
      <!-- Content here -->
    </b-container>
  </div>
</template>
<script>
import ZoneTypeForm from './ZoneTypeForm'
import ZoneTypeStore from '@/database/zone-type-store.js'
export default {
  components: {
    ZoneTypeForm
  },
  data(){
    return {
      items: [{
        age: 1
      }]
    }
  },
  computed: {
    zoneTypeList(){
      return ZoneTypeStore.state.zoneTypes
    }
  }
}
</script>
