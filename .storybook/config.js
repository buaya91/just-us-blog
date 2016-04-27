import { configure } from '@kadira/storybook';
import '../public/index.css'

function loadStories() {
  require('./BlogPostStories')
  require('./PostEditorStories')
  require('./TagGroupStories')
  require('./DirectoryStories')
  require('./HomepageStories')
  require('./LoginFormStories')
}

configure(loadStories, module);
