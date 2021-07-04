import Variables from "@styles/Variables";
import Fonts from "@styles/Fonts";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
${Variables}
${Fonts}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/** Layout **/
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background-color: var(--canvas);

  &.blur {
    overflow: hidden;

    #app-content > * {
      filter: blur(5px) brightness(0.7);
      pointer-events: none;
      user-select: none;
    }
  }
}

body::-webkit-scrollbar {
  width: 0.3rem;
}

body::-webkit-scrollbar-track {
  background: var(--canvas);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--scrollbarColor);
  border-radius: 20rem;
}

.icon {
  color: var(--primaryColor);
  font-size: 2rem;

  @media all and (max-width: 400px) {
    font-size: 1.2rem;
  }
}

#experience,
#work,
#contact {
  position: relative;
  background-color: var(--canvas);
}

#about {
  position: relative;
  background-color: var(--canvas);
  border-top: solid 2px #111111;
}

#intro {
  overflow: hidden;
  position: sticky;
  top: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#hero {
  animation-duration: 5s;
  animation-name: fadeIn;
  animation-timing-function: "ease-in forward";
}

`;

export default Globals;