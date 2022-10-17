import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, ListItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { continents } from "../../continents";


interface IContinent{
    name: string;
    uid: string;
    imgUrl: string;
    description: string;
}


interface IContinentProps {
    continentSelectedData: IContinent | null;
}

export default function Continent({ continentSelectedData }: IContinentProps) {
    // console.log(props);
    return (
        <>
            <Head>
                <title>
                    {`${continentSelectedData?.name} | worldtrip` ?? "asdasd"}
                </title>
            </Head>

            <Box as="aside" maxW={1220} mx="auto">
                <Box position="relative">
                    <Image
                        src={continentSelectedData?.imgUrl}
                        alt=""
                        w="100%"
                        // maxW="1140px"
                        objectFit="cover"
                        maxH="500"

                        // filter="brightness(45%)"
                    />

                    <Heading
                        as="h2"
                        fontSize={["2xl", "3xl", "4xl"]}
                        color="white"
                        position="absolute"
                        bottom="4"
                        left="8"
                        bg="rgba(0,0,0, .7)"
                        px="4"
                        borderRadius="4"
                    >
                        {continentSelectedData?.name}
                    </Heading>
                </Box>
            </Box>

            <Box as="main" maxW={1120} mx="auto" mt="12" pb={24} px={4}>
                <SimpleGrid
                    column={2}
                    minChildWidth="320px"
                    spacingX="80px"
                    // p="14"
                >
                    <Text
                        textAlign="justify"
                        fontSize={["md"]}
                        lineHeight={"8"}
                    >
                        A Europa é, por convenção, um dos seis continentes do
                        mundo. Compreendendo a península ocidental da Eurásia, a
                        Europa geralmente divide-se da Ásia a leste pela
                        divisória de águas dos montes Urais, o rio Ural, o mar
                        Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>

                    <Flex
                        align="center"
                        justifyContent={["space-around", "space-evenly"]}
                        mt={[8, 8, 0]}
                    >
                        <Flex
                            flexDir="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text
                                as="strong"
                                fontSize="4xl"
                                color="yellow.700"
                                fontWeight="bold"
                                lineHeight="1"
                            >
                                50
                            </Text>
                            <Text as="span" fontWeight="bold" fontSize="large">
                                Paises
                            </Text>
                        </Flex>

                        <Flex
                            flexDir="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text
                                as="strong"
                                fontSize="4xl"
                                color="yellow.700"
                                fontWeight="bold"
                                lineHeight="1"
                            >
                                60
                            </Text>
                            <Text as="span" fontWeight="bold" fontSize="large">
                                Línguas
                            </Text>
                        </Flex>

                        <Flex
                            flexDir="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text
                                as="strong"
                                fontSize="4xl"
                                color="yellow.700"
                                fontWeight="bold"
                                lineHeight="1"
                            >
                                27
                            </Text>

                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                flexDir="column"
                            >
                                <Text
                                    as="span"
                                    fontWeight="bold"
                                    fontSize="large"
                                    // lineHeight="1"
                                    // mb="4"
                                >
                                    Cidades
                                </Text>

                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            p="0"
                                            h="0"
                                            w="0"
                                            title="Cidades"
                                            // mt="4"
                                            // justifySelf="flex-end"
                                            // alignSelf="baseline"
                                        >
                                            <InfoOutlineIcon mt="6" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent maxW="220">
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader fontWeight="medium">
                                            Cidades
                                        </PopoverHeader>

                                        <PopoverBody>
                                            <UnorderedList>
                                                <ListItem>Cuiaba</ListItem>
                                                <ListItem>Campo</ListItem>
                                                <ListItem>Santos</ListItem>
                                            </UnorderedList>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Flex>
                        </Flex>
                    </Flex>
                </SimpleGrid>

                <Box mt="14">
                    <Heading
                        as="h2"
                        fontSize={["2xl", "2xl", "3xl"]}
                        fontWeight="medium"
                        textAlign={["center", "center", "left"]}
                    >
                        Cidades +100
                    </Heading>

                    <Flex
                        mt="8"
                        mb="12"
                        gap="8"
                        flexWrap="wrap"
                        justifyContent={["center", "center", "flex-start"]}
                    >
                        <Box
                            as={motion.div}
                            w={256}
                            h={279}
                            // bg="gray.100"
                            mb="4"
                            borderRadius="6"
                            overflow="hidden"
                            border="1px"
                            borderColor="yellow.200"
                            // _hover={{
                            //     transform: "scale(1.1)",
                            // }}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.08 }}
                            transition="0.2s linear"
                        >
                            <Image
                                src="https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"
                                h="173px"
                            />

                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                                px="4"
                                py="8"
                            >
                                <Flex flexDir="column">
                                    <Text as="strong" fontSize="lg">
                                        Londres
                                    </Text>
                                    <Text as="span" color="gray.500">
                                        Reino Unido
                                    </Text>
                                </Flex>

                                <Image
                                    borderRadius="md"
                                    boxSize="35px"
                                    objectFit="cover"
                                    src="https://w7.pngwing.com/pngs/303/440/png-transparent-flag-of-the-united-kingdom-flag-of-england-flag-of-the-united-states-flags-of-the-world-flag-miscellaneous-flag-logo.png"
                                />
                            </Flex>
                        </Box>

                        <Box
                            as={motion.div}
                            w="256px"
                            h={279}
                            // bg="gray.100"
                            borderRadius="6"
                            overflow="hidden"
                            border="1px"
                            borderColor="yellow.200"
                            // _hover={{
                            //     transform: "scale(1.1)",
                            // }}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 1.08 }}
                            transition="0.2s linear"
                        >
                            <Image
                                src="https://inglaterrabrasil.com.br/files/2013/11/conhe%C3%A7a-londres.jpg"
                                h="173px"
                            />

                            <Flex
                                alignItems="center"
                                justifyContent="space-between"
                                px="4"
                                py="8"
                            >
                                <Flex flexDir="column">
                                    <Text as="strong" fontSize="lg">
                                        Londres
                                    </Text>
                                    <Text as="span" color="gray.500">
                                        Reino Unido
                                    </Text>
                                </Flex>

                                <Image
                                    borderRadius="md"
                                    boxSize="35px"
                                    objectFit="cover"
                                    src="https://w7.pngwing.com/pngs/303/440/png-transparent-flag-of-the-united-kingdom-flag-of-england-flag-of-the-united-states-flags-of-the-world-flag-miscellaneous-flag-logo.png"
                                />
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}


export const getStaticPaths: GetStaticPaths = () => {

    return {
        paths: [],
        fallback: 'blocking',
    }
}
export const getStaticProps: GetStaticProps = async ({params}) => {

    // const {slug} = params;

    // console.log(params);

    continents

    const continentSelectedData = continents.find(continent => continent.uid === params?.slug) ?? null

    console.log(continentSelectedData);

    return {
        props: {
            continentSelectedData,
        },
    };

}