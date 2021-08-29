import { Button } from "@chakra-ui/button";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import Link from "next/link";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box w="100%" px={[6, 10, 20, 24, 48]} py={[8, 10, 12]}>
      <Flex justify="space-between" alignItems="center">
        {/* BRAND TITLE */}
        <Link href="/">
          <Text
            fontSize={["lg", "1xl", "2xl"]}
            fontWeight="black"
            cursor="pointer"
            userSelect="none"
          >
            ABUZA
          </Text>
        </Link>
        <Spacer />

        {/* PORTFOLIO LINK */}
        <Link href="/portfolio">
          <Text
            ml={[4, 10, 16, 12]}
            fontSize={["sm", "md"]}
            cursor="pointer"
            userSelect="none"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Portfolio
          </Text>
        </Link>

        {/* BLOG LINK */}
        <Link href="/blog">
          <Text
            ml={[4, 10, 16, 12]}
            fontSize={["sm", "md"]}
            cursor="pointer"
            userSelect="none"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Blog
          </Text>
        </Link>

        {/* ABOUT LINK */}
        <Link href="/about">
          <Text
            mx={[4, 10, 16, 12]}
            fontSize={["sm", "md"]}
            cursor="pointer"
            userSelect="none"
            _hover={{
              textDecoration: "underline",
            }}
          >
            About
          </Text>
        </Link>

        {/* SWITCH THEME */}
        <Button
          width={[4, 8, 10]}
          height={[6, 8, 10]}
          borderRadius="full"
          _focus
          outline="none"
          onClick={toggleColorMode}
        >
          <SunIcon />
        </Button>
      </Flex>
    </Box>
  );
}
