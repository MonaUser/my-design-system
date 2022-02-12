import { blue, neutral,yellow,green,red } from "./Colors";
import { PrimaryFont } from "./Typography";

export const defaultTheme = {

    PrimaryColor: blue[400],
    PrimaryColorFocus: blue[300],
    PrimaryColorHover: blue[200],
    PrimaryColorActive: blue[500],
    TextColorOnPrimary: neutral[100],
    TextColor: neutral[600],
    TextColorInverted: neutral[100],
    disabled: neutral[400],
    textOnDisabled: neutral[500],
    PrimaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }


    };

    export const darkTheme = {

      PrimaryColor: neutral[100],
      PrimaryColorFocus: neutral[200],
      PrimaryColorHover: neutral[100],
      PrimaryColorActive: blue[300],
      TextColorOnPrimary: blue[300],
      TextColor: neutral[600],
      TextColorInverted: neutral[100],
      disabled: neutral[400],
      textOnDisabled: neutral[300],
      PrimaryFont,
      status: {
          warningColor: yellow[100],
          warningColorHover: yellow[200],
          warningColorActive: yellow[300],
          errorColor: red[100],
          errorColorHover: red[200],
          errorColorActive: red[300],
          successColor: green[100],
          successColorHover: green[200],
          successColorActive: green[300]
        }

};
