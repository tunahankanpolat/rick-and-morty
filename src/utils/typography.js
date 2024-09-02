import Typography from 'typography'
import defaultGithub from 'typography-theme-github'

const github = {
  ...defaultGithub,
  baseFontSize: '18px',
  headerWeight: 800,
  overrideThemeStyles: ({ rhythm }) => ({
    'h2,h3': {
      marginTop: rhythm(1.5),
    },
    'h1,h2': {
      borderBottom: 'none',
    },
    blockquote: {
      borderLeft: '6px solid #FF9800',
      background: '#FF9800 47',
      paddingTop: rhythm(1 / 2),
      paddingBottom: rhythm(1 / 2),
    },
    table: {
      marginBottom: rhythm(2),
    },
  }),
}

const typography = new Typography(github)

export default typography
