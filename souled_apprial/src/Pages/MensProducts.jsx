import { Box, Card, Grid, Image, Text, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink, Flex} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GetmensProducts } from '../Api/Api';
import Carousel from '../Components/Crousel';
import DrawerEx from '../Components/Drawer';
import Loader from '../Components/Loader';

const MensProducts = () => {
const [mensdata ,setmensdata] = useState([])
const [loading , setloading] = useState(false)

useEffect(()=>{
    FecthMendsData()
},[])

const FecthMendsData = ()=>{
    setloading(true)
    GetmensProducts()
    .then((res) =>{
         setloading(false)
        setmensdata(res.data)
    })
}
  return (
    <div className='mens products' style={{marginTop:"80px"}}>
       <Carousel/>

       <div marginTop={20}>
       <Breadcrumb marginTop={20} marginLeft={20}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/mens'>Mens</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Mens Products</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
       </div>
       <Flex className='filter' justify={"start"} marginLeft="75px" marginTop={5}>
              <DrawerEx  />
           </Flex>

          
       <Box marginTop={20}>
       { loading ? <Loader/> : <Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)"}} gap="30px">
            { 
                mensdata && mensdata.map((el)=>(
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
  );
}

export default MensProducts;
