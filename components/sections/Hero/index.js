import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";

export default function Hero() {
  return (
    <Box px={[8, 10, 20, 24, 48]} py={[10]}>
      <Flex
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        alignItems="center"
      >
        {/* LEFT SIDE: INTRODUCTION TEXT */}
        <Box>
          <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="extrabold"
            letterSpacing="widest"
            mb={[8, 10]}
          >
            こんにちは, I&apos;m Abu Aziz
          </Text>

          {/* INTEREST TEXT 1 */}
          <Text fontSize={["sm", "md"]} mb={[5, 8]}>
            💫 Have interest at Software Engineering and Astrophysics
          </Text>

          {/* INTEREST TEXT 2 */}
          <Text fontSize={["sm", "md"]} mb={[5, 8]}>
            💻 Build Full-Stack apps with Flutter, Firebase, NextJS, and
            Typescript
          </Text>

          {/* INTEREST TEXT 3 */}
          <Text fontSize={["sm", "md"]} mb={[5, 8]}>
            🔬 Doing some research projects on Neuroscience and Astronomy
          </Text>

          {/* INTEREST TEXT 4 */}
          <Text fontSize={["sm", "md"]} mb={[5, 8]}>
            📝 Currently work as Freelancer and likes to write personal blogs /
            article about Science, Anime, and Technology
          </Text>
        </Box>

        {/* RIGHT SIDE: WORKS ILLUSTRATION */}
        <Box ml={[0, 0, 0, 28]}>
          <Box borderRadius={20}>
            <Image
              src="/hero.svg"
              alt="Picture of The Author"
              width={600}
              height={600}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
