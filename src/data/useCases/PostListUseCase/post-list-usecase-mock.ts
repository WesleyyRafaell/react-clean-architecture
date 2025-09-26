import { postsListMock } from "@data/mocks/post-list.mock";
import { IPostList } from "@domain/contracts/post.contracts";

export class PostListUseCaseInMemory implements IPostList {
  async list(): Promise<IPostList.Model> {
    return await Promise.resolve(postsListMock())
  }
}
