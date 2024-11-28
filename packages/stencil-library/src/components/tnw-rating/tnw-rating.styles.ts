import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-rating`

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  --${baseClass}-gap: 5px;
  
  display: flex;
  align-items: center;
  gap: var(--${baseClass}-gap);
}
`;