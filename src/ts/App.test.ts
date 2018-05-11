import { t } from "./App";

describe("App", () => {
  it("t", () => {
    expect(t("Jest")).toBe("Jest");
  });
  it('t("")', () => {
    expect(t("")).toBe("hello, world!");
  });
});
