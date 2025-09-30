import { describe, expect, it } from "vitest";


import { PostModel, PostModelAPI } from "@domain/models/post.model";
import { HttpResponse, IHttpClient } from "@infra/contracts/http-client";

import { PostListUseCase } from "./post-list-usecase";



export function postsListAPIMock(): PostModelAPI[] {
  return [
    {
      id: '1',
      title_post: 'Create a login form using formik in react js',
      body_post:
        'Todays article will demonstrate how to develop a login form in react js using formik.',
    },
    {
      id: '2',
      title_post: 'How to parse or read CSV files in ReactJS',
      body_post:
        'In this article, I will teach you how to parse or read CSV files in ReactJS in the simplest way possible. ',
    },
  ];
}

class AxiosHttpClientInMemory implements IHttpClient {
  method?: string
  url?: string
  response: HttpResponse = {data: ''}

  async request(params: IHttpClient.Params): Promise<HttpResponse<PostModelAPI[]>> {
    this.method = params.method
    this.url = params.url

    return await Promise.resolve(this.response)
  }
}

type sutParam = {
  axiosHttpClientInMemory?: AxiosHttpClientInMemory
}

function makeSut({axiosHttpClientInMemory = new AxiosHttpClientInMemory()}: sutParam = {}) {
  const sut = new PostListUseCase(axiosHttpClientInMemory)
  return {sut, axiosHttpClientInMemory}
}

describe("ItemPost", () =>{
  it("shoul return method list with correct method and url", async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory()
    axiosHttpClientInMemory.response = {data: postsListAPIMock()}

    const {sut} = makeSut({axiosHttpClientInMemory})
    
    await sut.list();

    expect(axiosHttpClientInMemory.method).toBe('get')
    expect(axiosHttpClientInMemory.url).toBe('http://localhost:3333/posts')
  })

  it("shoul return method list with correct data", async () => {
    const axiosHttpClientInMemory = new AxiosHttpClientInMemory()

    const postsListAPI = postsListAPIMock()
    axiosHttpClientInMemory.response = {data: postsListAPI}

    const {sut} = makeSut({axiosHttpClientInMemory})
    
    const data = await sut.list();

    expect(data[0]).toEqual({
      id: postsListAPI[0].id,
      title: postsListAPI[0].title_post,
      body: postsListAPI[0].body_post,
    } as PostModel)

    expect(data[1]).toEqual({
      id: postsListAPI[1].id,
      title: postsListAPI[1].title_post,
      body: postsListAPI[1].body_post,
    } as PostModel)
  })
})