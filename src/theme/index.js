import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

import AlmendraSCRegularTTF from "../fonts/AlmendraSC-Regular.ttf";
import MirzaBoldTTF from "../fonts/Mirza-Bold.ttf";
import MirzaRegularTTF from "../fonts/Mirza-Regular.ttf";

const almendraSCRegular = {
    fontFamily: "AlmendraSC",
    src: `
        local("AlmendraSC"),
        url(${AlmendraSCRegularTTF}) format("ttf")
    `,
};
const mirzaBold = {
    fontFamily: "Mirza",
    src: `
        local("MirzaBold"),
        url(${MirzaBoldTTF}) format("ttf")
    `,
};
const mirzaRegular = {
    fontFamily: "Mirza",
    src: `
        local("Mirza"),
        url(${MirzaRegularTTF}) format("ttf")
    `,
};

const theme = createMuiTheme({
    colorPrimary: "#DEDEDE",

    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": [mirzaRegular, mirzaBold, almendraSCRegular],
            }
        },
    },

    palette: {
        primary: {
            dark: grey[300],
            light: grey[100],
            main: grey[200],
        },
        secondary: {
            dark: grey[900],
            light: grey[700],
            main: grey[800],
        },
        type: "dark",
    },

    typography: {
        fontFamily: "Mirza",
        fontSize: 16,
    },
});

export default theme;
