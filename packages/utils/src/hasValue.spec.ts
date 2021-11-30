import { hasValue } from "./hasValue";

describe("hasValue", () => {
  describe.each([
    ["non null", true, [0, 1, "", {}]],
    ["nullish", false, [undefined, null]],
  ])("%s", (_, expected, testCases: any[]) => {
    it.each(testCases)(
      `should return ${expected} when the value is %s`,
      (t: any) => {
        const actual = hasValue(t);
        expect(actual).toBe(expected);
      }
    );
  });
});
