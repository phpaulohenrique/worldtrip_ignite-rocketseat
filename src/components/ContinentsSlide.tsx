// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Image, Text } from "@chakra-ui/react";
import { continents } from "../continents";
import Router from "next/router";




export const ContinentsSlide = () => {


    const handleContinentDetailsPage = (slug: string) => {

        Router.push(`/continente/${slug}`)
    }


    // console.log(continents);
    return (

        <Box w="100%">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
            >
                {continents.map((continent) => (
                    <SwiperSlide key={continent.uid}>
                        <Image
                            src={continent.imgUrl}
                            alt=""
                            // maxW="100%"
                            // overflow="hidden"
                            // maxW="1140px"
                            w="100%"
                            // maxW="100vw"
                            objectFit="cover"
                            h="450"
                            position="relative"
                            filter="brightness(50%)"

                            // _before={{
                            //     content: '"ddddddddddddddd"',
                            //     display: "block",
                            //     backgroundColor: "gray.700",
                            //     width: "80px",
                            //     height: "2px",
                            //     marginInline: "auto",
                            //     zIndex: "100",
                            //     position: "absolute",
                            //     left: "100px",
                            // }}
                        />

                        <Box
                            as={motion.div}
                            color="white"
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="auto"
                            translateX="-50% "
                            translateY="-50%"
                            textAlign="center"
                            cursor="pointer"
                            onClick={() =>
                                handleContinentDetailsPage(continent.uid)
                            }
                            transition = "0.2s linear"

                            _hover={{
                                color: "#FFBA08"
                            }}
                        >
                            <Text
                                as="h2"
                                fontSize={["3xl", "3xl", "4xl"]}
                                fontWeight="bold"
                                className="a"
                            >
                                {continent.name}
                            </Text>

                            <Text as="span" fontSize={["lg", "lg", "2xl"]} fontWeight="bold" mt="4" display="inline-block">
                                {continent.description}
                            </Text>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Box>
    );
};
