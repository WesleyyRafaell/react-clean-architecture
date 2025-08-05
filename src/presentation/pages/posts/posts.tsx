import {useEffect, useState} from 'react';

import { IPostList } from '@domain/contracts/post.contracts';
import { PostModel } from '@domain/models/post.model';

import { ItemPost } from './components/item-post';

type Props = {
  postListUseCase: IPostList
}

export function Post({postListUseCase}: Props) {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const result = await postListUseCase.list();
      setPosts(result);
    }

    loadPosts();
  }, [postListUseCase]);

  return posts.map((post) => (
    <ItemPost key={post.id} post={post} />
  ));
}
