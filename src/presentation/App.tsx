import { PostListUseCase } from '@data/useCases/PostListUseCase/post-list-usecase';

import { Post } from './pages';

function App() {
  const postListUseCase = new PostListUseCase();

  return <Post postListUseCase={postListUseCase} />
}

export default App;
