import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function PostItem({ route, title, subtitle }) {
  return (
    <Link href={route}>
      <Box
        cursor="pointer"
        userSelect="none"
        _hover={{
          opacity: 0.7,
        }}
        mb={9}
      >
        <Text
          fontWeight="bold"
          letterSpacing="wide"
          fontSize={["lg", "xl"]}
          mb={[2, 4]}
        >
          {title}
        </Text>
        <Text 
          noOfLines={2} 
          fontSize={["sm", "md"]} 
          lineHeight={1.7} 
          dangerouslySetInnerHTML={{__html: subtitle}} 
        />
      </Box>
    </Link>
  );
}
