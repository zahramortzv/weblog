import { createTheme } from "@mui/material/styles";

 const theme = createTheme({

    typography:{
        fontFamily : `"Yekan Bakh","Roboto","Arial"`,
        fontWeightLight : 300,
        fontWeightRegular:400,
        fontWeightMedium:500,
        fontWeightBold:700,
        fontWeightHeavy:800,
        fontWeightFat:900,
    },
    direction:"rtl",
});

export default theme;