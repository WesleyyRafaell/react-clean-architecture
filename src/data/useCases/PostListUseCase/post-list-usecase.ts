import { IPostList } from "@domain/contracts/post.contracts";
import { PostModel, PostModelAPI } from "@domain/models/post.model";
import { IHttpClient } from "@infra/contracts/http-client";

import { postListAdapter } from "./post-list-adapter";

export class PostListUseCase implements IPostList {
  constructor(private readonly httpClient: IHttpClient<PostModelAPI[]>) {}

  async list(): Promise<PostModel[]> {
    const {data} = await this.httpClient.request({
      method: 'get',
      url: 'http://localhost:3333/posts'
    });

    return data?.map(postListAdapter.toPostModel) 
  }
}