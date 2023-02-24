import React, { useEffect, useState } from 'react';
import { GetWomensProducts } from '../Api/Api';
import WomensCarousel from '../Components/WomensCrousel';
import { Box,  Card, Grid, Image, Text, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink,  Flex } from '@chakra-ui/react';
import Loader from '../Components/Loader';
import DrawerEx from '../Components/Drawer';
const WomensProducts = () => {
    const [womensdata , setwomensdata] = useState([])
    const [loading , setloading] = useState(false)
    const [orderby , setorderby] = useState("")
  useEffect(()=>{
    FetchWomensData(orderby)
  },[orderby])
     
 const FetchWomensData = (orderby)=>{
   setloading(true)
    GetWomensProducts(orderby)
    .then((res) =>{
      setloading(false)
        setwomensdata(res.data)
    })
 } 

   return (
    <div>
     <WomensCarousel/>

     <div marginTop={20}>
       <Breadcrumb marginTop={20} marginLeft={20}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/womens'>Womens</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Womens Products</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
       
       </div>
      
       <Flex className='filter' justify={"start"} marginLeft="75px" marginTop={5}>
              <DrawerEx  setorderby={setorderby} />
           </Flex>

     <Box marginTop={20}>
       {loading ? <Loader/> : <Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)"}} gap="30px">
            {
                womensdata && womensdata.map((el)=>(
                    <Card key={el.id} padding="15px" alignItems={"center"}>
                        <Image src={el.image} alt={el.title} w="70%" />
                        <Text fontWeight={"bold"}>{el.title}</Text>
                        <Text >{el.category}</Text>
                        <Text fontWeight={"bold"}> ₹ {el.price}</Text>
                    </Card>
                ))
            }
        </Grid>}
       </Box>

    </div>
  );
}

export default WomensProducts;
