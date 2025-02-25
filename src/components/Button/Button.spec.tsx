import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  const buttonText = "ボタン";
  let buttonNode: HTMLButtonElement;

  beforeEach(() => {
    render(<Button>{buttonText}</Button>);
    buttonNode = screen.getByRole("button");
  });

  it("ボタンテキストが存在しているかチェック", () => {
    expect(buttonNode).toHaveTextContent(buttonText);
  });
});
