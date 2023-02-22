import axios from "axios"
export const GetmensProducts = ()=>{
      return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/mensProducts`,
      
      })
}

export const GetWomensProducts = ()=>{
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/womensProducts`,
  
  })
}

export const GetKidsProducts = ()=>{
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/kidsProducts`,
  
  })
}