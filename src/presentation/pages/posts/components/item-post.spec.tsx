import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { postsListMock } from "../../../../data/mocks/post-list.mock";

import { ItemPost } from "./item-post";


function makeSut() {
  render(<ItemPost post={postsListMock()[0]} />)
}

describe("ItemPost", () =>{
  it("shoul return ItemPost with correct values", () => {
    makeSut()
    
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('body')).toBeInTheDocument();
  })
})