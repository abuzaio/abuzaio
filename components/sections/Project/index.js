import Image from "next/image";
import PortoCard from "../../atoms/PortoCard";
import projectData from "../../../data/project.json";
import WhatsappIcon from "../../../public/icons/whatsapp.svg";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Fade, Flex, Link, Text } from "@chakra-ui/react";

export default function Project({ type }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <Box px={[8, 10, 20, 24]} py={[8, 10]}>
      <Center minHeight="md">
        <Box>
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight="extrabold"
            letterSpacing="widest"
            textAlign="center"
          >
            Project
          </Text>
          <Text textAlign="center" mt={4}>
            I aim to solve client&apos;s design and fullstack projects, feel
            free to hit me up!
          </Text>
        </Box>
      </Center>
      {/* {projectData
        .filter((element) =>
          type === "mobile" || type === "web" ? element.type == type : true
        )
        .slice(0, showAll ? projectData.length : 11)
        .map((value, index) => (
          <Fade key={index} in={true}>
            <PortoCard
              isOdd={index % 2 === 0}
              url={value.url}
              imageSrc={value.picture}
              title={value.title}
              description={value.description}
              stacks={value.stacks.map((item, count) => (
                <Image
                  key={count}
                  src={item.logo}
                  width={item.width}
                  height={item.height}
                  blurDataURL={item.logo}
                  quality={50}
                  placeholder="blur"
                />
              ))}
            />
          </Fade>
        ))}
      <Box
        mt={10}
        cursor="pointer"
        _hover={{ opacity: 0.7 }}
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        <Flex direction="row" justifyContent="center">
          <Text fontWeight="semibold" fontSize="lg" textAlign="center" mr={1}>
            {showAll ? "Show Less" : "See More"}
          </Text>
          {showAll ? (
            <ChevronUpIcon width={7} height={7} />
          ) : (
            <ChevronDownIcon width={7} height={7} />
          )}
        </Flex>
      </Box>

      <Box mt={28} mb={12}>
        <Flex direction="row" justifyContent="center">
          <Box>
            <Text fontSize="md" mb={4}>
              Hire Me For New Project
            </Text>
            <Center>
              <Link href="https://wa.me/628811955336" isExternal>
                <Button
                  px={5}
                  bgColor="blackAlpha.300"
                  variant="solid"
                  _hover={{
                    textDecoration: "none",
                  }}
                  leftIcon={
                    <Box mr={1}>
                      <Image src={WhatsappIcon} width={17} height={17} />
                    </Box>
                  }
                >
                  <Text size="md">Hire Me</Text>
                </Button>
              </Link>
            </Center>
          </Box>
        </Flex>
      </Box> */}
    </Box>
  );
}
