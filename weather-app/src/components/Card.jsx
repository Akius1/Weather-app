import { Flex, Heading, Image, Text, Tag } from "@chakra-ui/react";
import React from "react";
// import { Temp } from "../types/TempEnums";
import { constructUrl } from "../utils/constructUrl";

const iconUrl = "http://openweathermap.org/img/wn/:icon@4x.png";

export const WeatherCard = ({ data, handleSelect, active }) => {
  const Temp = {
    Fahrenheit: "imperial",
    Celsius: "metric",
  };
  const calculateAverageTemp = () => {
    const sum = data.data.reduce((acc, curr) => acc + curr.main.temp, 0);
    return Math.round(sum / data.data.length);
  };
  return (
    <Flex
      borderWidth="1px"
      borderColor="gray.400"
      height="30vh"
      w={["90%", "80%"]}
      borderRadius="md"
      p="2"
      my="5"
      shadow={active ? "lg" : "sm"}
      onClick={handleSelect}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      _hover={{
        shadow: "lg",
      }}
      data-testid="weather-card"
    >
      <Heading fontSize="sm" color="white">
        {data.title}
      </Heading>
      <Tag
        variant="subtle"
        colorScheme="blackAlpha"
        borderRadius="full"
        size="sm"
        py="0"
        mt="1"
        fontSize="sm"
        textTransform="capitalize"
        color="white"
      >
        {data.data[0].weather[0].description}
      </Tag>
      <Image
        src={constructUrl(iconUrl, { icon: data.data[0].weather[0].icon })}
        boxSize="100px"
      />
      <Flex>
        <Text color="white">
          {calculateAverageTemp()}
          <sup>o</sup>
          {localStorage.getItem("temperature_unit") &&
          localStorage.getItem("temperature_unit") === Temp.Celsius
            ? "C"
            : "F"}
        </Text>
      </Flex>
    </Flex>
  );
};
