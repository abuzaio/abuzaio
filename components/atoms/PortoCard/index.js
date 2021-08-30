import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function PortoCard({
  url,
  imageSrc,
  title,
  description,
  stacks,
  isOdd = true,
}) {
  return (
    <Link href={url}>
      <a target="_blank">
        <Box
          my={[20, 20, 28]}
          bgColor=""
          transitionDuration="1s"
          cursor="pointer"
          borderRadius="lg"
          _hover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <Flex
            direction={
              isOdd
                ? ["column", "column", "column", "row"]
                : ["column", "column", "column", "row-reverse"]
            }
            justifyContent="space-between"
            alignItems="center"
            borderRadius="lg"
          >
            <Image
              src={imageSrc}
              width={576}
              height={336}
              objectFit="cover"
              placeholder="blur"
              blurDataURL={imageSrc}
            />
            <Box
              p={[9, 9, 10, 12]}
              px={[4, 6, 0, 12]}
              w={["100%", "100%", "70%", "50%"]}
              h="100%"
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="start"
              >
                <Text
                  fontSize={["lg", "xl", "2xl", "3xl"]}
                  fontWeight="bold"
                  opacity={0.875}
                  mb={2}
                >
                  {title}
                </Text>
                <Text fontSize={["sm", "md", "md", "lg"]} color="grey">
                  {description}
                </Text>
                <Box mt={[6, 8]}>
                  <Text fontWeight="bold" fontSize={["md", "md", "lg"]} mb={2}>
                    Tech Stack :
                  </Text>
                  <Flex direction="row" alignItems="center">
                    {stacks.map((value, index) => (
                      <Box key={index} mx={2} my={1}>
                        {value}
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </a>
    </Link>
  );
}
