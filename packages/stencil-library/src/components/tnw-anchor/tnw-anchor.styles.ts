export const styles = `
* {
    box-sizing: border-box;
}
    
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:host {
    --tnw-anchor-font: var(--tnw-font-text);
    display: inline-block;
}

.tnw-anchor {
    font-family: var(--tnw-anchor-font);
    display: flex;
    gap: 3px;
}
    
.tnw-anchor--none {
    text-decoration: none;
}
.tnw-anchor--underline {
    text-decoration: underline;
}
.tnw-anchor--overline {
    text-decoration: overline;
}
.tnw-anchor--line-through {
    text-decoration: line-through;
}
`;