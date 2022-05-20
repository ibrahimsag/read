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
        backgroundColor: colors.none,
        color: colors.near,
        lineHeight: '1.5em'
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
          '& #landscapeDictate': {
            display: 'none',
          }
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
      '.smpl-low': {
        stroke: colors.low,
      },
      '.smpl-dim': {
        stroke: colors.dim,
      },
      '.smpl-near': {
        stroke: colors.near,
      },
      '.smpl-bright': {
        stroke: colors.bright,
      },
    },

    coverWrap: {
      margin: 'auto',
      minWidth: 650,
      width: 1024,
      padding: 12,
      '& a': {
        'text-decoration': 'underline',
        ...style_link
      }
    },
    cover: {
      marginTop: 50,
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
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: colors.stand,
    },
    contentsColumn: {
      width: '50%',
      '&.fig': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
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
      width: '100%',
      height: 76,
      padding: [[15, 25]],
      display: 'flex',
      flexDirection: 'row nowrap',
      alignItems: 'baseline',
      overflow: 'ellipsis',
    },
    logo: {
      fontSize: '1.2em',
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover': {
        color: colors.sentence,
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
      color: colors.dim,
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

      color: colors.none,

      cursor: 'pointer',
      userSelect: 'none',
      '& svg': {
        height: 20,
        marginTop: 3,
        '& path': {
          fill: colors.none
        }
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
        color: colors.near,
        '&:hover': {
          color: colors.sentence,
        }

      }
    },
    headStand: {
      padding: 3,
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: colors.stand,
      color: colors.none,
      marginTop: '-1.5em',
    },
    coverFoot: {
      textAlign: 'right',
      fontSize: '0.8em',
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: colors.low,
    },
    hero: {
      width: '90%',
      margin: 'auto',
      textAlign: 'center',
      '& a' : style_link
    },

    preview: {
      minWidth: 600,
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
      height: 220,
      width: '50%',
      paddingRight: 20,
      overflow: 'hidden',
      color: colors.dim,
      fontSize: '1.2rem',
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
        borderColor: colors.player_low,
        '& path': {
          fill: colors.link,
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
      backgroundColor: colors.player_low,
      transition: 'width 0.2s ease',
    },
    previewOverlay: {
      position: 'absolute',
      left: -5,
      right: -5,
      top: -5,
      bottom: -5,
      backgroundColor: colors.none,
      opacity: '0%',
      display: 'flex',
      alignItems: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.low,
      justifyContent: 'center',
      '& svg': {
        height: 70,
        '& path': {
          fill: colors.full,
        }
      },
      '&:hover svg path': {
        fill: colors.player_low,
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
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.dim,
        borderRightColor: colors.none,
        backgroundColor: colors.none,
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
      marginLeft: -2,
    },

    landscapeDictate: {
      backgroundColor: colors.none,
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      textAlign: 'center',
      lineHeight: '2em',
      '& svg path': {
        fill: colors.link
      },
      '& a': style_link
    },

    '@media (max-width: 650px)': {
      '@global': {
        body:{
          fontSize: '1.7rem',
        },
        '#container.section>#section': {
          display: 'none !important',
        },
        '#container.toc>#toc': {
          display: 'none !important',
        }
      },
      landscapeDictate: {
        display: 'flex',
      },
      coverWrap: {
        width: '95%',
      },
      preview: {
        margin: 'auto',
        width: '100%',
        paddingTop: 20,
        flexDirection: 'column'
      },
      figPreview: {
        width: '100%',
        alignItems: 'center',
      },
      prosePreview: {
        width: 512,
        padding: 20,
      },
      coverQuotes: {
        flexDirection: 'column'
      },
      contentsRow: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      contentsColumn: {
        width: 'auto',
        '&.title': {
          width: '100%',
        }
      },
    },

  };
  return style;
}

export default make;
