import { useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

export default function Project({ type }) {
  return (
    <Box px={[8, 10, 20, 24]} py={[8, 10]}>
      <Center minHeight="md">
        <Box>
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight="extrabold"
            letterSpacing="widest"
            textAlign="center"
          >
            Project
          </Text>
          <Text textAlign="center" mt={4}>
            I aim to solve client&apos;s design and fullstack projects, feel
            free to hit me up!
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
