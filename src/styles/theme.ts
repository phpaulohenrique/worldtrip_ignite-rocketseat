import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        yellow:{
            700: '#FFBA08',
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global:{
            body: {
                color: 'gray.700'
            }
        }
    }
});