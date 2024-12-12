# Testing

The constructed Stylesheets are not supported in the node.js environment, overall this will not make problems as UI appearance is not important for CLI testing, but it's good to be aware!

## Unit Testing Documentation

### Overview
Jest is used for unit testing the component library. Test files should follow the naming convention `<component-name>.spec.ts`.

### Running Unit Tests
1. **Run all unit tests**:  
   Command: `npm run test.spec`  
   This will execute all the unit tests across the library.

2. **Run unit tests for a single component**:  
   Command: `npm run test.spec:single <component-file-name>`  
   Replace `<component-file-name>` with the name of the file you want to test. For example:  
   `npm run test.spec:single tnw-button.spec.ts`.

3. **Approve or clean up snapshot conflicts**:  
   Command: `npm run test.spec:single <component-file-name> -- -u`  
   This approves updated snapshots or removes unused ones for the specified component.

4. **Run a single test case within a component**:  
   Command: `npm run test.spec:single <component-file-name> -- -t "<it-name>"`  
   Replace `<it-name>` with the name of the specific test case.  

   Example: To run the test case  
   ```typescript
   it('toggles accordion on Enter key press', async () => {
       // test implementation
   });
   ```  
   Use the command:  
   `npm run test.spec:single tnw-accordion.spec.ts -- -t "toggles accordion on Enter key press"`

### Notes
- Use descriptive `it` names to make it easier to locate specific tests.  
- Follow Jest best practices to ensure modular and maintainable test cases.  
- For components with required props, ensure to include test cases for their default behavior and edge cases.  
- Ensure tests validate the addition of classes, attributes, or errors based on the prop values.  

## Integration testing
Jest is used.

## E2E testing
Playwright is used

## Visual Regression testing
Chromatic is used

## A11y Testing
Storybook a11y addon is used

## Performance testing
manually tested

## Browser Compatibility testing
Playwright is used within the e2e test