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
      bg="green.900"
    >
      <HStack gap={7} alignItems="center" justifyContent="space-around" >
        {/* <Flex direction="row" gap={7} alignItems="center" justifyContent="space-around"> */}
        <Link to="/login">
          <Text color="white" fontSize="lg" fontWeight="bolder">Fiverr Business</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >Explore</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >English</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >INR</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >Become a seller</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >Website Design</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >Logo Design</Text>
        </Link>
      </HStack>
    </Flex>
  );
}

export default Navbar1;