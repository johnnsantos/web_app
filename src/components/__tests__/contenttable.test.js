import { render, screen } from "@testing-library/react";
import ContentTable from "../ContentTable";

describe("When everything is ok", () => {
  test("Should show content table", () => {
    render(<ContentTable />);
    const fromScreen = screen.getByText("Nome");
    expect(fromScreen).toBeInTheDocument();
  });
});
