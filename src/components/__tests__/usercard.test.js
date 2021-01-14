import UserList from "../UserList";
import { render, screen } from "@testing-library/react";

describe("When user enters the specific user page", () => {
  test("Should show the user data", async () => {
    render(
      <UserList
        user={{
          id: 1,
          name: "test",
          username: "testing",
          age: 19,
          email: "Sincere@april.biz",
        }}
      />
    );
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(6);
    expect(list).toBeTruthy();
  });
});
