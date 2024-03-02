import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cardd = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="xl" overflow="hidden">
      <Image src={imageSrc} alt={title} />
      <VStack align="start" spacing={2} p="4">
        <Heading as="h2" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray">{description}</Text>
        <HStack spacing={2}>
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cardd;
