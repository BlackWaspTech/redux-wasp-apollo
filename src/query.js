/**
 * Update Apollo Cache
 * 
 * @param {Object} props - Passing in props with Apollo Client passed in
 * @param {Object} query - The query being made to the Apollo Cache, as well as, updating the Database
 * @param {Object} variables - Variables needed to execute the query
 * 
 */


const WaspLinkQuery = (props, query, variables) => {
  // Make sure Query is an Object before processing
  if(typeof query != 'Object') {
    return Promise.reject(
      "Query must be a GQL Object. Given: " + typeof variables
    )
  }
  
  if(!variables) {
    const q = {
      query: query
    }
    props.client.query(q)
  } else {
    // Make sure variables is an Object before processing
    if(typeof variables != 'Object') {
      return Promise.reject(
        "Variables must be an Object. Given: " + typeof variables
      )
    }
    const q = {
      query: query,
      variables: variables
    }
    props.client.query(q)
  }
}

export default WaspLinkQuery;