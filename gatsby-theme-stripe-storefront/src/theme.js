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
            color: 'primary',
            fontWeight: 'bold',
            margin: '0 auto',
            maxWidth: 'max',
            padding: 10,
            width: 'default',
            justifyContent: 'space-between'
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
        p: {
            color: 'gray.2',
            textAlign: 'center',
            fontSize: '2rem',
            margin: '0'
        },
    },
    span: {
        cartCount: {
            position: 'absolute',
            right: 0,
            top: '8px',
            border: '1px solid yellow',
            borderRadius: '50%',
            width: '18px',
            backgroundColor: '#ffdf37',
            color: 'rebeccapurple',
            fontSize: '15px'
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
        },
        purchaseItem: {
            padding: 2,
            margin: '20px 10px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all .2s ease',
            '&:focus-within, &:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'primary',
                color: '#ffdf37'
            },
        }
    },
    button: {
        cart: {
            backgroundColor: 'primary',
            color: 'gray.0',
            height: '40px',
            borderRadius: '10px',
            fontSize: '24px',
            margin: '0 10px',
            transition: 'all .5s ease',
            outline: 'none',
            '&:hover': {
                color: '#ffdf37',
                border: '1px solid #ffdf37'
            }
        },
        cartIcon: {
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
            position: 'relative',
            backgroundColor: 'transparent',
            border: '1px solid white',
            height: '60px',
            width: '60px',
            cursor: 'pointer',
            transition: 'all .2s ease',
            fontWeight: '800',
            outline: 'none',
            '&:focus-within, &:hover': {
                border: '1px solid #ffdf37',
                transform: 'scale(1.1)'
            },
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
            textAlign: 'center',
            margin: '0 auto',
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
        },
        skuList: {
            display: 'flex',
            color: 'primary',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
            maxWidth: 'max',
            width: 'default',
        }
    },
    img: {
        checkout: {
            width: '100%'
        },
        skuList: {
            width: '200px',
            height: '200px',
            '&:focus-within, &:hover': {
                border: '1px solid #ffdf37',
            },
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