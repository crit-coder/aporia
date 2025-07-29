---
id: docusaurus-mdx-code-imports
title: Import Code Snippets in MDX (Docusaurus)
---

# 📦 Importing Code from Files into Docusaurus (MDX)

This guide shows how to **import code directly from `.ts` or `.js` files** into your `.mdx` pages using `raw-loader`. This makes your code examples **sync automatically** — edit the source file, and your docs reflect the change instantly!

<div className='markdown-alert'>
  ❗You must be using **MDX** files (`.mdx`, not `.md`) for imports to work!
</div>

---

## 🔧 1. Install `raw-loader`

Install `raw-loader` as a dev dependency:

```bash
npm install --save-dev raw-loader
```



---

## 🗂️ 2. Create Your Code Snippet

Save your code in a separate file inside a `examples/` folder (or any directory you prefer).

Example file:  
`docs/javascript/arrays/examples/map-users.ts`


```ts title="map-users.ts"
type User = { name: string; age: number }

const users: User[] = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 35 },
]

const names = users.map(user => user.name)

console.log(names) // ['Alice', 'Bob']
```

---

## 🧠 3. Create Your `.mdx` File

Create an MDX doc in the appropriate place, e.g.:
`docs/javascript/arrays/map.mdx`

```tsx
import CodeBlock from '@theme/CodeBlock'
import mapUsersCode from '!!raw-loader!../../examples/map-users.ts'

# Array.prototype.map()

This example extracts names from an array of user objects:

<CodeBlock language="ts">
  {mapUsersCode}
</CodeBlock>
```

> ✅ The `!!raw-loader!` prefix tells Webpack to treat the file as plain text.
>
> 🧠 You can also dynamically highlight or title the snippet with props like `language="js"` or `title="Example"`.

---

## 🧪 4. Run Your Site

Run the dev server:

```bash
npm start
```

Now you can preview your snippet-rendered MDX page at `/docs/...`.

---

## 🧼 Optional: Code Organization Tips

- Put all examples in a common folder like `docs/examples/` or `docs/javascript/arrays/examples/`.
- If needed, alias the import path via `webpack.config.js` (requires Docusaurus custom plugin setup).

---

## 🧭 Result Preview

Your page will now show the code block, sourced directly from your `.ts` file — no duplication needed! 🎉

---

Let me know if you’d like to auto-register examples or build a reusable code import component next!
