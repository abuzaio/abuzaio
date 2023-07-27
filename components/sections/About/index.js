import { Box, Center, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box px={[8, 10, 16, 48]} py={[8, 10]}>
      <Center minHeight="md">
        <Box>
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight="extrabold"
            letterSpacing="widest"
            textAlign="center"
          >
            About
          </Text>
          <Text textAlign="center" mt={4} maxW="2xl" lineHeight={1.7}>
            Hey, I&apos;m Abu Aziz. A pragmatic problem solver.
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
