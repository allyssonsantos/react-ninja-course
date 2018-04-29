import { configure } from '@kadira/storybook';
import '../src/css/style.css';

const req = require.context('../src/components', true, /\.story\.jsx?$/);

function loadStories () {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
