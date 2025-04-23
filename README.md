# Flag icons

> A curated collection of all country flags in SVG. See the [demo](https://sh-38.github.io).

## Resources

List all [`countries`](source/country.json):

```sh
curl "https://sh-38.github.io/source/country.json"
```

[`Flags`](flags/4x3) in SVG:

```sh
curl "https://sh-38.github.io/flags/4x3/{COUNTRY_CODE}.svg"
```

[`Square flags`](flags/1x1) in SVG:

```sh
curl "https://sh-38.github.io/flags/1x1/{COUNTRY_CODE}.svg"
```

## Development
To build `*.scss` files

```bash
$ npm build
```

To serve it on `localhost:8000`

```bash
$ npm start
```

To have only specific countries in the css file, remove the ones that you don't need from the [`_flag-icons-list.scss`](sass/_flag-icons-list.scss) file and build it again.
