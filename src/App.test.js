import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Program 20 - Nested Blog Routes", () => {
  test("displays the Home page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /home page/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /visit blog/i })
    ).toBeInTheDocument();
  });

  test("navigates to the parent Blog route", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: /visit blog/i }));

    expect(
      screen.getByRole("heading", { name: /blog posts/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /post 1: web development/i })
    ).toBeInTheDocument();
  });

  test("displays the first nested blog post", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: /visit blog/i }));
    await user.click(
      screen.getByRole("link", { name: /post 1: web development/i })
    );

    expect(
      screen.getByRole("heading", { name: /web development/i })
    ).toBeInTheDocument();
  });

  test("displays the second nested blog post", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: /visit blog/i }));
    await user.click(
      screen.getByRole("link", { name: /post 2: learning react/i })
    );

    expect(
      screen.getByRole("heading", { name: /learning react/i })
    ).toBeInTheDocument();
  });

  test("displays the third nested blog post", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: /visit blog/i }));
    await user.click(
      screen.getByRole("link", { name: /post 3: career skills/i })
    );

    expect(
      screen.getByRole("heading", { name: /career skills/i })
    ).toBeInTheDocument();
  });

  test("displays the shared Blog layout on a nested route", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("link", { name: /visit blog/i }));
    await user.click(
      screen.getByRole("link", { name: /post 2: learning react/i })
    );

    expect(
      screen.getByRole("heading", { name: /my blog website/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /^home$/i })
    ).toBeInTheDocument();
  });
});
