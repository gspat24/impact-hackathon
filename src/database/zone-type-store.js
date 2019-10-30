// export default class ZoneType{
//
//   zones = []
//   create(description, detail, color, keyAttributeName, keyAttributeValue, attributes, createdAt, updatedAt, deletedAt = null){
//     zones.push()
//   }
//   retrieve(filter = null){
//
//   }
//   update(){
//
//   }
//   delete(){
//
//   }
// }

import Vuex from 'vuex'
// import Vue from 'vue'
let underscore = require('underscore')
let store = new Vuex.Store({
  state: {
    /***
      fields: Description, Detail, Hex Color, Key Attributes Name, Key Attribute Value, Attributes, Created At, Updated At, Deleted At
     **/
    zoneTypes: [{
      id: 1,
      description: 'Agricultural Land',
      details: 'A Land Area suitable for farming',
      color: 'green',
      keyAttributeName: 'Nutrition Level',
      attributes: 'Plantable Area, Soil Type, Moisture Level'
    }, {
      id: 2,
      description: 'Malnourished Population',
      details: 'Areas where the malnourished is high',
      color: '#adf7e7',
      keyAttributeName: 'Nutrition Level',
      attributes: 'Type of Houses, Water Source, Water Quality'
    }, {
      id: 3,
      description: 'Commercial Area',
      details: 'Areas that has lots of commercial establishments',
      color: '#0c52af',
      keyAttributeName: 'Revenue',
      attributes: 'Number of Establishment, Building Types'
    }, {
      id: 4,
      description: 'Flood Prone Area',
      details: 'Areas that are prone to flooding during heavy rain',
      color: '#e6291b',
      keyAttributeName: 'Alert level',
      attributes: 'Number of Residents, Chance of flooding'
    }, {
      id: 5,
      description: 'Constructable Land',
      details: 'Areas where 3 storey or more building can be built',
      color: '#428bff',
      keyAttributeName: 'Maximum Floor',
      attributes: 'Type of Soil, Zoning'
    }]
  },
  getters: {
    zoneTypes: (state) => (query) => {
      let result = null
      if(typeof query['id'] !== 'undefined'){
        result = underscore.filter(state.zoneTypes, { id: query['id'] })
      }else{
        result = state.zoneTypes
      }
      return result
    },
  },
  mutations: {
    add(state, data){
      state.zoneTypes.push({
        id: state.zoneTypes.length + (new Date()).getTime(),
        description: data.description,
        details: data.details,
        color: data.color,
        keyAttributeName: data.keyAttributeName,
        attributes: data.attributes
      })
    }
  }
})
export default store
