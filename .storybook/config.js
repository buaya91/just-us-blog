import { configure } from '@kadira/storybook';
import '../public/index.css'

function loadStories() {
  // require('./BlogPostStories')
  // require('./PostEditorStories')
  // require('./TagGroupStories')
  // require('./HomepageStories')
  // require('./AboutUsStories')
  // require('./LoginStories')
  require('./DisqusStories')
}

configure(loadStories, module);
