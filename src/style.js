function make(colors)
{
  const style_link = {
      color: colors.link,
      userSelect: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: colors.link_hover
      }
    };

  const style = {
    link: style_link,
    '@global': {
      body: {
        color: colors.dim,
      },
      '#container': {
        '&.cover': {
          '& #page': {
            display: 'none',
          },
        },
        '&.page': {
          '& #cover': {
            display: 'none',
          },
        }
      },
    },
    cover: {
      marginLeft: 'auto',
      width: 1024,
      padding: 12,
      display: 'flex',
      flexFlow: 'row nowrap',
      '& h4': {
        color: colors.sentence,
      },
      '& a': {
        'text-decoration': 'underline',
        color: colors.make([0, 0, 40]),
      }
    },
    front: {
      textAlign: 'right',
      width: 512,
      paddingLeft: 24,
      '& p': { fontSize: '0.9em' }
    },
    contents: {
      width: 512,
      '& a': {
        ...style_link,
        display: 'inline-block',
      },
      '& p': {
        marginLeft: 20
      },
    },
    helpTitle: {
      color: colors.make([320, 100, 40])
    },

    page: {
      marginLeft: 'auto',
      width: '100%',
      maxWidth: 1024,
      display: 'flex',
      flexFlow: [['column', 'nowrap']],
      alignItems: 'flex-end',
    },
    header: {
      height: 76,
      flex: [[0, 0, 'auto']],
    },

    logo: {
      padding: [[15, 25]],
      textAlign: 'right',
      '& a': {
        fontSize: '1.2em',
        ...style_link,
        cursor: 'pointer',
        userSelect: 'none',
      }
    },
    bookTitle: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },

    proseHeading: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '3em',
    },
    pageNav: {
      padding: [[3, 6]],
      cursor: 'pointer',
      userSelect: 'none',
      fontWeight: 'bold',
    },
    proseTitle: {
      marginRight: 'auto',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: colors.sentence,
    },

    prose: {
      marginLeft: 512,
      width: 512,
      padding: [[12, 12, 62, 12]],
      '& a': {
        ...style_link,
        display: 'inline-block'
      },
      '& p': {
        lineHeight: '2em',
        marginBottom: '2em',
        textAlign: 'right',
      },
    },

    name: {
      fontFamily: 'Nale',
      transition: 'color 0.2s ease',
    },
    sentence: {
      transition: 'color 0.2s ease',
    },

    movement: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      flex: '0 0 auto',
      height: 50,
      width: 512,
      display: 'flex',
      alignItems: 'stretch',
      color: 'black',
      cursor: 'pointer',
      userSelect: 'none',
    },
    moveBack: {
      width: '33%',
      transition: 'background-color 0.3s ease',
    },
    moveOn: {
      width: '67%',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    figureWrap: {
      display: 'flex',
      width: 512,
      height: 512,
      position: 'fixed',
      right: 512,
      top: 76,

      marginLeft: -12,
      transition: 'all 0.7s ease',
    },
    figure: {
      marginLeft: 'auto',
    },

    c_dim: { color: colors.dim },
    c_sentence: { color: colors.sentence },
    c_bright: { color: colors.bright },
  };
  return style;
}

export default make;
