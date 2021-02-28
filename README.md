# Getting Started with Create React App
 ## ICE-CREAM SCOOP PROJECT REACT

## Linting and auto Formatting Setup

    Open terminal and cd into the project directory
    enter below command

1.npx install-peerdeps --dev eslint-config-airbnb@18.1.0

    when the above one finishes, enter the below command

2.npm install prettier eslint-config-prettier eslint-plugin-prettier

##create 2 new files inside the project root folder called '.eslintrc' and '.eslintignore'
 write below lines inside .eslintignore file
-----------------------------------------------------------

src/serviceWorker.js
src/setupTests.js
public/*

write below lines inside .eslintrc file
-----------------------------------------

{
"extends": [
"react-app",
"airbnb",
"airbnb/hooks",
"eslint:recommended",
"plugin:jsx-a11y/recommended",
"prettier",
"prettier/react"
],
"plugins": [
"jsx-a11y",
"prettier"
],
"rules": {
"no-console": "off",
"react/state-in-constructor": "off",
"react/prop-types": "off",
"jsx-a11y/click-events-have-key-events": "off",
"react/jsx-filename-extension": [
1,
{
"extensions": [
".js",
".jsx"
]
}
],
"prettier/prettier": [
"error",
{
"trailingComma": "es5",
"singleQuote": true,
"printWidth": 100,
"tabWidth": 4,
"semi": true
}
]
}
}

 