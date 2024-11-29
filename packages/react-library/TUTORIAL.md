# Setup React Library from a Stencil Library with Usage

## Setup a Stencil Component Library for React Integration Using `@stencil/react-output-target`

### Tools and Versions Used
- **StencilJS:** `v4.22.3`
- **@stencil/react-output-target:** `^0.7.4`
- **Lerna:** `8.1.2`

---

### Step 1: Setup a Monorepo

Using a monorepo simplifies the management of multiple packages like the Stencil library, React wrappers, or future integrations (e.g., Angular, Vue). This approach also scales well for adding additional packages.

1. **Initialize a Lerna Project:**
   ```bash
   lerna init
   ```

2. **Install TypeScript in the Root Directory:**
   ```bash
   npm install typescript @types/node --save-dev
   ```

3. **Create a `packages` Directory:**
   - Move your existing Stencil library to the `packages` directory or create a new library if it doesn't exist.
   - Use the Stencil CLI for a new library:
     ```bash
     npm init stencil
     ```

4. **Create a React Library:**
   ```bash
   lerna create react-library
   ```
   Follow the CLI prompts to complete the setup.

5. **Install Required Dependencies for React Library:**
   ```bash
   npm install react react-dom typescript @types/react --save-dev
   npm install @stencil/react-output-target --save
   ```

---

### Step 2: Setup TypeScript Configuration

#### Root `tsconfig.json`
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "noImplicitAny": false,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es6",
    "sourceMap": true,
    "lib": ["es6"]
  },
  "exclude": ["node_modules", "**/*.spec.ts", "**/__tests__/**"]
}
```

#### React Library `tsconfig.json`
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "lib": ["dom", "es2015"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "es2015",
    "skipLibCheck": true,
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "declarationDir": "./dist/types"
  },
  "include": ["lib"],
  "exclude": ["node_modules"]
}
```

> Ensure that the following settings are in place to avoid runtime issues:
- `"module": "esnext"`
- `"moduleResolution": "bundler"`

---

### Step 3: Update `package.json` for React Library

The `package.json` file in the React library should look like this:
```json
{
  "main": "dist/index.js",
  "module": "dist/index.js",
  "types": "dist/types/index.d.ts",
  "scripts": {
    "build": "npm run tsc",
    "tsc": "tsc -p . --outDir ./dist"
  },
  "files": ["dist"],
  "publishConfig": {
    "access": "public"
  },
  "dependencies": {
    "@technway/stencil-library": "*"
  }
}
```

---

### Step 4: Setup Stencil Library for React Wrappers

1. **Install `@stencil/react-output-target`:**
   ```bash
   npm install @stencil/react-output-target --save-dev
   ```

2. **Update `stencil.config.ts`:**
   Add the React output target to generate the wrappers:
   ```ts
   import { reactOutputTarget } from '@stencil/react-output-target';

   export const config: Config = {
     outputTargets: [
       reactOutputTarget({
         outDir: '../react-library/lib/components/stencil-generated/',
         stencilPackageName: '@technway/stencil-library',
       }),
       {
         type: 'dist-custom-elements',
         customElementsExportBehavior: 'auto-define-custom-elements',
       },
     ],
   };
   ```
    
   - outDir: Specifies where the React wrappers will be generated.
   - stencilPackageName: The package name of the Stencil library.

   > **Why "dist-custom-elements"?** This ensures the Stencil library exports custom elements that are ready for integration with frameworks like Angular or React.

3. **Build the Stencil Library:**
   ```bash
   npm run build
   ```

This generates the React wrappers in the specified directory.

---

### Step 5: Configure React Library for Wrappers

1. **Create an Entry File for Components:**
   In the `lib` directory of the React library, create an entry file for components name it **"index.ts"**:
   ```ts
   export * from './components/stencil-generated/components';
   ```

2. **Build the React Library:**
   ```bash
   npm run build
   ```

---

### Step 6: Resolve Path Issues in React Library
Sometimes, the generated paths for the components in the React library may cause issues. Update them manually in the generated files if needed.

Example:
- From (Generated Path):
  ```ts
  import { TnwAccordion as TnwAccordionElement, defineCustomElement as defineTnwAccordion } from "@technway/stencil-library/dist/components/tnw-accordion.js";
  ```
- To (Corrected Path):
  ```ts
  import { TnwAccordion as TnwAccordionElement, defineCustomElement as defineTnwAccordion } from "../../../../stencil-library/dist/components/tnw-accordion.js";
  ```

> **Why is this needed?** This issue might arise from TypeScript configurations or the relative structure of the monorepo. Revisit paths if your React library's structure changes.

---

## Usage and Integration in a React App

### Install the Libraries in the React App
In your React app, include the Stencil and React library packages in the `package.json`:
```json
"dependencies": {
  "@technway/react-library": "file:../../technway-component-library/packages/react-library",
  "@technway/stencil-library": "file:../../technway-component-library/packages/stencil-library"
}
```

> **Note:** Update paths to match your directory structure.

Install the dependencies:
```bash
npm install
```

---

### Import Styles and Components
1. Import the global styles from the Stencil library in `main.tsx`:
   ```ts
   import "../node_modules/@technway/stencil-library/dist/components-lib/components-lib.css";
   ```

2. Use components from the React library. Example:
   ```tsx
   import { TnwButton, TnwIcon } from '@technway/react-library/lib/components/stencil-generated/components';
   import './Button.css';

   type ButtonProps = {
       label: string;
       iconName?: string;
   } & typeof TnwButton['prototype'];

   const defaultButtonProps: Partial<ButtonProps> = {
       appearance: "solid",
       size: "lg",
   };

   function Button({ iconName, ...props }: ButtonProps) {
       const mergedProps = { ...defaultButtonProps, ...props };

       return (
           <TnwButton {...mergedProps}>
               {iconName && <TnwIcon slot="icon-end" name={iconName} color="white"></TnwIcon>}
           </TnwButton>
       );
   }

   export default Button;
   ```

> **Why are components imported from lib instead of dist?** The React app uses TypeScript, and the lib directory contains TypeScript files with type definitions, which might be more compatible than JavaScript files in dist.