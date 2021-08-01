import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  HeadingS,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "../components"
import {BREAKPOINT} from "../utils/constants"

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`
const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`
const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

export default function Home({data}) {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>Samuel Wallan</HeadingXL>
          <TextHome>
            Intern @ Amazon Web Services SES Team
            <br/><br/>
            Software Engineering Major @ Cal Poly<br/>
            Graduating in Spring 2022


          </TextHome>
        </Hero>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title} | {node.frontmatter.company}</HeadingL>
              <TextBody>{node.frontmatter.fromDate} to {node.frontmatter.toDate} <br/> <br/> {node.excerpt}</TextBody>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            company
            fromDate
            toDate
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
