<template>
  <div>
      <b-button v-b-modal.modal-1 variant="primary"><fa icon="plus" /> Add Zone Type</b-button>

      <b-modal ref="zoneModalForm" id="modal-1" title="BootstrapVue">
        <b-form-group
          label="Description:"
        >
          <b-form-input
            required
            v-model="description"
            placeholder="Description"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Details:"
          description="Describe what is this zone about"
        >
          <b-form-input
            required
            v-model="details"
            placeholder="Details"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Color:"
          description="The color this zone would represent. You can use hex, or color names"
        >

          <b-input-group >
            <template v-if="color" v-slot:append>
              <b-input-group-text class="bg-white" :style="{ 'background-color': 'color' }" >
                <fa icon="circle" :color="color"/>
              </b-input-group-text >
            </template>
            <b-form-input
              required
              v-model="color"
              placeholder="Color"
            ></b-form-input>
          </b-input-group>

        </b-form-group>
        <b-form-group
          label="Attribute Name:"
          description="The name of intensity indicator. Example: Population, Number of Establishments, Flood Proneness level"
        >
          <b-form-input
            required
            v-model="keyAttributeName"
            placeholder="Attribute Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Zone Data Fields:"
          description="Other Data that is required for a zone under this zone type"
        >
          <b-form-input
            required
            v-model="attributes"
            placeholder="Separate fields by comma(,)"
          ></b-form-input>
        </b-form-group>

        <template v-slot:modal-footer>
          <b-button>Cancel</b-button>
          <b-button v-if="!id" @click="save" variant="success" >Create</b-button>
          <b-button v-else variant="success" >Update</b-button>
        </template>
      </b-modal>
  </div>
</template>
<script>
import ZoneTypeStore from '@/database/zone-type-store.js'
export default {
  data(){
    return {
      id: null,
      description: null,
      details: null,
      color: null,
      keyAttributeName: null,
      attributes: '',
    }
  },
  methods: {
    _view(id){
      let zoneType = ZoneTypeStore.getters.zoneTypes({ id: id })[0]
      this.description = zoneType.description
      this.details = zoneType.details
      this.color = zoneType.color
      this.keyAttributeName = zoneType.keyAttributeName
      this.attributes = zoneType.attributes.join(', ')
      this.$refs.zoneModalForm.show()
      console.log('test', ZoneTypeStore.getters.zoneTypes({
        where_in: {
          id: [1, 2, 5]
        }
      }))
    },
    save(){
      ZoneTypeStore.commit('add', {
        description: this.description,
        details: this.details,
        color: this.color,
        keyAttributeName: this.keyAttributeName,
        attributes: this.attributes.split(','),
      })
      this.$refs.zoneModalForm.hide()
    }
  },
  computed: {
    zoneTypeList(){
      return ZoneTypeStore.state.zoneTypes
    }
  }
}
</script>
