import PublicationSection from "../../components/sections/Publication";
import { fetchContentPosts } from "../../data/api/content";

export default function Publication({ posts }) {
  return <PublicationSection posts={posts} />;
}

export async function getStaticProps() {
  const result = await fetchContentPosts();
  const posts = result.posts;

  console.log(posts.length)

  return { props: { posts } }
}