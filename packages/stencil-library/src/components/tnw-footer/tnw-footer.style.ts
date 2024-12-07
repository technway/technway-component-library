import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-footer`;

export const styles: string = `
* {
    box-sizing: border-box;
}
    
:host {
    display: block;
}

:host(.${baseClass}) {}

footer {
    display: grid;
    gap: 80px;
}

tnw-heading {
    margin-bottom: 20px;
}

.${baseClass}__brand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.${baseClass}__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.${baseClass}__newsletter-description {
    margin-bottom: 20px;
}

.${baseClass}__socialmedia {
    display: flex;
    gap: 20px;
}
`;