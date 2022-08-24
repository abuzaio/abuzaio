import { Box, Center, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box px={[8, 10, 20, 24]} py={[8, 10]}>
      <Center minHeight={320}>
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
            Hey, I&apos;m Abu Aziz. Information Systems Student and App Developer.
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
