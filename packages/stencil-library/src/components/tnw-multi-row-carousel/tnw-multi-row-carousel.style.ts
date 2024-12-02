export const styles = `
  :host {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .tnw-multi-row-carousel__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .tnw-multi-row-carousel__row {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
  }

  .tnw-multi-row-carousel__item {
    display: inline-block;
    flex-shrink: 0;
  }

  /* Animation for rows moving left */
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  /* Animation for rows moving right */
  @keyframes scroll-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
