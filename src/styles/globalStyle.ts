import {css, keyframes} from "styled-components";

const UpDownAnimation = keyframes`

  0% {
    top: 0;
  }
  25% {
    top: 10px;
  }
  50% {
    top: 0;
  }
  75% {
    top: 10px;
  }
  100% {
    top: 0;
  }
`


export const UpDownCSS = css`
  cursor: pointer;
  position: relative;
  animation-name: ${UpDownAnimation};
  animation-duration: 2s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
`
