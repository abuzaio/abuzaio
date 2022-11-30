import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Fade, Flex, Text } from "@chakra-ui/react";
import TimelineItem from "../../atoms/TimelineItem";
import timelineData from "../../../data/dummy/timeline.json";
import { useState } from "react";

export default function Timeline() {
  const [showAll, setShowAll] = useState(false);

  return (
    <Box px={[8, 10, 16, 48, 72]} py={[6, 8]}>
      {/* SECTION TITLE */}
      <Text
        fontWeight="extrabold"
        fontSize={["2xl", "3xl"]}
        letterSpacing="wider"
        mb={[8, 10]}
      >
        Timeline
      </Text>

      {timelineData
        .slice(0, showAll ? timelineData.length : 2)
        .map((value, index) => (
          <Fade key={index} in={true}>
            <Text
              fontWeight="extrabold"
              letterSpacing="wide"
              fontSize={["lg", "xl"]}
              mb={[6, 8]}
            >
              {value.year}
            </Text>
            {value.achievements.map((item, count) => (
              <TimelineItem
                key={count}
                title={item.title}
                description={item.description}
              />
            ))}
          </Fade>
        ))}
      <Box
        mt={10}
        cursor="pointer"
        _hover={{ opacity: 0.7 }}
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        <Flex direction="row" justifyContent="center">
          <Text fontWeight="semibold" textAlign="center" mr={1}>
            {showAll ? "Show Less" : "See More"}
          </Text>
          {showAll ? (
            <ChevronUpIcon width={6} height={6} />
          ) : (
            <ChevronDownIcon width={6} height={6} />
          )}
        </Flex>
      </Box>
    </Box>
  );
}
