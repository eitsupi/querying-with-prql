# Quering with PRQL

This is a book-style website built by Quarto and Docusaurus.

To build, we need quarto cli, node.js, R, Python, and a lot of packages!
Please check the [devcontainer.json](.devcontainer/devcontainer.json) file.

Build by

```sh
quarto render --cache-refresh --columns=1000 # https://github.com/quarto-dev/quarto-cli/issues/8332
```

And deploy by

```sh
npm run deploy
```

## License

Licensed under the MIT License.
