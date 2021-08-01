import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {ButtonLink, FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`

export function HeaderLogo() {
  return (
    <HeaderWrapper>
      <ButtonLink
        href="https://github.com/lewislbr/lewis-gatsby-starter-blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </ButtonLink>
      <ButtonLink
        href="https://mobile.twitter.com/lewislbr"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </ButtonLink>
      <ButtonLink
        href="https://github.com/lewislbr/lewis-gatsby-starter-blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </ButtonLink>
      {/*<Logo>LGSB</Logo>*/}
      {/*<Link to="https://www.linkedin.com/in/samuelwallan/">*/}
      {/*  <p>LinkedIn</p>*/}
      {/*</Link>*/}
    </HeaderWrapper>
  )
}
