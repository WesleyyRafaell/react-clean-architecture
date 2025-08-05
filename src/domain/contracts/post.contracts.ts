import { PostModel } from "@domain/models/post.model";

export interface IPostList {
  list(): Promise<PostModel[]>;
}