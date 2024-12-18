<h1 align="center">
  <img src="https://raw.githubusercontent.com/eythaann/Seelen-UI/812f64d29162fe49da6f621d5e2a3e4852b8b8b1/documentation/images/logo.svg" width="44" align="top" alt="Seelen UI Logo" />
  Seelen UI Library
</h1>


The **Seelen UI Library** provides tools to create and manage widgets for the [Seelen UI](https://github.com/eythaann/seelen-ui) application. This library simplifies interaction with the Seelen UI's internal protocols and structure, making widget development efficient and straightforward.

## Submodules

The library is organized into two key submodules:

### API

The **API** submodule offers a set of classes, functions, and helpers to interact seamlessly with the Seelen UI App. It provides easy access to internal Tauri protocols.

```ts
import { SeelenClass } from '@seelen-ui/lib';

let instance = await SeelenClass.getAsync();
```

### Types

The **Types** submodule contains TypeScript interfaces and types generated directly from the Rust codebase. It ensures type safety and consistency when working with Seelen UI.

```ts
import type { SeelenType } from '@seelen-ui/lib/types';

let myVariable: SeelenType = { ... };
```

## Links

- [GitHub Repository](https://github.com/Seelen-Inc/slu-lib)
- [NPM Package](https://npmjs.com/package/@seelen-ui/lib)
- [JSR Documentation](https://jsr.io/@seelen-ui/lib)