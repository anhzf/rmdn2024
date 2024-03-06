import { continueRender, delayRender, staticFile } from 'remotion';

const waitFont = delayRender('Loading font...');
const font = new FontFace(
  'Mona Sans',
  `url('${staticFile('fonts/Mona-Sans.woff2')}') format ('woff2 supports variations'),
url('${staticFile('fonts/Mona-Sans.woff2')}') format ('woff2-variations')`,
  { weight: '200 900', stretch: '75% 125%' }
);

font.load()
  .then(() => {
    document.fonts.add(font);
    continueRender(waitFont);
  })
  .catch(err => console.log('Error loading font', err));