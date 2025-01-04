export const styles = `
:host {
  display: block;
  width: 100%;
  overflow: hidden;
}

.tnw-rows-carousel__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;
}

.tnw-rows-carousel__container::before,
.tnw-rows-carousel__container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 350px;
  pointer-events: none;
}

.tnw-rows-carousel__container::before {
  left: 0;
  background: linear-gradient(
    to right,
    #fff 0%,
    rgba(255, 255, 255, 0.75) 25%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.25) 95%,
    rgba(255, 255, 255, 0) 100%
  );
}
.tnw-rows-carousel__container::after {
  right: 0;
  background: linear-gradient(
    to left,
    #fff 0%,
    rgba(255, 255, 255, 0.75) 25%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.25) 95%,
    rgba(255, 255, 255, 0) 100%
  );
}

.tnw-rows-carousel__row {
  display: flex;
  animation-timing-function: linear;
  flex-shrink: 0;
  width: fit-content;
  min-width: max-content;
  max-width: max-content;
}

::slotted(*) {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin-right: 20px;
}

@keyframes scroll-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;
