import { PostModel } from "@domain/models/post.model";


export function postsListMock(): PostModel[] {
  return [
    {
      id: '1',
      title: "title",
      body: "body"
    },
    {
      id: '2',
      title: "title2",
      body: "body2"
    }
  ]
}