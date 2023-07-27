import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { fetchContentPosts, fetchPostDetail } from "../../../data/api/content";

export default function BlogDetail({ post }) {
  return (
    <Box px={[8, 10, 16, 48, 72]} py={[8, 10]}>
      <Box>
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="extrabold">
          {post.title}
        </Text>
        <Flex py="4" justify="space-between" alignItems="center">
          <Flex flexDirection="row" alignItems="center">
            <Avatar
              size="sm"
              name="Abu Aziz"
              src="https://bit.ly/dan-abramov"
              mr="3"
            />
            <Text fontSize="sm">Abu Aziz / 25 August 2022</Text>
          </Flex>
          <Text color="grey" fontSize="sm">4 Views</Text>
        </Flex>
        <Text
          mt={4}
          lineHeight="7"
          fontSize={["md"]}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Box>

      <Box my={[20, 20, 28]}></Box>
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  const result = await fetchPostDetail(params.slug);
  const post = result.posts[0];

  return { props: { post } };
}
