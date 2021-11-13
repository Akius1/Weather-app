import { Flex, Heading } from "@chakra-ui/react";
import React from "react";



export const Top = ({ data }) => {
  return (
    <Flex h="20vh" justifyContent="center" alignItems="center">
      <Heading color="white" size="md" fontWeight="medium">
        {data?.name}
      </Heading>
    </Flex>
  );
};
