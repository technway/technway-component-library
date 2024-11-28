import { GLOBAL_PREFIX } from "../../utils/utils";

const baseClass = `${GLOBAL_PREFIX}-icon`;

export const styles = `
* {
    box-sizing: border-box;
}
    
:host {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

:host(.${baseClass}--clickable) {
  cursor: pointer;
}

:host(.${baseClass}--padding-xs) {
  padding: 2px;
}
:host(.${baseClass}--padding-sm) {
  padding: 4px;
}
:host(.${baseClass}--padding-md) {
  padding: 10px;
}
:host(.${baseClass}--padding-lg) {
  padding: 10px;
}
:host(.${baseClass}--padding-xl) {
  padding: 6px;
}
:host(.${baseClass}--padding-2xl) {
  padding: 15px;
}
:host(.${baseClass}--padding-3xl) {
  padding: 20px;
}

:host(.${baseClass}--font-xs) {
  --${baseClass}-fs: 12px;
}
:host(.${baseClass}--font-sm) {
  --${baseClass}-fs: 16px;
}
:host(.${baseClass}--font-md) {
  --${baseClass}-fs: 20px;
}
:host(.${baseClass}--font-lg) {
  --${baseClass}-fs: 24px;
}
:host(.${baseClass}--font-xl) {
  --${baseClass}-fs: 28px;
}
:host(.${baseClass}--font-2xl) {
  --${baseClass}-fs: 50px;
}
:host(.${baseClass}--font-3xl) {
  --${baseClass}-fs: 54px;
}

@media only screen and (max-width: 567px) {
  :host(.${baseClass}--padding-md) {
    padding: 8px;
  }
  :host(.${baseClass}--padding-lg) {
    padding: 8px;
  }
  :host(.${baseClass}--padding-xl) {
    padding: 6px;
  }
  :host(.${baseClass}--padding-2xl) {
    padding: 10px;
  }
  :host(.${baseClass}--padding-3xl) {
    padding: 15px;
  }
    
  :host(.${baseClass}--font-md) {
    --${baseClass}-fs: 18px;
  }
  :host(.${baseClass}--font-lg) {
    --${baseClass}-fs: 20px;
  }
  :host(.${baseClass}--font-xl) {
    --${baseClass}-fs: 24px;
  }
  :host(.${baseClass}--font-2xl) {
    --${baseClass}-fs: 45px;
  }
  :host(.${baseClass}--font-3xl) {
    --${baseClass}-fs: 50px;
  }
}

:host(.${baseClass}--svg-xs) {
  width: 22px;
  height: 22px;
}
:host(.${baseClass}--svg-sm) {
  width: 26px;
  height: 26px;
}
:host(.${baseClass}--svg-md) {
  width: 40px;
  height: 40px;
}
:host(.${baseClass}--svg-lg) {
  width: 40px;
  height: 40px;
}
:host(.${baseClass}--svg-xl) {
  width: 40px;
  height: 40px;
}
:host(.${baseClass}--svg-2xl) {
  width: 50px;
  height: 50px;
}
:host(.${baseClass}--svg-3xl) {
  width: 70px;
  height: 70px;
}

i {
  font-size: var(--${baseClass}-font-size, var(--${baseClass}-fs));
  color: inherit;
  display: inline-block;
}
  
svg {
  fill: inherit;
  width: 100%;
  height: 100%;
}
`;