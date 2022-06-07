import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function TimelineItem({ title, description }) {
  return (
    <Box ml={[1, 5]} mb={[8, 9]}>
      <Flex direction="row">
        <Box mr={4} mt={1}>
          <Image alt="Checked Icon" src="/icons/check.svg" width={18} height={18} />
        </Box>
        <Text fontWeight="bold" fontSize={["md", "lg"]}>
          {title}
        </Text>
      </Flex>
      <Flex direction>
        <Box mr={[8, 9]} mt={1} />
        <Text mt={3} fontSize={["sm", "md"]} lineHeight={1.8}>
          {description}
        </Text>
      </Flex>
    </Box>
  );
}
