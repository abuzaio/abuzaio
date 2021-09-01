import { Box, Center, Text } from "@chakra-ui/react";
import PostItem from "../../atoms/PostItem";
import postData from "../../../data/post.json";

export default function Blog() {
  return (
    <Box px={[8, 10, 20, 24, 48]} py={[8, 10]}>
      <Center h={120}>
        <Box>
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight="extrabold"
            letterSpacing="widest"
            textAlign="center"
          >
            Blog
          </Text>
          <Text textAlign="center" mt={4}>
            Writing casually about thoughts on habits and self-reflection.
          </Text>
        </Box>
      </Center>

      <Box my={[20, 20, 28]}>
        {/* POST ITEM 1 */}
        {postData.map((value, index) => (
          <PostItem
            key={index}
            route={`/blog/${value.title.toLowerCase().replace(" ", "-")}`}
            title={value.title}
            subtitle={value.subtitle}
          />
        ))}
      </Box>
    </Box>
  );
}
