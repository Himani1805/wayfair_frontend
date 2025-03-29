import { Flex, VStack, Link, Text } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { FaArrowRight } from "react-icons/fa";
import AccountMenu from "./AccountMenu";
// import { SearchIcon } from "@chakra-ui/icons";


export default function Header() {
  return (
    <VStack width={"100%"}>
      <Flex  width={"100%"} justifyContent={"space-between"} px={" 60px"} py={"4px"} background={"#7c189f"} >
        <Link color="white" _hover={{textDecoration:"underline"}}>SPRING CYBER WEEK | UP TO 80% OFF ENDS TOMORROW <FaArrowRight color="white" /></Link>
        <Link color="white" _hover={{textDecoration:"underline"}}>Rewards | Financing | Professional | Everything Ships FREE*</Link>
      </Flex>
      <Flex width={"100%"} justifyContent={"space-around"} px={" 60px"} py={"4px"}>
        <Flex width={"15%"}>
        <Text fontWeight="bold" fontSize="28px" color="#7c189f">Wayfair</Text>

        </Flex>
        <Flex width={"70%"}>
          <SearchBar />
        </Flex>
        <Flex width={"30%"} gap={"20px"} justifyContent={"flex-end"}>
          <Link href="#" fontWeight={"500"}><MdOutlineAccountCircle  _hover={{color:"#7c189f"}} size={30} />  Account  </Link>
          <Link href="#" fontWeight={"500"} ><AiOutlineShoppingCart _hover={{color:"#7c189f" }} size={30}/>Cart</Link>
        </Flex>
      </Flex>
    </VStack>
  );
}
 



    