import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import PortoCard from "../../atoms/PortoCard";

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
      <PortoCard
        isOdd
        url="https://www.pld-ui.com/"
        imageSrc="/pld-fkui.png"
        title="Seminar PLD UI 2022/2023"
        description="Registration and Payment System for PLD UI Seminars"
        stacks={[
          <Image
            key={1}
            src="/react.png"
            width={46}
            height={46}
            quality={50}
            placeholder="blur"
            blurDataURL="/react.png"
          />,
          <Image
            key={2}
            src="/node.png"
            width={105}
            height={70}
            quality={50}
            placeholder="blur"
            blurDataURL="/node.png"
          />,
          <Image
            key={3}
            src="/react.png"
            width={46}
            height={46}
            quality={50}
            placeholder="blur"
            blurDataURL="/react.png"
          />,
          <Image
            key={4}
            src="/node.png"
            width={105}
            height={70}
            quality={50}
            placeholder="blur"
            blurDataURL="/node.png"
          />,
        ]}
      />
      <PortoCard
        isOdd={false}
        url="https://www.pld-ui.com/"
        imageSrc="/pld-fkui.png"
        title="Seminar PLD UI 2022/2023"
        description="Registration and Payment System for PLD UI Seminars"
        stacks={[
          <Image
            key={1}
            src="/react.png"
            width={46}
            height={46}
            quality={50}
            placeholder="blur"
            blurDataURL="/react.png"
          />,
          <Image
            key={2}
            src="/node.png"
            width={105}
            height={70}
            quality={50}
            placeholder="blur"
            blurDataURL="/node.png"
          />,
          <Image
            key={3}
            src="/react.png"
            width={46}
            height={46}
            quality={50}
            placeholder="blur"
            blurDataURL="/react.png"
          />,
          <Image
            key={4}
            src="/node.png"
            width={105}
            height={70}
            quality={50}
            placeholder="blur"
            blurDataURL="/node.png"
          />,
        ]}
      />
    </Box>
  );
}
