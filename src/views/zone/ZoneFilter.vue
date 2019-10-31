<template>
  <div class="text-left mx-5 mb-2">
    <b-dropdown variant="outline-primary" >
      <template v-slot:button-content variant="primary">
        <fa icon="filter" /> Filter
      </template>
      <b-dropdown-form style="width: 360px">

        <template v-for="zoneType in ZoneTypeList">
          <b-form-checkbox
            v-bind:key="zoneType['id']"
            v-model="checkList[zoneType['id']]"
            name="checkbox-1"
            value="accepted"
          >
            <fa icon="circle" :color="zoneType['color']" />{{zoneType['description']}}
          </b-form-checkbox>
        </template>
      </b-dropdown-form>
    </b-dropdown>

  </div>
</template>
<script>
import ZoneTypeList from '@/database/zone-type-store.js'
export default {
  data(){
    return {
      checkList: {}
    }
  },
  methods: {
    // changeFilter
  },
  computed: {
    ZoneTypeList(){
      return ZoneTypeList.state.zoneTypes
    }
  }
}
</script>
