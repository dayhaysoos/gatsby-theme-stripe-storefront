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
        primary: 'rebeccapurple',
        secondary: '#ffdf37'
    },
    sizes: {
        default: '100%',
        max: '100%'
    },
    styles: {
        Layout: {
            color: 'gray.2',
            fontFamily: 'body',
            fontSize: 1,
            lineHeight: 'body',
        },
        Header: {
            color: 'gray.0',
            backgroundColor: 'primary',
            fontWeight: 'bold',
            margin: '0 auto',
            maxWidth: 'max',
            padding: 10,
            width: 'default',
            justifyContent: 'space-between'
        },
        Main: {
            display: 'flex',
            flexDirection: 'column',
            color: 'primary',
            justifyContent: 'center',
            margin: '0 auto',
            maxWidth: 'max',
            width: 'default',
            backgroundColor: 'background',
            textAlign: 'center'
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 0,
            top: '3px',
            border: '1px solid',
            borderColor: 'secondary',
            borderRadius: '50%',
            height: '24px',
            width: '24px',
            backgroundColor: 'secondary',
            color: 'primary',
            fontSize: '.75rem'
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
                justifyContent: 'space-between',
                listStyle: 'none',
                transition: 'all .2s ease',
                boxShadow: '2px 10px 10px gray',
                color: 'primary',
                margin: '20px',
                maxWidth: 360,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '300px'
            }
        },
        purchaseItem: {
            padding: 2,
            margin: '20px 10px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all .2s ease',
            boxShadow: '2px 10px 10px gray',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 360,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: '20%',
            '&:focus-within, &:hover': {
                color: 'primary'
            },
        }
    },
    button: {
        disabled: {
            backgroundColor: 'gray.1',
            color: 'primary',
            height: '40px',
            borderRadius: '10px',
            fontSize: '16px',
            margin: '0 10px',
            transition: 'all .5s ease',
            outline: 'none',
            minWidth: '70px',
        },
        cart: {
            backgroundColor: 'primary',
            color: 'gray.0',
            height: '40px',
            borderRadius: '10px',
            fontSize: '16px',
            margin: '0 10px',
            transition: 'all .5s ease',
            outline: 'none',
            minWidth: '70px',
            '&:hover': {
                color: 'secondary',
                border: '1px solid',
                borderColor: 'secondary'
            }
        },
        cartIcon: {
            display: 'flex',
            color: 'gray.0',
            border: 'none',
            justifyContent: 'center',
            padding: 0,
            position: 'relative',
            backgroundColor: 'transparent',
            height: '60px',
            width: '60px',
            cursor: 'pointer',
            transition: 'all .2s ease',
            fontWeight: '800',
            outline: 'none',
            fontSize: '1.1rem',
            '&:hover': {
                transform: 'scale(1.1)'
            },
        },
        checkout: {
            backgroundColor: 'primary',
            color: 'gray.0',
            fontSize: '18px',
            transition: 'all .5s ease',
            outline: 'none',
            borderRadius: '10px',
            '&:hover': {
                color: 'secondary',
                border: '1px solid',
                borderColor: 'secondary'
            },
            addRemove: {
                backgroundColor: 'primary',
                color: 'gray.0',
                fontSize: '18px',
                transition: 'all .5s ease',
                outline: 'none',
                '&:hover': {
                    color: 'secondary',
                    border: '1px solid',
                    borderColor: 'secondary'
                },
                '&:active': {
                    backgroundColor: 'gray.2'
                }
            },
            closeWindow: {
                backgroundColor: 'none',
                color: 'primary',
                fontSize: '18px',
                outline: 'none',
                border: 'none',
                '&:hover': {
                    transform: 'scale(1.1)',
                },
                '&:active': {
                    backgroundColor: 'secondary'
                }
            }
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
        },
        buttonWrapper: {
            display: 'flex'
        },
        checkout: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    main: {
        checkout: {
            textAlign: 'center',
            color: 'primary',
            width: '100%',
        }
    },
    ul: {
        checkout: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            padding: 0,
        },
        skuList: {
            display: 'flex',
            color: 'primary',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
        }
    },
    img: {
        checkout: {
            maxHeight: '200px',
            maxWidth: '200px',
            height: '50%',
            width: '50%'
        },
        skuList: {
            width: '200px',
            height: '200px',
            transition: 'all .5s ease',
            '&:focus-within, &:hover': {
                transform: 'scale(1.1)',
            },
        }
    },
    field: {
        checkout: {},
        error: {
            color: 'red'
        }
    },
    div: {
        confirm: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        },
        checkout: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '5px'
        },
        closeWindow: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '20px',
        }
    }
}

export default theme;