import { Box, Flex, IconButton, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";
import NextLink from "next/link";
import { useRouter } from "next/router";

export function Header(){

    const router = useRouter()

    console.log(router)

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        // lg: true
    });

    return (
        <Box as="header" w="100%" bg="gray.100">
            <Flex
                // justify="center"
                alignItems="center"
                py={["8px", "8px", "12px"]}
                px={8}
            >
                {/* <Image src="/logo.svg" alt="" /> */}
                {router.asPath !== "/" && (
                    <NextLink href="/" passHref>
                        <Link href="/">{<ChevronLeftIcon w={8} h={8} />}</Link>
                    </NextLink>
                )}

                <Box mx="auto">
                    <Logo
                        width={isWideVersion ? "185" : "110"}
                        height={isWideVersion ? "46" : "30"}
                    />
                </Box>
            </Flex>
        </Box>
    );
}