import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import TimelineItem from "../../atoms/TimelineItem";

export default function Timeline() {
  return (
    <Box px={[8, 10, 20, 24, 48]} py={[6, 8]}>
      {/* SECTION TITLE */}
      <Text
        fontWeight="extrabold"
        fontSize={["2xl", "3xl"]}
        letterSpacing="wider"
        mb={[8, 10]}
      >
        Timeline
      </Text>

      <Box>
        <Text
          fontWeight="extrabold"
          letterSpacing="wide"
          fontSize={["lg", "xl"]}
          mb={[6, 8]}
        >
          2021
        </Text>
        <TimelineItem
          title="Doing Some Research Project"
          description="Collect and analyze NASA exo-planets data in outer sollar system."
        />
        <TimelineItem
          title="Joined Dorsian Software Studio (PT. Skala Nusantara Digital)"
          description="Collaboration as freelance-client partner to build small-medium mobile and web project."
        />
        <TimelineItem
          title="Did A Lot of Freelance Projects"
          description="Did multiple freelance projects with multiple organizations and clients."
        />
        <TimelineItem
          title="Got Internship at Brilyan Trimatra Utama"
          description="A tech company from Bekasi doing big project at PON 2020 Papua."
        />
      </Box>
      <Box>
        <Text
          fontWeight="extrabold"
          letterSpacing="wide"
          fontSize={["lg", "xl"]}
          mb={[6, 8]}
        >
          2020
        </Text>
        <TimelineItem
          title="Won 1st Place in App Development Challenge"
          description="Marathon challenge to build hospital problem solution in 7 days using Flutter."
        />
        <TimelineItem
          title="Biggest Project Yet"
          description="Building from scratch food order payment gateway system."
        />
        <TimelineItem
          title="Graduated from Vocational High School"
          description="Saying goodbye to free time and hometown buddies."
        />
      </Box>
      <Box>
        <Text
          fontWeight="extrabold"
          letterSpacing="wide"
          fontSize={["lg", "xl"]}
          mb={[6, 8]}
        >
          2019
        </Text>
        <TimelineItem
          title="Got My First Paid Fullstack Project"
          description="Building online shop website for my friend's bussiness."
        />
        <TimelineItem
          title="Got Internship at Diginova Kreasi Indonesia"
          description="Think for Solve problem with software products 
            for my vocational school."
        />
      </Box>
      <Box>
        <Text
          fontWeight="extrabold"
          letterSpacing="wide"
          fontSize={["lg", "xl"]}
          mb={[6, 8]}
        >
          2017
        </Text>
        <TimelineItem
          title="One of My First Real Codes"
          description="Got into basic programming in highschool. 
            Used C++ to solve problems."
        />
      </Box>
      <Box>
        <Text
          fontWeight="extrabold"
          letterSpacing="wide"
          fontSize={["lg", "xl"]}
          mb={[6, 8]}
        >
          2002
        </Text>
        <TimelineItem title="Signed in The Game" />
      </Box>
      <Box mt={10} cursor="pointer" _hover={{ opacity: 0.7 }}>
        <Flex direction="row" justifyContent="center">
          <Text fontWeight="semibold" textAlign="center" mr={1}>
            See More
          </Text>
          <ChevronDownIcon width={6} height={6} />
        </Flex>
      </Box>
    </Box>
  );
}
