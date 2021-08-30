import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import PortoCard from "../../atoms/PortoCard";
import portfolioData from "../../../data/portfolio.json";

export default function Portfolio() {
  return (
    <Box px={[8, 10, 20, 24]} py={[8, 10]}>
      <Center h={120}>
        <Text
          fontSize={["3xl", "4xl"]}
          fontWeight="extrabold"
          letterSpacing="widest"
        >
          Portfolio
        </Text>
      </Center>
      {portfolioData.map((value, index) => (
        <PortoCard
          key={index}
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
      ))}
    </Box>
  );
}
