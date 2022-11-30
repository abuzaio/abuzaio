import { Box, Text } from "@chakra-ui/react";
import { fetchContentPosts, fetchPostDetail } from "../../../data/api/content";

export default function PublicationDetail({ post }) {
  return (
    <Box px={[8, 10, 20, 24, 48]} py={[8, 10]}>
      <Box>
        <Text
          fontSize={["3xl", "4xl"]}
          fontWeight="extrabold"
          
        >
          {post.title}
        </Text>
        <Text mt={4} lineHeight="7" fontSize={["md"]} dangerouslySetInnerHTML={{__html: post.html }} />
      </Box>

      <Box my={[20, 20, 28]}></Box>
    </Box>
  );
}

export async function getStaticPaths() {
  const result = await fetchContentPosts()

  const paths = result.posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const result = await fetchPostDetail(params.slug);
  const post = result.posts[0];

  console.log(post.title);

  return { props: { post } }
}
