import { configure } from '@kadira/storybook';
import '../server/public/index.css'

function loadStories() {
  // require('./BlogPostStories')
  // require('./PostEditorStories')
  // require('./TagGroupStories')
  // require('./HomepageStories')
  // require('./AboutUsStories')
  // require('./LoginStories')
}

configure(loadStories, module);
