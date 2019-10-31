import Vuex from 'vuex'
// import Vue from 'vue'
let underscore = require('underscore')
let store = new Vuex.Store({
  state: {
    // see the add mutation to determine the fields
    zones: [ {
      id: Math.random(),
      zone_type_id: 2,
      description: 'Lorem Ipsum2',
      keyAttributeValue: 40,
      coordinates: [
        [
          [10.350290, 123.906934],
          [10.356791, 123.909979],
          [10.350417, 123.914098]
        ]
      ]
    }, {
      id: Math.random(),
      zone_type_id: 1,
      description: 'Lorem Ipsum',
      keyAttributeValue: 50,
      coordinates: [
        [
          [10.371473, 123.887236],
          [10.374090, 123.902078],
          [10.371979, 123.912717],
          [10.358048, 123.887064]
        ]
      ]
    }, {
      id: Math.random(),
      zone_type_id: 3,
      description: 'Lorem Ipsum',
      keyAttributeValue: 65,
      coordinates: [
        [
          [10.353067, 123.877532],
          [10.348592, 123.860030],
          [10.340655, 123.842100],
          [10.336518, 123.850158]
        ]
      ]
    }, {
      id: Math.random(),
      zone_type_id: 4,
      description: 'Lorem Ipsum',
      keyAttributeValue: 75,
      coordinates: [
        [
          [10.354962, 123.91451],
          [10.354687, 123.914975],
          [10.350371, 123.913431],
          [10.350529, 123.913753]
        ]
      ]
    }, {
      id: Math.random(),
      zone_type_id: 1,
      description: 'Lorem Ipsum',
      keyAttributeValue: 75,
      coordinates: [
        [
          [10.356454, 123.882349],
          [10.343948, 123.890752],
          [10.342747, 123.874776],
          [10.338357, 123.849553]
        ]
      ]
    }, {
      id: Math.random(),
      zone_type_id: 3,
      description: 'Lorem Ipsum',
      keyAttributeValue: 50,
      coordinates: [
        [
          [10.315881, 123.889130],
          [10.318457, 123.899210],
          [10.302117, 123.900283],
          [10.298950, 123.890372],
        ]
      ]
    }]
  },
  getters: {
    zones: (state) => (query) => {
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
