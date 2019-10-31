import Vuex from 'vuex'
import Controller from './controller'
import Vue from 'vue'
Vue.use(Vuex)
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
      attributes: ('Plantable Area, Soil Type, Moisture Level').split(', ')
    }, {
      id: 2,
      description: 'Malnourished Population',
      details: 'Areas where the malnourished is high',
      color: '#adf7e7',
      keyAttributeName: 'Nutrition Level',
      attributes: ('Type of Houses, Water Source, Water Quality').split(', ')
    }, {
      id: 3,
      description: 'Commercial Area',
      details: 'Areas that has lots of commercial establishments',
      color: '#0c52af',
      keyAttributeName: 'Revenue',
      attributes: ('Number of Establishment, Building Types').split(', ')
    }, {
      id: 4,
      description: 'Flood Prone Area',
      details: 'Areas that are prone to flooding during heavy rain',
      color: '#e6291b',
      keyAttributeName: 'Alert level',
      attributes: ('Number of Residents, Chance of flooding').split(', ')
    }, {
      id: 5,
      description: 'Constructable Land',
      details: 'Areas where 3 storey or more building can be built',
      color: '#428bff',
      keyAttributeName: 'Maximum Floor',
      attributes: ('Type of Soil, Zoning').split(', ')
    }]
  },
  getters: {
    zoneTypes: (state) => (query) => {
      let result = state.zoneTypes
      return Controller.retrieveQuery(result, query)
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
