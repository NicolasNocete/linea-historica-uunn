"use client";

import { Box, Image, Text, Container, Flex } from "@chakra-ui/react";
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
      height="100%"
      width={"calc(100vw - 1rem)"}
      overflow={"hidden"}
    >
      <Flex
        height={"100%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box my={{ base: 2, md: 0 }}>
          <Image src="/logo.jpeg" alt="logo" width="90vw" maxW="500px" />
        </Box>
        <StepsRoot
          orientation="vertical"
          height="100%"
          defaultValue={1}
          count={hitos.length}
        >
          <StepsList>
            {hitos.map((hito) => (
              <StepsItem key={hito.id} index={hito.id} icon={<LuCalendar />} />
            ))}
          </StepsList>
          {hitos.map((hito) => (
            <StepsContent
              key={hito.id}
              index={hito.id}
              width="100%"
              display="flex"
              flexDirection="column"
              height="100%"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flex={1}
                p={4}
                //agregar scroll
                overflowY="auto"
              >
                <Text fontWeight="bold" color="gray.500" textAlign="right">
                  {hito.date}
                </Text>
                <Text
                  fontSize={{ base: "xl", md: "3xl" }}
                  fontWeight="bold"
                  color="blue.500"
                  textAlign="center"
                  mb={4}
                >
                  {hito.title}
                </Text>
                {hito.content.map((content, index) => (
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="gray.600"
                    textAlign="justify"
                    mb={4}
                    px={4}
                    wordBreak={"break-word"}
                    key={index}
                  >
                    {content}
                  </Text>
                ))}

                {hito.link && hito.type === "video" && (
                  <Flex
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    mb={4}
                    bg={"red.400"}
                  >
                    {/* 
controls=0: Oculta los controles del reproductor.
disablekb=1: Deshabilita los controles del teclado.
modestbranding=1: Minimiza el branding de YouTube.
rel=0: No muestra videos relacionados al final.
showinfo=0: Oculta la información del video. */}
                    <iframe
                      id="video"
                      width="100%"
                      height="100%"
                      src={`${hito.link}?controls=1&disablekb=1&modestbranding=1&rel=0&showinfo=0`}
                      title="Anexo"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </Flex>
                )}

                {hito.link && hito.type === "image" && (
                  <Flex
                    flex={1}
                    justifyContent="center"
                    alignItems="bottom"
                    mb={4}
                    maxH={"50vh"}
                    height={"100%"}
                  >
                    <Image src={hito.link} alt={hito.title} />
                  </Flex>
                )}
              </Box>
            </StepsContent>
          ))}
        </StepsRoot>
      </Flex>
    </Box>
  );
}
