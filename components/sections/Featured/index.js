import { Box, Text } from "@chakra-ui/layout";
import PostItem from "../../atoms/PostItem";

export default function Featured({ posts }) {
  return (
    <Box px={[8, 10, 20, 24, 48]} py={[8, 10]}>
      {/* SECTION TITLE */}
      <Text
        fontWeight="extrabold"
        fontSize={["2xl", "3xl"]}
        letterSpacing="wider"
        mb={[8, 10]}
      >
        Featured Publications
      </Text>

      {posts.map((value, index) => (
        <PostItem
          key={index}
          route={`/publication/${value.slug}`}
          title={value.title}
          subtitle={value.html}
        />
      ))}
    </Box>
  );
}
