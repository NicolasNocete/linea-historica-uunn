"use client";

import { Box, Image, Text, Container } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/ui/steps";

import { LuCalendar } from "react-icons/lu";

//import data
import { hitos } from "@/data/hitos";

export default function Page() {
  return (
    <Box
      border="2px solid"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Image src="/logo.jpeg" alt="logo" width="90vw" maxW="500px" />
      <StepsRoot
        orientation="vertical"
        height="95vh"
        defaultValue={1}
        count={hitos.length}
      >
        <StepsList>
          {hitos.map((hito) => (
            <StepsItem key={hito.id} index={hito.id} icon={<LuCalendar />} />
          ))}
        </StepsList>
        {hitos.map((hito) => (
          <StepsContent key={hito.id} index={hito.id}>
            <Text fontWeight="bold" color="gray.500" textAlign="right">
              {hito.date}
            </Text>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="blue.500"
              textAlign="center"
              mb={4}
            >
              {hito.title}
            </Text>
            <Text
              fontSize="lg"
              color="gray.600"
              textAlign="justify"
              mb={4}
              px={4}
              wordBreak={"break-word"}
            >
              {hito.content}
            </Text>
          </StepsContent>
        ))}
      </StepsRoot>
    </Box>
  );
}
