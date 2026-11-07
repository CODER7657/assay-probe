import { test } from "node:test";
import assert from "node:assert/strict";
import { FLOOR, promoted } from "../src/gate.js";

test("a score at the floor is promoted", () => {
  assert.equal(promoted(FLOOR), true);
});

test("a score below the floor is not", () => {
  assert.equal(promoted(FLOOR - 1), false);
});
