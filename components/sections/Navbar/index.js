import { Button } from "@chakra-ui/button";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import Link from "next/link";
import { Show } from "@chakra-ui/react";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box w="100%" px={[4, 4, 16, 48, 72]} py={[8, 10, 12]}>
      <Link href="/">
        <Show below="md">
          <Text
            fontSize={["2xl"]}
            fontWeight="black"
            cursor="pointer"
            userSelect="none"
            textAlign="center"
            pb="4"
          >
            ABUZA
          </Text>
        </Show>
      </Link>
      <Flex justify="space-between" alignItems="center">
        {/* BRAND TITLE */}
        <Show above="md">
          <Link href="/">
            <Text
              fontSize={["1xl", "2xl"]}
              fontWeight="black"
              cursor="pointer"
              userSelect="none"
            >
              ABUZA
            </Text>
          </Link>
          <Spacer />
        </Show>

        {/* HOME LINK */}
        <Link href="/">
          <Text
            ml={[4, 10, 16, 12]}
            fontSize={["sm", "md"]}
            cursor="pointer"
            userSelect="none"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Home
          </Text>
        </Link>

        {/* Project LINK */}
        <Link href="/project">
          <Text
            ml={[4, 10, 16, 12]}
            fontSize={["sm", "md"]}
            cursor="pointer"
            userSelect="none"
            _hover={{
              textDecoration: "underline",
            }}
          >
            Projects
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
            Blogs
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
          _focus
          aria-label="Change Theme"
          width={[4, 8, 10]}
          height={[6, 8, 10]}
          borderRadius="full"
          outline="none"
          onClick={toggleColorMode}
        >
          <SunIcon />
        </Button>
      </Flex>
    </Box>
  );
}
