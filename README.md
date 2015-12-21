React Transform Boilerplate
=====================

[![Join the chat at https://gitter.im/cape-io/boiler](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cape-io/boiler?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

I was feeling so stupid I had to start over again...

I started with a basic stateless component that updates without a browser refresh.
Next I added some form and input components that I was working on previously in https://github.com/cape-io/cape-forms-demo.

I added in Redux for the simple single input field.

Note: You'll need to allow pop-up windows for this page to see the devtools sidebar thingy.

Using:

* hot reloading React components;
* error handling inside component `render()` function;
* error handling for syntax errors (thanks, **[@glenjamin](https://github.com/glenjamin)**!)

Built with **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)** and a few custom transforms.  
**[Does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.

[![react-transform channel on slack](https://img.shields.io/badge/slack-react--transform%40reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)

## Demo

![](http://i.imgur.com/AhGY28T.gif)

##Install
```
git clone https://github.com/cape-io/boiler.git
cd acf-client
npm install
npm start
open http://localhost:3000
```

Then go ahead and edit files inside `src` (any file except `index.js`).

## What’s Inside


The component instrumentation is implemented on top of **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)**:

* **[react-transform-hmr](https://github.com/gaearon/react-transform-hmr)** handles hot reloading
* **[react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors)** catches component errors

The syntax errors are displayed in an overlay by **[@glenjamin](https://github.com/glenjamin)**’s **[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)** which replaces Webpack Dev Server.

## Troubleshooting

### I can’t serve images / use different HTML file / etc

This boilerplate is just a Webpack bundle served by an Express server. It’s not meant to demonstrate every feature of either project. Please consult Webpack and Express docs to learn how to serve images, or bundle them into your JavaScript application.

### I don’t see the syntax error overlay!

Make sure your react-app is not attached to `document.body` as the client overlay provided by [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) will render into `document.body`.
Attaching the React root node to `document.body` requires extra caution, as many third-party packages will append their markup to the body as well. React will replace the entire contents in the body on every re-render. Thus you will not see the additional markup.

It’s always better to render your React app in a `#root` DOM element.

```js
import React from 'react'
import { App } from 'app'

React.render(<App />, document.getElementById('root'))
```

## Discussion

You can discuss in the gitter.

## License

CC0 (public domain)
