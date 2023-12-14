# Images Test

Link on project:

https://images-pi-nine.vercel.app/

### Description:

I have two pages with `Search Page` and `Single Media View` and used
Axios to make service for getting data on Search Page and Single Media View.
To easy handle state I used ReactQuery so it's easy to handle `refetch` or
loading details. 
Also, for state management in App is used `ReactContext` and there is multiple
contexts in app for Search, Card, and Toast to handle messages to user for some
request. 
For style is used `TailwindCSS` and `HeadlessUI` to easy handle Toast, Modal and Dialog.

To have better performance app is not created with `CRA` instead of that is used `ViteJS`.
There is used `pnpm` instead of `npm` or `yarn` because `pnpm` uses a novel approach
called “symlinked node_modules”, which creates hard links to the global store of packages
instead of copying them to each project. This saves disk space and reduces duplication. 

App is done with React but as I think this product need to have better SEO my choice will be NextJS 

How to run app:

````
Install dependencies:
- pnpm install

     or

- npm install

- Add .env file
.env will be in REPO in exact values but it's not good apporach for security reasone

Run App:
- pnpm run dev

     or

- npm run dev
````

### Technologies
On this project implementation we used multiple different lightweight packages to make better optimisation of this solution,

Here is few of them:
- Vite
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Form Hooks - we don't have forms in this project but used  for search to easy implement search with Enter
- HeadlessUI - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
- TailwindCSS - Modern way of styling apps
- Axios - Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
- ReactQuery - owerful asynchronous state management for TS/JS, React
- React Router Dom - Routing on pages with React
- HeroIcons

### Importance of TypeScript
What is TypeScript Used For? TypeScript extends JavaScript and enhances the developer experience. It helps software developers add type safety to their projects and provides features like type aliases, interfaces, abstract classes, encapsulation, inheritance, and function overloading.
 
### Why to use Vite
Unlike CRA, Vite does not build your entire application before serving, instead, it builds the application on demand. It also leverages the power of native ES modules, esbuild, and Rollup to improve development and build time.

### Folder structure

```
- src
  - assets
  - core
    - api
    - compoents
    - conts
    - helpers
    - providers
  - modules
    - hooks
    - interfaces
    - page
    - services
  - routes
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
