import BlogSection from "../../components/sections/Blog";
import { fetchContentPosts } from "../../data/api/content";

export default function Blog({ posts }) {
  return <BlogSection posts={posts} />;
}

export async function getServerSideProps() {
  const result = await fetchContentPosts();
  const posts = result.posts;

  console.log(posts.length)

  return { props: { posts } }
}