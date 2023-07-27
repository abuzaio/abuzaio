import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathName = usePathname();

  return (
    <Box w="100%" px={[6, 10, 16, 48, 72]} py={[8, 10, 12]}>
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
          <Link
            href={pathName}
            // target="_blank"
            aria-label="Twitter"
          >
            <Box cursor="pointer" mx={3} _hover={{ opacity: 0.7 }}>
              <Image
                alt="Checked Icon"
                src="/icons/twitter.svg"
                width={20}
                height={20}
              />
            </Box>
          </Link>

          {/* GITHUB LINK */}
          <Link
            href={pathName}
            // target="_blank"
            aria-label="Github"
          >
            <Box cursor="pointer" mx={3} _hover={{ opacity: 0.7 }}>
              <Image
                alt="Checked Icon"
                src="/icons/github.svg"
                width={20}
                height={20}
              />
            </Box>
          </Link>

          {/* EMAIL ACTION */}
          <Link
            href={pathName}
            // target="_blank"
            aria-label="Email"
          >
            <Box cursor="pointer" mx={3} _hover={{ opacity: 0.7 }}>
              <Image
                alt="Checked Icon"
                src="/icons/email.svg"
                width={20}
                height={20}
              />
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
