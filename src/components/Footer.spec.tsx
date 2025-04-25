import "@vitest/browser/matchers.d.ts";
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";


test("renders Footer", async () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
        <Footer />
    </MemoryRouter>
  );
  await expect.element(getByRole("heading", {level: 2, name: "Open Source Open Data"})).toBeInTheDocument();
  await expect.element(getByText("Powered by DKAN")).toBeInTheDocument();
  await expect.element(getByRole("link", { name: "GetDKAN Github repo" })).toBeInTheDocument();
});

test("snapshot matches", () => {
  const screen = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  expect(screen).toMatchSnapshot();
});
