import { auto } from "eol";

export const theme = {
    space: [0, 4, 8, 1, 32],
    fonts: {
        body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
    },
    fontSizes: [16, 18, 20, 22, 27, 36],
    lineHeights: {
        body: 1.45,
        heading: 1.1,
    },
    colors: {
        gray: ['#efefef', '#ddd', '#333', '#111'],
        background: '#fff',
        primary: 'rebeccapurple'
    },
    sizes: {
        default: '90vw',
        max: '90%'
    },
    styles: {
        Layout: {
            color: 'gray.2',
            fontFamily: 'body',
            fontSize: 1,
            lineHeight: 'body',
        },
        Header: {
            backgroundColor: 'primary',
            color: 'background',
            fontWeight: 'bold',
            margin: '0 auto',
            maxWidth: 'max',
            padding: 3,
            width: 'default',
            justifyContent: 'center'
        },
        Main: {
            margin: '0 auto',
            maxWidth: 'max',
            width: 'default',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'gray.1'
        },
        Container: {
            padding: 3,
        },
        test: {
            primary: {
                color: 'green',
                fontSize: '100px'
            },
            secondary: {
                color: 'orange',
                fontSize: '100px'
            }
        },
        h1: {
            color: 'gray.3',
            fontSize: 5,
            fontWeight: 'bold',
            lineHeight: 'heading',
            margin: '0',
            marginTop: 200,
        },
        ul: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            maxWidth: 'max',
            width: 'default'
        },
        li: {
            padding: 2,
            margin: '0 10px',
            '&:focus-within, &:hover': {
                backgroundColor: 'gray.0'
            },
        },
        img: {
            width: '200px',
            height: '200px'
        },
        p: {
            color: 'gray.2',
            textAlign: 'center',
            fontSize: '2rem',
            margin: '0'
        }
    }
}

export default theme;