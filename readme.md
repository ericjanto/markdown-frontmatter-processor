# markdown-frontmatter-processor

Parse and process frontmatter in Markdown files by changing, deleting or adding new fields.

## Installation

```bash
yarn add markdown-frontmatter-processor
```

or

```bash
npm i markdown-frontmatter-processor
```

## Usage

You can add or delete frontmatter fields, and change their values.

```js
import processFrontmatter from 'markdown-frontmatter-processor'

// ---
// field: example value
// another_field: some value
// ---
// Markdown content
const md = '---\nfield: example value\nanother_field: some value\n---\nMarkdown content'

const options = {
    field: 'new example value',
    another_field: 'del',
    new_field: 'a new field!'
}

console.log(processFrontmatter(md, options))
```

The above code snippet yields:

```md
---
field: new example value
new_field: a new field!
---
Markdown content
```

Note that you can use either `del` or `-` as field value in order to remove a frontmatter field.

## Caveats

String values specified in the `options` parameter need to be wrapped in single or double quotes as prescribed by JavaScript syntax even though
frontmatter syntax does not require it eventually.

## Contributing

This package is not actively maintained. You are welcome to contribute but active development of this package cannot be guaranteed.

Good first pull requests:

- Add an optional string parameter which specifies a customised delete indicator
