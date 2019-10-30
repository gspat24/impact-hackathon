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

let store = new Vuex.Store({
  state: {
    /***
      fields: Description, Detail, Hex Color, Key Attributes Name, Key Attribute Value, Attributes, Created At, Updated At, Deleted At
     **/
    zoneTypes: []
  },
  getters: {
    zoneTypes: (zoneTypes) => {
      return state.zoneTypes
    },
  },
  mutations: {
    add(state, data){
      console.log('adskit', data)
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
