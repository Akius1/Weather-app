import React, { useEffect, useState } from "react";
import { Box, IconButton, Icon, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WeatherCardContainer } from "./CardContainer";
import { VscRefresh } from "react-icons/vsc";
import { monthName } from "../utils/helpers";
import groupBy from "lodash.groupby";

const variants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const MotionBox = motion(Box);

export const Bottom = ({ reload, data }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (data) {
      const result = groupBy(data, monthName);

      const days = [];
      for (const property in result) {
        let section = { title: property, data: result[property] };
        days.push(section);
      }

      setSections(days);
    }
  }, [data]);

  return (
    <MotionBox
      variants={variants}
      initial="hidden"
      animate="visible"
      height="80vh"
      bg="white"
      borderTopRadius="3xl"
      padding="4"
      pt="7"
      pos="relative"
      overflowY="scroll"
      // background="#75b4e3"
      background="linear-gradient(120deg,rgba(255,255,255,0.3),transparent)"
      backdropFilter="blur(30px)"
    >
      <IconButton
        onClick={reload}
        position="absolute"
        top="0"
        left="0"
        variant="ghost"
        aria-label="refresh"
        icon={<Icon as={VscRefresh} w="6" h="6" />}
        size="lg"
        borderRadius="full"
      />

      <Spacer height="10" />
      <WeatherCardContainer data={sections} />
    </MotionBox>
  );
};
