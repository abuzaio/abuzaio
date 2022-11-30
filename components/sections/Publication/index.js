import { Box, Center, Text } from "@chakra-ui/react";
import PostItem from "../../atoms/PostItem";

export default function Publication({ posts }) {
  return (
    <Box px={[8, 10, 20, 24, 48]} py={[8, 10]}>
      <Center>
        <Box>
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight="extrabold"
            letterSpacing="widest"
            textAlign="center"
          >
            Publication
          </Text>
          <Text textAlign="center" mt={4}>
            Writing casually about thoughts on habits and self-reflection.
          </Text>
        </Box>
      </Center>

      <Box my={[20, 20, 28]}>
        {posts.map((value, index) => (
          <PostItem
            key={index}
            route={`/publication/${value.slug}`}
            title={value.title}
            subtitle={value.html}
          />
        ))}
      </Box>
    </Box>
  );
}