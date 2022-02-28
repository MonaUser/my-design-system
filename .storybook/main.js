module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|mdx|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    {
      name:"@storybook/addon-docs",
      options:{
        configureJSX:true
      }
    },

    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-contexts/register",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y/register",
    
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  } 
  
};