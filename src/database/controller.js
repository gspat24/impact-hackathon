let underscore = require('underscore')
export default {
  retrieveQuery: (resultSet, query) => {
    if(typeof query['id'] !== 'undefined'){
      resultSet = underscore.filter(resultSet, { id: query['id'] })
    }else{
      if(typeof query['where_in'] !== 'undefined'){
        for(let column in query['where_in']){
          resultSet = underscore.filter(resultSet, (row) => {
            return (query['where_in'][column]).indexOf(row[column]) !== -1
          })
        }
      }
    }
    return resultSet
  }
}
