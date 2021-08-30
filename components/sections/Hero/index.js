import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import heroData from "../../../data/hero.json";

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

          {/* INTEREST ITEMS */}
          {heroData.map((value, index) => (
            <Text
              key={index}
              fontSize={["sm", "md"]}
              mb={[5, 8]}
              lineHeight={1.8}
            >
              {value}
            </Text>
          ))}
        </Box>

        {/* RIGHT SIDE: WORKS ILLUSTRATION */}
        <Box ml={[0, 0, 0, 28]}>
          <Box borderRadius={20}>
            <Image
              src="/pictures/hero.svg"
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
