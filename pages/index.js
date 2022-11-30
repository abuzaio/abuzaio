import Featured from "../components/sections/Featured";
import Hero from "../components/sections/Hero";
import { fetchContentPosts } from "../data/api/content";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <Featured posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const result = await fetchContentPosts();
  const posts = result.posts;

  return { props: { posts } }
}
