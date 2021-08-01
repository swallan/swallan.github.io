import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const HeadingS = styled.h2`
  display: block;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 2.5vh;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 30px;
  }
`
