import axios from "axios"
export const GetmensProducts = (orderby,query)=>{
         

    if(orderby===""){
      return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/mensProducts`,
        
          params:{
            q:query
          }
        
       
      })
    }
      return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/mensProducts`,
        params:{
          q:query,
          _sort:"price",
          _order:orderby
        }
      })
}

export const GetWomensProducts = (orderby,query)=>{
  if(orderby===""){
    return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/womensProducts`,
      params:{
        q:query
      }
    
    })
  }
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/womensProducts`,
    params:{
      _sort:"price",
      _order:orderby
    }
  })
}

export const GetKidsProducts = (orderby,query)=>{
  if(orderby===""){
    return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/kidsProducts`,
      params:{
        q:query
      }
    })
  }
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/kidsProducts`,
    params:{
      _sort:"price",
      _order:orderby
    }
  
  })
}

export const Cartdata = (data)=>{
  console.log(data)
  return axios({
    method:"post",
    url:`https://mock-server-json-x067.onrender.com/cart`,
    data:data
  })
}
export const Cartdataget = ()=>{
 
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/cart`,
    
  })
}

export const CartDelete = (id)=>{
  return axios({
    method:"delete",
    url:`https://mock-server-json-x067.onrender.com/cart/${id}`,
    
  })
}

export const getdataforproddetails = (id)=>{
  return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/mensProducts/${id}`
  })
}
export const getdataforproddetails1 = (id)=>{
  return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/womensProducts/${id}`
  })
}