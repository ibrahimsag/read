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
        '&>#section': {
          display: 'none',
        },
        '&>#cover': {
          display: 'none',
        },
        '&>#toc': {
          display: 'none',
        },
        '&.cover': {
          '&>#cover': {
            display: 'block',
          },
        },
        '&.section': {
          '&>#section': {
            display: 'block',
          },
        },
        '&.toc': {
          '&>#toc': {
            display: 'block',
          },
        }
      },
    },
    coverWrap: {
      margin: 'auto',
      width: 1024,
      padding: 12,
      '& a': {
        'text-decoration': 'underline',
        ...style_link
      }
    },
    cover: {
      display: 'flex',
      flexFlow: 'row nowrap',
      '& a': {
        'text-decoration': 'underline',
        ...style_link
      }
    },
    contents: {
      '& p': {
        marginLeft: 20
      },
      '& h4': {
        color: colors.sentence,
      },
    },
    contentsRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    contentsColumn: {
      flexBasis: 0,
      flexGrow: 1,
      '&.fig': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }
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
      '& a': {
        fontSize: '1.2em',
        cursor: 'pointer',
        userSelect: 'none',
        '&:hover': {
          color: colors.sentence,
        }
      }
    },
    bookTitle: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      color: colors.link,
      marginLeft: 25,
      '&:hover': {
        color: colors.link_hover,
        textDecoration: 'underline',
      }
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
      '& svg': {
        height: 20,
        marginTop: 3
      }
    },
    moveBack: {
      transition: 'background-color 0.3s ease',

      width: '33%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      '& svg': {
        marginLeft: 10,
      }
    },
    moveOn: {
      transition: 'background-color 0.3s ease',

      width: '67%',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      '& svg': {
        marginRight: 10,
      }
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

    coverHead: {
      textAlign: 'right',
      userSelect: 'none',
      '& a': {
        color: colors.make([0, 0, 30]),
        '&:hover': {
          color: colors.sentence,
        }

      }
    },
    coverFoot: {
      textAlign: 'right',
      fontSize: '0.8em',
    },
    coverQuotes: {
      marginTop: 50,
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '0.8em',
      '& div': {
        padding: 20,
        flexGrow: 1,
        flexBasis: 0,
        '& em': {
          color: colors.sentence
        }
      },
    },
    hero: {
      color: colors.make([220, 50, 60]),
      width: '90%',
      margin: 'auto',
      textAlign: 'center',
      '& a' : style_link
    },

    preview: {
      position: 'relative',
      marginTop: 50,
      paddingTop: 50,
      paddingBottom: 100,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      userSelect: 'none',
      '& a': {
        ...style_link,
        display: 'inline-block'
      },
      '& p': {
        lineHeight: '2em',
        //marginBottom: '2em',
        textAlign: 'left',
      },
    },
    figPreview: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    prosePreview: {
      height: 200,
      width: '50%',
      paddingRight: 20,
      overflow: 'hidden',
      maskImage: 'linear-gradient(transparent, black 10%, black 80%, transparent 100%)',
    },
    proseHeadingPreview: {
    },
    arrows: {
      position: 'absolute',
      right: 10,
      bottom: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      '& svg': {
        height: 40,
        width: 40,
        borderRadius: 15,
        padding:10,
        marginRight: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: colors.player,
        '& path': {
          fill: colors.player,
        }
      }
    },
    arrowsColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    progress: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '10%',
      height: 5,
      backgroundColor: colors.player,
      transition: 'width 0.2s ease',
    },
    previewOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'black',
      opacity: '0%',
      display: 'flex',
      alignItems: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.make([0, 0, 15]),
      justifyContent: 'center',
      '& svg': {
        height: 70,
        '& path': {
          fill: colors.bright,
        }
      },
      '&:hover svg path': {
        fill: colors.make([320, 100, 50])
      }
    },

    toc: {
      margin: 'auto',
      width: 1024,
      '& a': {
        'text-decoration': 'underline',
        ...style_link
      },
      '& h4': {
        color: colors.sentence,
      },
    },
    tocColumns: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
    booksColumn: {
      width: 512,
      '& p': {
        marginLeft: 24,
        paddingRight: 24,
      },
      '& h4:hover': {
        textDecoration: 'underline',
        cursor: 'pointer',
      },
      '& h4.selected': {
        border: '1px solid',
        borderColor: colors.dim,
        borderRight: '1px solid black',
        padding: 10,
      }
    },
    sectionsColumn: {
      '& svg': {
        display: 'block',
        margin: 'auto',
        '& path': {
          strokeWidth: 2,
        }
      },
      width: 512,
      padding: 24,
      borderLeft: '1px solid',
      borderColor: colors.dim,
      marginLeft: -1,
    },
  };
  return style;
}

export default make;
