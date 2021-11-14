import React, { useEffect, useState } from "react";
import { IconButton, Icon, Flex, useMediaQuery } from "@chakra-ui/react";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { WeatherCard } from "./Card";
import dayjs from "dayjs";
import { Barchart } from "./Barchart";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
];



export const WeatherCardContainer = ({ data }) => {
  const [weatherSegmentData, setWeatherSegmentData] =
    useState();
  const [selectedCard, setSelectedCard] = useState();
  const [isMobile] = useMediaQuery("(max-width: 665px)");

  const handleSelectWeatherCard = (index) => {
    setSelectedCard(index);
    const weatherSegmentData = data[index].data.map(
      (item) => ({
        time: dayjs(item.dt_txt).format("ha"),
        temp: item.main.temp,
      })
    );

    setWeatherSegmentData(weatherSegmentData);
  };

  useEffect(() => {
    if (data && selectedCard) {
      const weatherSegmentData = data[
        selectedCard
      ]?.data?.map((item) => ({
        time: dayjs(item.dt_txt).format("ha"),
        temp: item.main.temp,
      }));

      setWeatherSegmentData(weatherSegmentData);
    }
  }, [data]);

  const renderArrow = (props) => {
    return props.type === "PREV" ? (
      <IconButton
        onClick={() => {
          props.onClick();
          isMobile && setWeatherSegmentData(undefined);
        }}
        aria-label="arrow"
        icon={<Icon as={IoChevronBackSharp} />}
        disabled={props.isEdge}
        borderRadius="full"
        size="sm"
        alignSelf="center"
      />
    ) : (
      <IconButton
        onClick={() => {
          props.onClick();
          isMobile && setWeatherSegmentData(undefined);
        }}
        aria-label="arrow"
        icon={<Icon as={IoChevronForwardSharp} />}
        disabled={props.isEdge}
        borderRadius="full"
        size="sm"
        alignSelf="center"
      />
    );
  };
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
    >
      <Carousel
        renderArrow={renderArrow}
        pagination={false}
        showEmptySlots={false}
        isRTL={false}
        breakPoints={breakPoints}
      >
        {data.map((item, index) => (
          <WeatherCard
            data={item}
            key={JSON.stringify(item.data[0].main)}
            handleSelect={() => handleSelectWeatherCard(index)}
            active={selectedCard === index}
          />
        ))}
      </Carousel>

      {weatherSegmentData && (
        <Flex mt="14" justifyContent="center" h="400px" w={["100%", "500px"]}>
          <Barchart data={weatherSegmentData} />
        </Flex>
      )}
    </Flex>
  );
};
