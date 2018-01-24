import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.overrideThemeStyles = ({rhytm}, options) => ({
  "h1": {
    letterSpacing: "-1px"
  },
})

kirkhamTheme.bodyWeight = '300'

kirkhamTheme.googleFonts = [
  {
    name: 'Playfair Display',
    styles: ['700']
  },
  {
    name: 'Fira Sans',
    styles: [
      '300',
      '400',
      '400i',
    ]
  }
]


const typography = new Typography(kirkhamTheme);

export default typography;
