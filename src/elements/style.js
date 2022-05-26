function make(colors, mode)
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

  const for_dark = {
    '#darkMode': {
      display: 'none',
    }
  }

  const for_light = {
    '#lightMode': {
      display: 'none',
    }
  }

  const for_mode = mode === 'light' ? for_light : for_dark;

  const style = {
    link: style_link,
    '@global': {
      body: {
        backgroundColor: colors.none,
        color: colors.sentence,
        lineHeight: '1.5em'
      },
      ...for_mode,

      '#container': {
        '&>#pg': {
          display: 'none',
        },
        '&>#section': {
          display: 'none',
        },
        '&>#cover': {
          display: 'none',
        },
        '&>#toc': {
          display: 'none',
        },
        '&.pg': {
          '&>#pg': {
            display: 'block',
          },
          '& #landscapeDictate': {
            display: 'none',
          }
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
      '.smpl-bright': {
        stroke: colors.bright,
      },
      '.fig-low': {
        stroke: colors.low,
      },
      '.fig-dim': {
        stroke: colors.dim,
      },
      '.fig-bright': {
        stroke: colors.bright,
      },
      '.fig-hover': {
        stroke: colors.hover_bright,
      },
      '.fig-occluded': {
        stroke: colors.occluded,
      },
      '.letter-none': {
        stroke: colors.none,
      },
      '.letter-dim': {
        fill: colors.dim,
      },
      '.letter-bright': {
        fill: colors.bright,
      },
      '.letter-hover': {
        fill: colors.hover_bright,
      },
      '.letter-occluded': {
        fill: colors.occluded,
      },

      '.sentence': {
        transition: 'color 0.2s ease',
        color: colors.dim,
      },
      '.name': {
        transition: 'color 0.2s ease',
        fontFamily: 'Nale',
      },

      '.sentence-at': {
        color: colors.sentence
      },
      '.sentence-hover': {
        color: colors.hover
      },

      '.sentence-at .name': {
        color: colors.dim
      },
      '.sentence-hover .name': {
        color: colors.dim
      },

      '.name.name-at': {
        color: colors.bright
      },
      '.name.name-hover': {
        color: colors.hover_bright
      },
    },

    pg: {
      paddingTop: 10,
      width: 1200,
      height: 630,
      fontSize: '2rem',
      margin:10,
      position: 'relative',
    },
    pgBorder: {
      position: 'absolute',
      top: -1,
      left: -1,
      bottom: -1,
      right: -1,
      border: '1px solid #555',
    },
    pgFigures: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 10,
    },
    pgFiguresLeft: {
      flexWrap: 'wrap',
      alignItems: 'center',
      '& svg': {
        maxWidth: 175,
        maxHeight: 220,
        '& path': {
        }
      }
    },

    coverWrap: {
      margin: 'auto',
      minWidth: 1024,
      width: 1024,
      padding: 12,
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
        color: colors.emph,
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

    movement: {
      color: colors.none,

      width: 512,
      height: 50,

      position: 'fixed',
      bottom: 0,
      left: 500,

      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'stretch',

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
      backgroundColor: colors.dim,
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
      backgroundColor: colors.sentence,
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
    c_sentence: { color: colors.step },
    c_bright: { color: colors.bright },

    coverHead: {
      textAlign: 'center',
      userSelect: 'none',
    },
    coverFoot: {
      textAlign: 'right',
      fontSize: '0.8em',
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: colors.low,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    hero: {
      width: '90%',
      margin: 'auto',
      textAlign: 'center',
    },
    quoteTitle: {
      '& h4': {
        marginTop: '3rem',
        marginBottom: 0,
      },
      textAlign: 'center',
    },
    coverQuotes: {
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'row',
      fontSize: '0.8em',
      '& div': {
        padding: 20,
        flexGrow: 1,
        flexBasis: 0,
        color: colors.sentence,
        '& em': {
          color: colors.emph
        }
      },
    },

    preview: {
      minWidth: 600,
      position: 'relative',
      marginTop: 50,
      paddingTop: 100,
      paddingBottom: 50,
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
    arrows: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
      '& svg': {
        height: 30,
        width: 30,
        borderRadius: 10,
        padding:5,
        marginRight: 10,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: colors.player,
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
      backgroundColor: colors.player,
      transition: 'width 0.2s ease',
    },
    previewOverlay: {
      visibility: 'hidden',
      position: 'absolute',
      left: -5,
      right: -5,
      top: -5,
      bottom: -5,
      backgroundColor: colors.none + 'bb',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.low,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg.click': {
        position: 'absolute',
        top: 10,
        '& path.letter': {
          fill: colors.emph,
        },
        '& path.arrow': {
          stroke: colors.emph,
          fill: 'none',
        }
      },
      '& svg.play': {
        opacity: '70%',
        height: 70,
        '& path': {
          fill: colors.emph,
        }
      },
      '&:hover svg.play path': {
        fill: colors.link_hover,
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
          stroke: colors.sentence
        }
      },
      width: 512,
      padding: 24,
      borderLeft: '1px solid',
      borderColor: colors.dim,
      marginLeft: -1,
    },
    modeSwitch: {
      '& a': {
        color: colors.sentence,
        textDecoration: 'none',
        '&:hover': {
          color: colors.full,
        }
      }
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
        minWidth: 650,
        width: '95%',
      },
      preview: {
        margin: 'auto',
        width: '100%',
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
      previewOverlay: {
        '& svg.click': {
          top: 110,
        },
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
