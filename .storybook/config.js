import { configure } from '@kadira/storybook';
import '../public/index.css'

function loadStories() {
  require('./BlogPostStories')
  require('./PostEditorStories')
  require('./TagGroupStories')
  require('./DirectoryStories')
}

configure(loadStories, module);
