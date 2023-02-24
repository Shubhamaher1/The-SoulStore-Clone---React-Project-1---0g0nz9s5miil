import axios from "axios"
export const GetmensProducts = (orderby)=>{
   
    if(orderby===""){
      return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/mensProducts`,
       
      })
    }
      return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/mensProducts`,
        params:{
          _sort:"price",
          _order:orderby
        }
      })
}

export const GetWomensProducts = (orderby)=>{
  if(orderby===""){
    return axios({
      method:"get",
      url:`https://mock-server-json-x067.onrender.com/womensProducts`,
      
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

export const GetKidsProducts = ()=>{
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/kidsProducts`,
  
  })
}