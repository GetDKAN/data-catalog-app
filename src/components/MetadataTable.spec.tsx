import "@vitest/browser/matchers.d.ts";
import { vi, test, expect } from "vitest";
import { MetadataWrapper, simpleMetadata } from "../../__mocks__/MetadataWrapper";
import MetadataTable from "./MetadataTable";
import { render } from 'vitest-browser-react';

vi.mock('MetadataWrapper');

test("renders", async() => {
  const { getByRole, getByText } = render(
    <MetadataWrapper testValue={{metadata: simpleMetadata}}>
      <MetadataTable />
    </MetadataWrapper>
  );
  await expect.element(getByRole("heading", {name: "Additional Information", level: 2})).toBeInTheDocument();
  await expect.element(getByText("John Doe")).toBeInTheDocument();
});

test("snapshot matches", () => {
  const screen = render(
    <MetadataWrapper testValue={{metadata: simpleMetadata}}>
      <MetadataTable />
    </MetadataWrapper>
  );
  expect(screen).toMatchSnapshot();
});
