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
  console.log(hitos);
  return (
    <Container maxW="container.xl" minW="650px" p={2}>
      <Box
        border="2px solid"
        borderColor="gray.200"
        borderRadius="md"
        p={4}
        display="flex"
        justifyContent="center"
        maxW={800}
        flexDirection="column"
        alignItems="center"
      >
        <Image src="/logo.jpeg" alt="logo" width={800} />
        <StepsRoot
          orientation="vertical"
          height="80vh"
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
              <Text
                fontSize="small"
                fontWeight="bold"
                color="gray.500"
                textAlign="right"
              >
                {hito.date}
              </Text>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="blue.500"
                textAlign="center"
              >
                {hito.title}
              </Text>
              <Text>{hito.content}</Text>
            </StepsContent>
          ))}
        </StepsRoot>
      </Box>
    </Container>
  );
}
