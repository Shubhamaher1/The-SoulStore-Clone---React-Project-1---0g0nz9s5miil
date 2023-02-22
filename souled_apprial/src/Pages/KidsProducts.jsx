import React, { useEffect, useState } from 'react';
import { GetKidsProducts } from '../Api/Api';
import KidsCrousel from '../Components/KidsCrousel';
import { Box,  Breadcrumb,  BreadcrumbItem,  BreadcrumbLink,  Card, Flex, Grid, Image, Text } from '@chakra-ui/react';
import Loader from '../Components/Loader';
import DrawerEx from '../Components/Drawer';
const KidsProducts = () => {
    const [kids  ,setkids] = useState([])
    const [loading , setloading] = useState(false)
    useEffect(()=>{
       FetchKidsData()
    },[])
  const FetchKidsData = ()=>{
    setloading(true)
    GetKidsProducts()
    .then((res) =>{
      setloading(false)
         setkids(res.data)
    },[])
  }
 
  return (
    <div>
      <KidsCrousel/>

       <div marginTop={20}>
       <Breadcrumb marginTop={20} marginLeft={20}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/kids'>Kids</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Kids Products</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
       </div>
       <Flex className='filter' justify={"start"} marginLeft="75px" marginTop={5}>
              <DrawerEx  />
           </Flex>



      <div>
      <Box marginTop={20}>
        { loading ? <Loader/> : <Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)"}} gap="30px">
            {
              kids && kids.map((el)=>(
                    <Card key={el.id} padding="15px" alignItems={"center"}>
                        <Image src={el.image} alt={el.title} w="70%" />
                        <Text fontWeight={"bold"}>{el.title}</Text>
                        <Text >{el.category}</Text>
                        <Text fontWeight={"bold"}>{el.price}</Text>
                    </Card>
                ))
            }
        </Grid>}
       </Box>
      </div>
    </div>
  );
}

export default KidsProducts;
