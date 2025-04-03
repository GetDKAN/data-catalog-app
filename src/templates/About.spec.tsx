import "@vitest/browser/matchers.d.ts";
import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import About from './About';

test("renders About page", async() => {
  const { getByText, getByRole } = render(
    <MemoryRouter initialEntries={["/about"]}>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );

  await expect.element(getByRole("heading", { name: "About this site", level: 1})).toBeInTheDocument();
  await expect.element(getByRole("heading", { name: "App version:", level: 2})).toBeInTheDocument();
  await expect.element(getByText("data-catalog-app: 2.0.0-alpha.1")).toBeInTheDocument();
  await expect.element(getByText("data-catalog-components: 2.0.0-alpha.13")).toBeInTheDocument();
});

test("snapshot matches", () => {
  const screen = render(
    <MemoryRouter initialEntries={["/about"]}>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen).toMatchSnapshot();
});
