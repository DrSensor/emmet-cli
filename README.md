# emmet-cli

[Emmet](https://emmet.io/) in your command line. Doesn't depend on `node.js`. Installs portable binary.

## Build

Install [quickjs](https://bellard.org/quickjs/) compiler and build binary with `make` command.

### Generating emmet.js (optional)

You can optionally generate `emmet.js` file from emmet's source. This step requires `node.js` and `npm` installed, for that reason I am including generated file in repository.

```
cd emmet-src/
npm install
npm run build
```

## Install

```
sudo make install
```

