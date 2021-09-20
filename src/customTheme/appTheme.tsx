// For custom theme:
import { createTheme } from "@mui/material/styles";

// ---------

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

const customPalette = {
  common: {
    black: "#000000",
    white: "#FFFFFF"
  },
  primary: {
    // Pink
    main: "#F24F83"
  },
  secondary: {
    // Pink
    main: "#F24F83"
  },
  error: {
    // Red
    main: "#FF6969",
    contrastText: "#530C0C"
  },
  warning: {
    // Yellow
    main: "#F2C94C",
    contrastText: "#6E5404"
  },
  success: {
    // Green
    main: "#4CD6B5",
    contrastText: "#0F552C"
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#8c8c8c",
    disabled: "#282828"
  },
  background: {
    paper: "#1A1A1A", // Card background colour.
    default: "#000000"
  }
};

export const appTheme = createTheme({
  // Palette
  palette: {
    mode: "dark",
    common: customPalette["common"],
    primary: customPalette["primary"],
    secondary: customPalette["secondary"],
    error: customPalette["error"],
    warning: customPalette["warning"],
    success: customPalette["success"],
    text: customPalette["text"],
    background: customPalette["background"],
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  // Typography
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      "Metropolis",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    h1: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "56px",
      lineHeight: "95%"
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "35px",
      lineHeight: "100%"
    },
    h3: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "100%"
    },
    h4: undefined, // Disable h4 variant
    h5: undefined, // Disable h5 variant
    h6: undefined, // Disable h6 variant
    subtitle1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "120%"
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "120%"
    },
    body2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "130%"
    },
    button: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0.02em",
      textTransform: "none"
    },
    overline: {
      fontWeight: "bold",
      fontSize: "12px",
      lineHeight: "120%",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  },
  // Shape
  shape: {
    borderRadius: 8
  },
  // Components
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          padding: "10px 16px"
        },
        outlined: {
          boxSizing: "border-box",
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px"
          }
        },
        sizeLarge: {
          height: "48px",
          fontSize: "1.25rem",
          padding: "12px 20px"
        },
        sizeMedium: {
          height: "40px"
        },
        sizeSmall: {
          height: "34px",
          padding: "6px 12px"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem"
        },
        colorPrimary: {
          backgroundColor: customPalette["primary"]["main"],
          color: customPalette["text"]["primary"]
        },
        colorSecondary: {
          backgroundColor: "transparent",
          border: "2px solid rgba(242, 79, 131, 0.5)", // primary.main but 0.5 opacity
          "&:hover": {
            border: "2px solid rgba(242, 79, 131, 1)"
          },
          color: customPalette["secondary"]["main"]
        },
        disabled: {
          backgroundColor: "rgba(255, 255, 255, 0.12)" // MUI default action.disabledBackground
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // padding: "24px",
          textAlign: "left",
          backgroundImage: "none"
        },
        elevation: {
          boxShadow: "none"
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "1.5rem"
        },
        title: {
          color: customPalette["text"]["secondary"]
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "1.5rem"
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Metropolis";
          font-weight: 900;
          font-style: normal;
          src: local("Metropolis Black"), local("Metropolis-Black"),
            url("/assets/fonts/Metropolis-Black.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 900;
          font-style: italic;
          src: local("Metropolis Black Italic"), local("Metropolis-BlackItalic"),
            url("/assets/fonts/Metropolis-BlackItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 800;
          font-style: normal;
          src: local("Metropolis Extra Bold"), local("Metropolis-ExtraBold"),
            url("/assets/fonts/Metropolis-ExtraBold.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 800;
          font-style: italic;
          src: local("Metropolis Extra Bold Italic"),
            local("Metropolis-ExtraBoldItalic"),
            url("/assets/fonts/Metropolis-ExtraBoldItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 700;
          font-style: normal;
          src: local("Metropolis Bold"), local("Metropolis-Bold"),
            url("/assets/fonts/Metropolis-Bold.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 700;
          font-style: italic;
          src: local("Metropolis Bold Italic"), local("Metropolis-BoldItalic"),
            url("/assets/fonts/Metropolis-BoldItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 600;
          font-style: normal;
          src: local("Metropolis Semi Bold"), local("Metropolis-SemiBold"),
            url("/assets/fonts/Metropolis-SemiBold.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 600;
          font-style: italic;
          src: local("Metropolis Semi Bold Italic"), local("Metropolis-SemiBoldItalic"),
            url("/assets/fonts/Metropolis-SemiBoldItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 500;
          font-style: normal;
          src: local("Metropolis Medium"), local("Metropolis-Medium"),
            url("/assets/fonts/Metropolis-Medium.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 500;
          font-style: italic;
          src: local("Metropolis Medium Italic"), local("Metropolis-MediumItalic"),
            url("/assets/fonts/Metropolis-MediumItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 400;
          font-style: normal;
          src: local("Metropolis Regular"), local("Metropolis-Regular"),
            url("/assets/fonts/Metropolis-Regular.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 400;
          font-style: italic;
          src: local("Metropolis Regular Italic"), local("Metropolis-RegularItalic"),
            url("/assets/fonts/Metropolis-RegularItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 300;
          font-style: normal;
          src: local("Metropolis Light"), local("Metropolis-Light"),
            url("/assets/fonts/Metropolis-Light.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 300;
          font-style: italic;
          src: local("Metropolis Light Italic"), local("Metropolis-LightItalic"),
            url("/assets/fonts/Metropolis-LightItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 200;
          font-style: normal;
          src: local("Metropolis Extra Light"), local("Metropolis-ExtraLight"),
            url("/assets/fonts/Metropolis-ExtraLight.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 200;
          font-style: italic;
          src: local("Metropolis Extra Light Italic"),
            local("Metropolis-ExtraLightItalic"),
            url("/assets/fonts/Metropolis-ExtraLightItalic.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 100;
          font-style: normal;
          src: local("Metropolis Thin"), local("Metropolis-Thin"),
            url("/assets/fonts/Metropolis-Thin.otf") format("opentype");
        }
        @font-face {
          font-family: "Metropolis";
          font-weight: 100;
          font-style: italic;
          src: local("Metropolis Thin Italic"), local("Metropolis-ThinItalic"),
            url("/assets/fonts/Metropolis-ThinItalic.otf") format("opentype");
        }`
    }
  }
});

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h4: false;
    h5: false;
    h6: false;
  }
}
