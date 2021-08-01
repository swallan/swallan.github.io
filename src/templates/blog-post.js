import React from "react"
import {graphql} from "gatsby"
import {
  HeaderBack,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "../components"

export default function BlogPost({data}) {
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      {/*<HeaderBack />*/}
      <Layout>
        <HeadingXL>{data.markdownRemark.frontmatter.title}</HeadingXL>
        <HeadingL>{data.markdownRemark.frontmatter.fromDate} to {data.markdownRemark.frontmatter.toDate} </HeadingL>
        <TextBody
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
        />
      </Layout>
    </>
  )
}

export const data = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        fromDate
        toDate
      }
    }
  }
`
