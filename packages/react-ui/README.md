# **@technway/react-ui**

A React UI component library built with React 18, designed for reusability and modularity. This package enables the creation of standalone, customizable React components.

---

## **Features**

- Modular architecture: Each component is standalone.
- Fully typed with TypeScript.
- CSS-in-JS styling for components.
- Uses Rollup for optimized builds (ESM and CJS outputs).x
- Automatically generates exports and updates the build configuration for new components.
- Peer dependencies ensure compatibility with React and React DOM.

---

## **Installation**

Since this package is private, you can link it locally or install it directly from your private registry.

### **Link Locally (for Development)**
```bash
# In the library directory
npm link

# In your React app
npm link @technway/react-ui
```

### **Install from Private Registry**
Add your private registry to `.npmrc`:
```
@technway:registry=https://your-private-registry-url/
```

Then, install:
```bash
npm install @technway/react-ui
```

---

## **Development Environment**

### **System Requirements**
- Node.js >= 18.x (20.x is recommended)
- npm >= 8.x (10.x is recommended)

### **Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/technway/technway-component-library.git
   cd packages/react-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Navigate to the package
   ```bash
   cd packages/react-ui
   ```

4. Run the build:
   ```bash
   npm run build
   ```

---

## **Creating a New Component**

### **1. Generate a new component**
run `npm run generate ComponentName`

### **2. Implement Component**
Inside the file `NewComponent.tsx`:
```tsx
import React from 'react';

export interface NewComponentProps {
    message: string;
}

const styles = {
    container: {
        padding: '1rem',
        backgroundColor: '#f4f4f4',
        borderRadius: '4px',
        textAlign: 'center',
        fontSize: '1rem',
    } as React.CSSProperties,
};

const NewComponent: React.FC<NewComponentProps> = ({ message }) => {
    return <div style={styles.container}>{message}</div>;
};

export default NewComponent;
```

---

### **4. Test Locally**
Build the package and test it in project-example/react-app:
```bash
npm run build
```

In the app, import and reuse the component:
```tsx
import { NewComponent } from '@technway/react-ui';

const App = () => {
    return <NewComponent message="Hello, world!" />;
};
```

---

## **Usage**

After installing the package, you can import and use the components in your React app.

### **Basic Usage**
```tsx
import React from 'react';
import { Button } from '@technway/react-ui';

const App = () => {
    return (
        <div>
            <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
        </div>
    );
};

export default App;
```

### **Customizing Components**
Since the components use inline CSS-in-JS styling, customization can be done via props or by extending components.

Example of extending the `Button` component:
```tsx
import React from 'react';
import { Button, ButtonProps } from '@technway/react-ui';

const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            {...props}
            label={`Custom: ${props.label}`}
            onClick={() => {
                console.log('Custom Button Clicked');
                props.onClick?.();
            }}
        />
    );
};
```

---

## **Scripts**

### **Available Commands**
- **`npm run clean`**: Removes the `dist` directory.
- **`npm run build`**: Cleans the `dist` directory, builds the package, and organizes the output structure.
- **`npm run lint`**: Runs ESLint for linting the codebase.
- **`npm run format`**: Formats the codebase with Prettier.
- **`npm run generate`**: Generates a new component.

---

## **Folder Structure**

```
react-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   ├── NewComponent/
│   │   │   ├── NewComponent.tsx
│   ├── index.ts
├── scripts/
│   ├── move-dts.js
│   ├── update-index-and-rollup.js
├── dist/
│   ├── Button/
│   │   ├── Button.js
│   │   ├── Button.esm.js
│   │   ├── Button.d.ts
│   ├── index.d.ts
├── rollup.config.js
├── package.json
├── tsconfig.json
```

---

## **License**

This package is private and not meant for public use. All rights reserved by **Technway**.