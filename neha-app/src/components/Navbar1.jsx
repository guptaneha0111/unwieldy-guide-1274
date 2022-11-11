import { Box, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar1() {

  return (
    <Flex
      minWidth="full"
      minHeight="30px"
      alignItems="center"
      gap="2"
      py={2}
      px={12}
      bg="pink.700"
    >
      <HStack gap={7} alignItems="center" justifyContent="space-around" >
        {/* <Flex direction="row" gap={7} alignItems="center" justifyContent="space-around"> */}
        <Link to="/login">
          <Text color="white" fontSize="lg" fontWeight="bolder">MAKEUP</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >SKIN</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >HAIR</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >PERSONAL CARE</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >MOM $ BABY CARE</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >BLOGS</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >PREMIUM</Text>
        </Link>
      </HStack>
    </Flex>
  );
}

export default Navbar1;