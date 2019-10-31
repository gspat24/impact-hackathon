import Vuex from 'vuex'
// import Vue from 'vue'
let underscore = require('underscore')
let store = new Vuex.Store({
  state: {
    zone: [] // see the add mutation to determine the fields
  },
  getters: {
    zone: (state) => (query) => {
      let result = null
      if(typeof query['id'] !== 'undefined'){
        result = underscore.filter(state.zone, { id: query['id'] })
      }else{
        result = state.zone
      }
      return result
    },
  },
  mutations: {
    add(state, data){
      state.zone.push({
        id: state.zone.length + (new Date()).getTime(),
        zoneTypeId: data.zoneTypeId,
        description: data.description,
        details: data.details,
        keyAttributeValue: data.keyAttributeValue,
        createdAt: data.createdAt,
        deletedAt: data.deletedAt,
        attributes: data.attributes,
        polygon: data.polygon, // coordinates of the polygon
      })
    }
  }
})
export default store
