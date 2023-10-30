# A Minimalist Mern Boilerplate Powered by Vite


This Boilerplate is meant to give a bare bones Mern app that is ready for use in production or locally. This Boilerplate is intended for a single deployment of an express server, serving a compiled react app. 


#### Overview

- There are **two branches**
	<br/>
	1. `main` branch which is configured to use `es6 modules` on the server denoted by `type: module` in the `package.json` (note: es6 modules will be used on the client regardless) 
	<br/>
	2. `commonjs` branch which is configured to use `commonjs modules` (require statements) on the server, denoted by `type: commonjs` in the `package.json`
	<br/>

- **Command Overview**
	<br/>
	1. if you prefer to run both the server and client in one terminal
		a.  `npm run dev` (note `npm install concurrently -g`) to enable the command
	<br/>
	2.  If you prefer  to run seperate terminals for client and server
		a.  `npm run client`
		b. `npm run server`
	<br/>

- **Running the Client Locally**


In the terminal you will see ``` Local:   http://localhost:5173/``` which will be where your vite app is running. It will be servering the `index.html` that is located in the root of the project. This file is configured for the hotreloading and everything to make that development experience silky smooth.

```html
    <script type="module">
      import RefreshRuntime from 'http://localhost:5173/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
   <script type="module" src="http://localhost:5173/@vite/client"></script>
   <script type="module" src="http://localhost:5173/src/main.jsx"></script>
```


- **Viewing Production Build**
	<br/>

	1. `npm run build` this will build the `dist` folder
	2. navigate to `localhost:8000` if you want to view what your app would look like in production. Note you have to run build everytime you want to see updates. 
	<br/>
    - Few things to note

	 	The `build` command will create a `manifest.json` file in your `dist` folder
		that will have reference to your compiled css, and js files. The following code, is importing that json file and then injecting it into the `index.ejs` so we can read the compiled css and js files.
	```js
	import manifest from './dist/manifest.json' assert {type: "json"};

	// "catch all" route for production app, can view on localhost:8000
	app.get('/*', function(req, res) {
	res.render(path.join(__dirname, 'dist', 'index.ejs'), {manifest});
	});
	```

	Reading the `manifest` variable in the `index.ejs` in your `dist folder` looks like the following. 
	<br/>

	```html
	<link rel="stylesheet" href="/<%=manifest['src/main.css'].file%>" />
	<script type="module" src="/<%=manifest['src/main.jsx'].file %>"></script>
	```	

	You can reference the [backend intergration](https://main.vitejs.dev/guide/backend-integration.html) guide from vite if you're curious. 

<hr/>

* **Vite.config.js**

In the code below we are setting up the proxy to `/api` on `localhost:8000` where you're express server is running, remember in this environment the client (vite) app is running on ```http://localhost:5173```, so any api calls will go to `localhost:8000/api/whatever-your-endpoint-is`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000'
      }
    }
  },
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
```


## Resources

- [vite backend Configuration](https://main.vitejs.dev/guide/backend-integration.html)