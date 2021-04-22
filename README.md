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

## Usage

```
usage: emmet 'emmet-abbreviation'
```

For example
```
emmet 'html:5>h1{Hello}+p>lorem'
```

will return
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>Hello</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam repellendus excepturi ullam, deserunt hic nisi facilis? Optio facilis asperiores, suscipit, cupiditate eum neque odio iure earum nisi ut id similique!</p>
</body>
</html>
```

Checkout [emmet documentation](https://docs.emmet.io/) for more examples.

## Tips

You can insert `emmet-cli` output to vim with `:read !emmet '…'` and to [vis](https://git.sr.ht/~martanne/vis) with `:< emmet '…'`
