import Typography from 'typography'
import Alton from 'typography-theme-moraga'

const typography = new Typography(Alton)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
