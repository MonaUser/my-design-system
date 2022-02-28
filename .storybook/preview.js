import { addParameters, addDecorator} from "@storybook/react";
import {withContexts} from "@storybook/addon-contexts/react";
import {withKnobs} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";
import { Contexts } from "./contexts";
import   "./storybook.css";
addParameters({

  background:[
  {
  name: "Default theme" , value: "#ffffff", default: true
  },
  {
    name: " Dark theme" , value: "#050449"
  }

  ]
  
});

addDecorator(withContexts(Contexts));
addDecorator(withKnobs);
addDecorator(withA11y);



