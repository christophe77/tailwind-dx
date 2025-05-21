# 🌀 tailwind-dx

![npm](https://img.shields.io/npm/v/tailwind-dx?color=%2300B8D9&style=flat-square)
![build](https://img.shields.io/github/actions/workflow/status/christophe77/tailwind-dx/ci.yml?branch=main&label=build&style=flat-square)
![coverage](https://img.shields.io/codecov/c/github/christophe77/tailwind-dx?style=flat-square)
![license](https://img.shields.io/npm/l/tailwind-dx?style=flat-square)
![bundle size](https://img.shields.io/bundlephobia/minzip/tailwind-dx?style=flat-square)

> Better classNames. Less eye-bleed. DX that actually feels good.

`tailwind-dx` is a tiny utility that helps you write readable, maintainable Tailwind classNames by organizing them by intent — like layout, spacing, typography, and more.

No more 200-character `className` strings that look like a CSS ransom note.

---

## 🚀 Why tho?

Tailwind is awesome. But reading your class strings after 3 espressos and 5 months of tech debt?

```ts
'flex items-center justify-between px-4 py-2 text-gray-800 shadow rounded-md';
```

Now compare:

```ts
twDX({
	layout: 'flex items-center justify-between',
	spacing: 'px-4 py-2',
	typography: 'text-gray-800',
	effects: 'shadow',
	borders: 'rounded-md',
});
```

**Boom.** Readable. Maintainable. Your eyes and your team will thank you.

---

## ✨ Features

- 🧠 Group Tailwind classes by purpose (layout, spacing, typography, etc.)
- 🧱 Support for reusable class `presets` (like `card`, `buttonPrimary`, etc.)
- 🧼 Cleaner `className` logic in React, Preact, Solid, whatever.
- 🦾 Written in TypeScript. Minimal. Zero deps.
- 🎯 ESLint validation for proper class categorization
- 🌈 Support for responsive, state, and dark mode variants
- 🤖 LLM-friendly structure for better AI assistance

---

## 🤖 LLM & IDE Friendly

`tailwind-dx` is designed to be extremely friendly for both LLM coding agents and IDE autocompletion:

1. **Structured Input**: The layer-based organization makes it easy for LLMs to understand and generate code
2. **ESLint Validation**: Automatic validation of class placement in correct layers
3. **Predictable Patterns**: Consistent structure makes it easier for AI to generate correct code
4. **Self-Documenting**: The layer names serve as natural documentation
5. **IDE Support**: Get autocompletion for:
   - Layer names (layout, spacing, typography, etc.)
   - Class names within each layer
   - Variants (responsive, state, dark mode)

Example of LLM-friendly code generation:

```tsx
// Easy for LLMs to understand and generate
twDX({
	layout: 'flex items-center justify-between',
	spacing: 'px-4 py-2',
	typography: 'text-gray-800 dark:text-white',
	effects: 'shadow hover:shadow-lg',
	borders: 'rounded-md focus:ring-2',
});
```

---

## 📦 Installation

```bash
npm install tailwind-dx
```

or

```bash
yarn add tailwind-dx
```

---

## 🛠️ Usage

### Basic usage

```ts
import { twDX } from 'tailwind-dx';

const className = twDX({
	layout: 'flex items-center justify-between',
	spacing: 'px-4 py-2',
	typography: 'text-gray-800',
	borders: 'rounded-md',
	effects: 'shadow-md',
});
```

### ESLint Integration

To enforce proper class placement in your project, add the ESLint plugin:

1. Install the plugin:

```bash
npm install -D tailwind-dx
```

2. Add to your `.eslintrc.js`:

```js
module.exports = {
	plugins: ['tailwind-dx'],
	extends: ['plugin:tailwind-dx/recommended'],
	// ... your other config
};
```

Now ESLint will validate that your classes are in the correct layers:

```ts
// ❌ This will show an error
twDX({
	layout: 'text-lg', // Error: Class "text-lg" should be in the "typography" layer
	typography: 'flex', // Error: Class "flex" should be in the "layout" layer
});

// ✅ This is correct
twDX({
	layout: 'flex',
	typography: 'text-lg',
});
```

### Use with variants

```ts
twDX({
	// Responsive variants
	layout: 'flex md:flex-col lg:flex-row',

	// Dark mode variant
	typography: 'text-gray-800 dark:text-white',

	// State variants
	effects: 'shadow hover:shadow-lg',
	borders: 'rounded-md focus:ring-2',
});
```

### Use with presets

```ts
twDX({ preset: 'card' });
```

You can define your own presets in `src/index.ts` or extend it in your own wrapper.

```ts
const presets = {
	card: 'bg-white rounded-lg shadow-md p-4',
	buttonPrimary: 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700',
	centerFlex: 'flex justify-center items-center',
};
```

---

## 🧪 Real-world example

```tsx
export function Card() {
	return (
		<div
			className={twDX({
				layout: 'flex flex-col gap-4',
				typography: 'text-gray-800 dark:text-white',
				spacing: 'p-6',
				borders: 'rounded-xl',
				effects: 'shadow-lg hover:shadow-xl',
			})}
		>
			<h2 className={twDX({ typography: 'text-xl font-bold' })}>
				Hello, TailwindDX
			</h2>
			<p
				className={twDX({
					typography: 'text-sm text-gray-500 dark:text-gray-400',
				})}
			>
				Clean classNames, clean mind.
			</p>
		</div>
	);
}
```

---

## ⚙️ Pro Tips

Want conditional classes? Use with `clsx` or `classnames`:

```ts
import { clsx } from 'clsx';

const className = clsx(
	twDX({ preset: 'card' }),
	isActive && 'ring-2 ring-blue-500',
);
```

---

## 🧙 Roadmap (aka Things I Might Do While Procrastinating)

- 🧩 Plugin system for presets
- 🧠 VSCode IntelliSense extension
- 🧼 Linter plugin to auto-split long classNames into twDX
- 🪄 Babel/TS transform that turns `twDX` into strings at build time

---

## 🧑‍💻 Contributing

Got ideas? Found bugs? Want to add a `tailwind-dx` theme song? Open a PR or issue. We're just getting started.

---

## 🪪 License

MIT — use it, abuse it, remix it.

---

## ✨ Final thought

Writing Tailwind should feel like composing UI, not like decoding The Matrix.  
Let `tailwind-dx` clean up your `className` soup. 🍜

---
