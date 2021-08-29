import { Box, Text } from "@chakra-ui/layout";
import PostItem from "../../atoms/PostItem";

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
      <PostItem
        route="/blog"
        title="Not All Failures are Equal: Lessons from Basketball"
        subtitle="Life is only a matter of taking shots. Even though you might miss, 
          just make sure you always take open shots."
      />

      {/* POST ITEM 2 */}
      <PostItem
        route="/blog"
        title="Philosophical Value from Higurashi no Naku Koro ni"
        subtitle="Higurashi epitomizes how you should never judge something by its cover. 
        At first glance, it looks like a simple."
      />

      {/* POST ITEM 3 */}
      <PostItem
        route="/blog"
        title="Are Our Advices as Good as We Would Like to Think?"
        subtitle="Sometimes I give advice to people, but were these really good advices? 
          Or is it just my brain tricking me figured out?"
      />

      {/* POST ITEM 4 */}
      <PostItem
        route="/blog"
        title="Last Time This Young"
        subtitle="Despite not being at the end of my life, I may very well be nearing 
          the end of my time with my parents."
      />
    </Box>
  );
}
