import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";


import { PostListUseCaseInMemory } from "@data/useCases/PostListUseCase/post-list-usecase-mock";


import { Post } from "./posts";



function makeSut() {
  const postListUseCase = new PostListUseCaseInMemory
  render(<Post postListUseCase={postListUseCase} />)
}

describe("ItemPost", () =>{
  it("shoul return Posts with corrects length", async () => {
    makeSut()

    await waitFor(() => screen.getByText('title'))
    
    expect(screen.getAllByTestId('post').length).toEqual(2);
  })
})