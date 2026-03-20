import { describe, expect, test } from "vitest";
import { add, subtract } from "./math.helper";

describe("math helper functions", () => {
  test("should add two numbers correctly", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  test("should subtract two numbers correctly", () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
  });
});


