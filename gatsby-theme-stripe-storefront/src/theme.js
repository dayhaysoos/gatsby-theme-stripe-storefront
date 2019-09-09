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
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: 'max',
            width: 'default',
            backgroundColor: 'gray.1'
        },
        Container: {
            padding: 3,
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
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
            maxWidth: 'max',
            width: 'default',
        },
        li: {
            padding: 2,
            margin: '20px 10px',
            display: 'flex',
            flexDirection: 'column',
            '&:focus-within, &:hover': {
                backgroundColor: 'primary',
                color: 'gray.0'
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
        },
    },
    main: {
        storefront: {
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: 'max',
            width: 'default',
            backgroundColor: 'gray.1'
        },
        checkout: {
            
        }
    },
    span: {
        cartCount: {
            position: 'relative',
            bottom: '45px',
            color: 'white',
            fontSize: '14px',
            textAlign: 'center',
            fontVariantNumeric: 'tabular-nums'
        }
    },
    li: {
        navItem: {
            height: '40px',
            width: '40px',
            listStyle: 'none',
            textAlign: 'center',
        },
        checkout: {
            listStyle: 'none',
            justifyContent: 'space-around',
            textAlign: 'left',
            details: {
                display: 'flex',
                justifyContent: 'space-between',
                margin: '50px 0'
            }
        }
    },
    button: {
        cart: {
            backgroundColor: 'primary',
            color: 'gray.0',
            height: '40px',
            borderRadius: '10px',
            fontSize: '24px',
            margin: '0 10px'
        }
    },
    link: {
        image: {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    section: {
        itemDetails: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    main: {
        checkout: {
            width: '100%',
            flexDirection: 'column',
        }
    },
    ul: {
        checkout: {
            details: {
                flexDirection: 'column'
            }
        }
    },
    img: {
        checkout: {
            width: '100%'
        }
    },
    table: {
        checkout: {
            textAlign: 'center',
            width: '100%',
        }
    },
    div: {
        confirm: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        }
    }
}

export default theme;