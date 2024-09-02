import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMeta = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            shortTitle
            description
            siteUrl
            image
            userLinkedin
            nav {
              title
              path
            }
            github {
              site
              api
            }
            author {
              name
              site
            }
            status {
              site
            }
          }
        }
      }
    `,
  )

  return site.siteMetadata
}
