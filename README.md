# angular-cssmodules-example-app

An example application using AngularJS ~1.4, Webpack, Babel, ES6, CSS Modules, Sass, Bootstrap and Font Awesome.

## Development

### Install dependencies

```bash
$ npm install
```

### Make ready

Start the frontend server (port defaults to `8081` if not given):

```bash
$ PORT=8081 npm start
```

### Fire!

```bash
$ open http://localhost:8081
```

## Deployment

### Build frontend distribution

Do this at the start of the deployment process to build all of the frontend templates, assets, etc. Files will be written to `dist`.

```bash
$ NODE_ENV="production" \
  npm run build
```

# Credits

- http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
