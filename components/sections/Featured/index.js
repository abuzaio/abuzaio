import { Box, Text } from "@chakra-ui/layout";
import PostItem from "../../atoms/PostItem";
import publicationData from "../../../data/publication.json";

export default function Featured() {
  return (
    <Box px={[8, 10, 20, 24, 48]} py={[8, 10]}>
      {/* SECTION TITLE */}
      <Text
        fontWeight="extrabold"
        fontSize={["2xl", "3xl"]}
        letterSpacing="wider"
        mb={[8, 10]}
      >
        Featured Posts
      </Text>

      {/* POST ITEM 1 */}
      {publicationData.map((value, index) => (
        <PostItem
          key={index}
          route={`/publication/${value.title.toLowerCase().replace(" ", "-")}`}
          title={value.title}
          subtitle={value.subtitle}
        />
      ))}
    </Box>
  );
}
