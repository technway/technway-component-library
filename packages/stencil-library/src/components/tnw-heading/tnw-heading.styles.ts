export const styles = `
* {
    box-sizing: border-box;
}
    
:host{
    --tnw-heading-font: var(--tnw-font-heading);
    --tnw-heading-font-text: var(--tnw-font-text);
    display: block;
}

.tnw-heading {
    font-family: var(--tnw-heading-font);
    margin: 0;
    padding: 0;
}

.tnw-heading--textFont {
    font-family: var(--tnw-heading-font-text);
}
`;