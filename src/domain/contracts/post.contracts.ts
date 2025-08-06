import { PostModel } from "@domain/models/post.model";

export interface IPostList {
  list(): Promise<PostModel[]>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IPostList {
  export type Model = PostModel[];
}