function make(colors)
{
  const style_link = {
      color: colors.link,
      userSelect: 'none',
      cursor: 'pointer',
      '& svg path': {
        fill: colors.link
      },
      '&:hover': {
        color: colors.link_hover,
        '& svg path': {
          fill: colors.link_hover
        }
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
          '& #section': {
            display: 'none',
          },
        },
        '&.section': {
          '& #cover': {
            display: 'none',
          },
        }
      },
    },
    cover: {
      marginRight: 'auto',
      width: 1024,
      padding: 12,
      display: 'flex',
      flexFlow: 'row nowrap',
      '& h4': {
        color: colors.sentence,
      },
      '& a': {
        'text-decoration': 'underline',
        ...style_link
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
      color: colors.make([320, 100, 75])
    },

    section: {
      marginRight: 'auto',
      width: '100%',
      maxWidth: 1024,
      display: 'flex',
      flexFlow: [['column', 'nowrap']],
      alignItems: 'flex-start',
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
    sectionNav: {
      padding: [[3, 6]],
      cursor: 'pointer',
      userSelect: 'none',
      fontWeight: 'bold',
    },
    proseTitle: {
      marginLeft: 'auto',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: colors.sentence,
    },

    prose: {
      marginLeft: 600,
      width: 512,
      padding: [[12, 12, 62, 12]],
      '& a': {
        ...style_link,
        display: 'inline-block'
      },
      '& p': {
        lineHeight: '2em',
        marginBottom: '2em',
        textAlign: 'left',
      },
    },

    name: {
      transition: 'color 0.2s ease',

      fontFamily: 'Nale',
    },
    sentence: {
      transition: 'color 0.2s ease',
    },

    movement: {
      width: 512,
      height: 50,

      position: 'fixed',
      bottom: 0,
      left: 500,

      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'stretch',

      color: 'black',

      cursor: 'pointer',
      userSelect: 'none',
    },
    moveBack: {
      transition: 'background-color 0.3s ease',

      width: '33%',
    },
    moveOn: {
      transition: 'background-color 0.3s ease',

      width: '67%',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    figColumn: {
      transition: 'all 0.7s ease',

      width: 600,

      position: 'fixed',
      top: 76,

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },

    c_dim: { color: colors.dim },
    c_sentence: { color: colors.sentence },
    c_bright: { color: colors.bright },
  };
  return style;
}

export default make;
