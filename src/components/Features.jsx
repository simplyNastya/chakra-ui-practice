import { Box, Stack, HStack, Icon, Text } from "@chakra-ui/react";

import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icons";

const Features = () => {
  return (
    <Box as="section" maxW="1024px" margin="auto" pt="60px" pb="8">
      <Stack
        as="ul"
        direction={["column", "column", "row"]}
        spacing={["6", "6", "5"]}
        px="12"
      >
        <HStack as="li" spacing="6">
          <Icon as={MoneyBackGuaranteeIcon} boxSize={["8", "8", "12"]} />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            30 days money back Guarantee
          </Text>
        </HStack>
        <HStack as="li" spacing="6">
          <Icon as={HassleFreeIcon} boxSize={["8", "8", "12"]} />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            No setup fees 100% hassle-free
          </Text>
        </HStack>
        <HStack as="li" spacing="6">
          <Icon as={MonthlySubscriptionIcon} boxSize={["8", "8", "12"]} />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            No monthly subscription Pay once and for all
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Features;
