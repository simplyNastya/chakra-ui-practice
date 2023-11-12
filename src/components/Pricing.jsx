import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";

import { CheckIcon } from "../icons/Icons";

const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-40"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        textAlign="center"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="60px">
            <Heading fontSize="2xl" fontWeight="extrabold" mb="4">
              Premium PRO
            </Heading>
            <Text fontSize={["5xl", "5xl", "6xl"]} mb="2">
              $329
            </Text>
            <Text color="gray.900" fontSize="lg" fontWeight="medium" mb="6">
              billed just once
            </Text>
            <Button
              colorScheme="purple"
              size="lg"
              w={["160px", "180px", "282px"]}
            >
              Get started
            </Button>
          </Box>
          <Box p="60px" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <VStack as="ul" spacing="5" pt="6" alignItems="start">
              <HStack as="li" spacing="5">
                <Icon as={CheckIcon} w="22px" h="22px" />
                <Text textAlign={["left", "left", "center"]}>
                  International calling and messaging API
                </Text>
              </HStack>
              <HStack as="li" spacing="5">
                <Icon as={CheckIcon} w="22px" h="22px" />
                <Text textAlign={["left", "left", "center"]}>
                  Additional phone numbers
                </Text>
              </HStack>
              <HStack as="li" spacing="5">
                <Icon as={CheckIcon} w="22px" h="22px" />
                <Text>Automated messages via Zapier</Text>
              </HStack>
              <HStack as="li" spacing="5">
                <Icon as={CheckIcon} w="22px" h="22px" />
                <Text textAlign={["left", "left", "center"]}>
                  24/7 support and consulting
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
