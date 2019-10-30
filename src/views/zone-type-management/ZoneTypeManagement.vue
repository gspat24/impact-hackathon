<template>
  <div>
    <b-container>
      <h2>Zone Type Management</h2>
      <br>
      <div class="text-right">
        <zone-type-form ref="zoneForm" />
      </div>
      <b-row class="mt-4">
        <b-col>
          <b-table @row-dblclicked="rowClicked" striped hover :fields="['color', 'description', 'details', 'keyAttributeName', 'attributes']" :items="zoneTypeList">
            <template v-slot:cell(color)="data">
              <fa icon="circle" :color="data.value"/>
            <!-- <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b> -->
            </template>
            <template v-slot:cell(attributes)="data">
              {{data.value.join(', ')}}
            </template>
          </b-table>
        </b-col>
      </b-row>
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
  methods: {
    rowClicked(selectedRows){
      console.log(selectedRows)
      this.$refs.zoneForm._view(selectedRows['id'])
    }
  },
  computed: {
    zoneTypeList(){
      return ZoneTypeStore.state.zoneTypes
    }
  }
}
</script>
