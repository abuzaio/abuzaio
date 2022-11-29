import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <Box w="100%" px={[6, 10, 20, 24, 48]} py={[8, 10, 12]}>
      <Flex
        direction={["column", "row"]}
        justify={["center", "space-between"]}
        alignItems="center"
      >
        {/* COPYRIGHT TEXT */}
        <Text
          fontSize={["sm", "md"]}
          textAlign={["center", "left"]}
          mb={[4, 0]}
        >
          © {new Date().getFullYear()} by Abu Aziz. All Rights Reserved.
        </Text>
        <Spacer />
        <Flex direction="row">
          {/* TWITTER LINK */}
          {/* <Link href="https://twitter.com/abuzaio"> */}
            <a target="_blank" aria-label="Twitter">
              <Box cursor="pointer" mx={3} _hover={{ opacity: 0.7 }}>
                <Image alt="Checked Icon" src="/icons/twitter.svg" width={20} height={20} />
              </Box>
            </a>
          {/* </Link> */}

          {/* GITHUB LINK */}
          <Link href="https://github.com/ruizenio">
            <a target="_blank" aria-label="Github">
              <Box cursor="pointer" mx={3} _hover={{ opacity: 0.7 }}>
                <Image alt="Checked Icon" src="/icons/github.svg" width={20} height={20} />
              </Box>
            </a>
          </Link>

          {/* EMAIL ACTION */}
          {/* <Link href="mailto:abuaziscorp@gmail.com"> */}
            <a target="_blank" aria-label="Email">
              <Box cursor="pointer" mx={3} _hover={{ opacity: 0.7 }}>
                <Image alt="Checked Icon" src="/icons/email.svg" width={20} height={20} />
              </Box>
            </a>
          {/* </Link> */}
        </Flex>
      </Flex>
    </Box>
  );
}
