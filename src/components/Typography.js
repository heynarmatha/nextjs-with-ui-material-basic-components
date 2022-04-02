import { Typography } from "@mui/material"

const MultiTypography = () => {
  return (
    <div>
        <Typography variant ="h1">Heading</Typography>
        <Typography variant ="h2">Heading</Typography>
        <Typography variant ="h3">Heading</Typography>
        <Typography variant ="h4">Heading</Typography>
        <Typography variant ="h5" component="h1">Heading component style are h5 but component name is h1 let see in element</Typography>
        <Typography variant ="h6" gutterBottom>Heading gutterBottom margin bottom</Typography>

        <Typography variant ="subtitle1">subtitle 1</Typography>
        <Typography variant ="subtitle2">subtitle 2</Typography>

        <Typography >body1</Typography> 
        {/* default body 1 */}
        <Typography variant ="body2">body1</Typography>
    </div>
  )
}

export default MultiTypography
