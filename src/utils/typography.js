import Typography from 'typography';
import lawtonTheme from 'typography-theme-lawton';

lawtonTheme.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
    textDecoration: 'underline',
  },
  hr: {
    background: 'var(--hr)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  // These two are for gatsby-remark-autolink-headers:
  'a.anchor': {
    boxShadow: 'none',
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  'h1,h2,h3,h4': {
    color: 'var(--textTitle)',
  },
});
lawtonTheme.baseLineHeight = 1.75;
lawtonTheme.blockMarginBottom = 1;

const typography = new Typography(lawtonTheme);

export default typography;
export const { scale, rhythm, options } = typography;
