import { Box, Center, Flex ,FormControl,FormLabel, Select, Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {  Button, Card, CardBody, Grid, Heading, Image, Input,  Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { HandleGEtOrder } from '../Api/Api';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';


const initialdata = {
    image:"",
    title:"",
    category:"",
    price:"",
    
  
   }
const AdminPage = () => {
const[formdata , setformdata] = useState(initialdata)
const [orderData , setorderData] = useState([])
const [ordertotal , setordertotal] = useState(1*Math.floor(Math.random() * 9000) + 1000)
const [Selected , setSelect] = useState("")
const [data , setdata] = useState([])
const[page , setpage] = useState(1)
const [totalPage , settotalPage] = useState(1)
 let lastPage = totalPage/7
const toast = useToast()
const [recent , setrecent] = useState(false)

useEffect(()=>{
    FetchCartItem()
},[])

  const FetchCartItem = ()=>{
    HandleGEtOrder()
    .then((res) => setorderData(res.data))
  }
     

  const handleAccept =(id , price ,count)=>{
 let acceptdata = orderData.filter(el=> el.id!==id)
 setorderData(acceptdata)
 setordertotal(ordertotal - price*count)
 {
    toast({
        title: 'Admin',
        description: "Order Accepted Successfully.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
 }
  }
  const handleAccept1 =(id , price ,count)=>{
    let acceptdata = orderData.filter(el=> el.id!==id)
    setorderData(acceptdata)
    setordertotal(ordertotal - price*count)
    {
       toast({
           title: 'Admin',
           description: "Order Rejected Successfully.",
           status: 'error',
           duration: 9000,
           isClosable: true,
         })
    }
     }

////////-----------------------------get order by using seletc option--------------------------------------------------------

 
const getProducts = ()=>{
    return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/${Selected}`,
        params:{
            _page:page,
            _limit:7,
            _sort:"id",
            _order:'desc'
        }
    })
    .then((res) => {
        settotalPage(res.headers.get('x-total-count'))
        setdata(res.data)
    })
}
  

useEffect(()=>{
    if(Selected){
        getProducts()
    }
},[Selected,page])


//-----------------------------------delete product--------------------------------------------------------

 const deleteProduct=(id)=>{
    return axios({
        method:"delete",
        url:`https://mock-server-json-x067.onrender.com/${Selected}/${id}`
    }).then((res) => {
        console.log(res)
        getProducts()
    })
 }

 //---------------------------------post request using seletc option-------------------------------------
 const handleChange = (e)=>{
    // console.log(e.target.value)
    setformdata({
      ...formdata,
      [e.target.name] : e.target.type==="number"? Number(e.target.value) : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    handlePostrequest(formdata)
    // setformdata(initialdata)
    setrecent(true)
 }
 

 const handlePostrequest = (data)=>{
    return axios({
       method:"post",
       url:`https://mock-server-json-x067.onrender.com/${Selected}`,
       data:data
    }).then(() => getProducts())
 }


  return (
    <div style={{marginTop:"150px"}}>
      <Heading>Welcome To Admin's Portal</Heading>
      <Box  height={"auto"} w={"95%"} margin="auto" marginTop={20} border="1px solid red">

         <Flex justifyContent={"space-between"}>
         <Box  broder="1px solid blue" height={"100%"}>
         <Tabs broder="1px solid blue" isFitted variant='enclosed'>
                <TabList mb='2em'  >
                    <Tab>Manage Orders</Tab>
                    <Tab>Manage Products</Tab>
                    <Tab>Add Products</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                     <Table >
                        <Thead>
                            <Th>Order No</Th>
                            <Th>Title</Th>
                            <Th>Price</Th>
                            <Th>Image</Th>
                            <Th>Quantity</Th>
                            
                        </Thead>
                        <Tbody>
                           {
                            orderData && orderData.map((el) => (
                                <Tr>
                                    <Td>{el.id + Math.floor(Math.random() * 9000) + 1000}</Td>
                                    <Td>{el.title}</Td>
                                    <Td>₹ {el.price}</Td>
                                    <Td><Image src={el.image} alt={el.title} w={10}/></Td>
                                    <Td>{el.count}</Td>
                                    <Td><Button color={"white"} bg={"green"} _hover={"green"} onClick={() =>handleAccept(el.id , el.price,el.count)}>Accept</Button></Td>
                                    <Td><Button color={"white"} bg={"red"} _hover={"red"} onClick={() =>handleAccept1(el.id , el.price,el.count)}>Reject</Button></Td>
                                    
                                </Tr>
                            ))
                           }
                           <Tr><span><Text>{`Total Sell      ${ordertotal}`}</Text></span></Tr>
                        </Tbody>
                     </Table>
                     
                    </TabPanel>
                    <TabPanel>
                    <Select placeholder='Select option' value={Selected} onChange={(e) => setSelect(e.target.value)} >
                            <option value='mensProducts'>Mens Prodcuts</option>
                            <option value='womensProducts'>Womens Products</option>
                            <option value='kidsProducts'>Kids Products</option>
                    </Select>

                    <Table marginTop={10}>
                        <Thead>
                            <Th>Order No</Th>
                            <Th>Title</Th>
                            <Th>Price</Th>
                            <Th>Image</Th>
                            
                            
                        </Thead>
                        <Tbody>
                           {
                            data && data.map((el) => (
                                <Tr>
                                    <Td>{el.id}</Td>
                                    <Td>{el.title}</Td>
                                    <Td>₹ {el.price}</Td>
                                    <Td><Image src={el.image} alt={el.title} w={10}/></Td>
                                    
                                    <Td><Button color={"white"} bg={"green"} _hover={"green"} onClick={() =>handleAccept(el.id , el.price,el.count)}>Edit </Button></Td>
                                    <Td><Button color={"white"} bg={"red"} _hover={"red"} onClick={() => deleteProduct(el.id)}>Delete</Button></Td>
                                    
                                </Tr>
                            ))
                           }
                           
                        </Tbody>
                     </Table>
                        <Button isDisabled={page===1} onClick={() => setpage(1)}>First</Button>
                       <Button isDisabled={page===1} onClick={() => setpage(page-1)}>Previous</Button>
                       <Button isDisabled>{page}</Button>
                       <Button isDisabled={page===lastPage} onClick={() => setpage(page+1)}>Next</Button>
                       <Button isDisabled={page===lastPage} onClick={() => setpage(lastPage)}>Last</Button>
                    </TabPanel>
                  <TabPanel>
                  <Flex justifyContent={"space-around"}>
                  <Select placeholder='Select option' value={Selected} onChange={(e) => setSelect(e.target.value)} >
                            <option value='mensProducts'>Mens Prodcuts</option>
                            <option value='womensProducts'>Womens Products</option>
                            <option value='kidsProducts'>Kids Products</option>
                    </Select>
                   <Center marginLeft={150} marginRight={150}>
                   

                   <Card  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"}>
              <CardBody bg={"yellow"}>
                
            <form  onSubmit={handleSubmit} style={{border:"3px solid black" , padding:"10px" , backgroundColor:"white"} } >
            <FormControl w="330px" >
          <Text fontSize='4xl' marginTop="40px" >Add Product</Text>
              <FormLabel>Product name</FormLabel>
              <Input type='text'  placeholder='enter title' border="1px solid black"
               name='title'
               onChange={handleChange}
              />
              <FormLabel>Price</FormLabel>
              <Input type='text'  placeholder='enter price' border="1px solid black"
                name='price'
                onChange={handleChange}
              />
              <FormLabel>Category</FormLabel>
              <Input type='text'  placeholder='enter category' border="1px solid black"
                 name='category'
                 onChange={handleChange}
              />
              
              <FormLabel>Image URL</FormLabel>
              <Input type='text'  placeholder='enter image url' border="1px solid black"
               name='image'
               onChange={handleChange}
              />
              <Input type="submit" value="Add Product" bg="black" color="white"/>
           </FormControl>
            </form>
            </CardBody>
          </Card>
                   </Center>

                   <Box>
                   <Heading>Recently Added Item</Heading>
                       {recent ? <Card>
                       
                         <Image src={formdata.image} alt={formdata.title} />
                         <Text fontWeight={"bold"}>Title :{formdata.title}</Text>
                         <Text fontWeight={"bold"}>Price :{formdata.price}</Text>
                         <Text fontWeight={"bold"}>Category :{formdata.category}</Text>
                       </Card>
                         : null}
                   </Box>

                  </Flex>
                  </TabPanel>

                </TabPanels>
         </Tabs>
         </Box>  
                  
    </Flex>

      </Box>
    </div>
  );
}

export default AdminPage;
