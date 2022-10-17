import type { NextPage } from "next";
import Head from "next/head";
import { Image, Box, Flex, Text, useBreakpointValue, SimpleGrid, ListItem, List, UnorderedList } from "@chakra-ui/react";
import { ContinentsSlide } from "../components/ContinentsSlide";

const Home: NextPage = () => {

    const isWideVersion = useBreakpointValue({
        
        base: false,
        md: true,
        // lg: true
    })

    console.log(isWideVersion)

    return (
        <Flex
            // alignItems="center"
            flexDir="column"
        >
            <Head>
                <title>Home | worldtrip</title>
            </Head>
            {isWideVersion ? (
                <Image
                    src="/banner.svg"
                    alt="céu azul estrelado com um grande avião amarelo e branco"
                    w="100%"
                    maxH={310}
                />
            ) : (
                <>
                    <Image
                        src="/banner-Mobile.svg"
                        alt="céu azul estrelado com um grande avião amarelo e branco"
                        w="100%"
                        // h="3"
                    />

                    <UnorderedList px={8} mt={4} >
                        <SimpleGrid columns={2} row={2} gap={8} fontSize="lg">
                            <ListItem ringOffsetColor="yellow.700">Vida noturna</ListItem>
                            <ListItem>Moderno</ListItem>
                            <ListItem>Praia</ListItem>
                            <ListItem>Clássico</ListItem>
                        </SimpleGrid>

                    </UnorderedList>
                </>
            )}

            <Box as="main" maxW={1120} mx="auto">
                {isWideVersion && (
                    <Image
                        src="/travel-types.svg"
                        alt=""
                        h="90px"
                        display="block"
                        marginInline="auto"
                        _before={{
                            content: '""',
                            display: "block",
                            backgroundColor: "gray.700",
                            width: "80px",
                            height: "2px",
                            marginInline: "auto",
                        }}
                    />
                )}

                <Box
                    // py="2"
                    mt={12}
                    mb={8}
                    textAlign="center"
                    fontWeight={500}
                    _before={{
                        content: '""',
                        display: "block",
                        backgroundColor: "gray.700",
                        width: "80px",
                        height: "1px",
                        marginInline: "auto",
                    }}
                >
                    <Text fontSize={["xl", "2xl", "3xl"]} mt={8}>
                        Vamos nessa? <br></br>Então escolha seu continente
                    </Text>
                </Box>

                <Box marginInline="auto" mb={20}>
                    <ContinentsSlide />
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;
