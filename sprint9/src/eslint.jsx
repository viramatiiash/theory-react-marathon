// ! ESLint - статичний аналізатор коду, який дозволяє перевірити код на відповідність до певних правил і уникнути багів.

// npm init @eslint/config - генеруємо конфігураційний файл для eslint
//  @eslint/create-config
// npx eslint ./src - перевіряє вказану папку

// Сonfiguration Comments - JS comments to embed configuration info directly into a file
/*eslint semi: ["error", "always"] */
let someVar = 'Hi'

// Configuration Files - use JS, JSON, YAML file to specify configuration info for an entire directory and all of its dubdirectories
// {
//   "parser": "esprima",
//     "rules": {
//     "semi": 2
//     }
// }