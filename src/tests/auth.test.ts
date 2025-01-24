
import { getAPIKey } from "../api/auth";
import { IncomingHttpHeaders } from "http";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {
  test("returns API key when valid authorization header is present", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey test-key-123",
    };

    expect(getAPIKey(headers)).toBe("test-key-123");
  });

  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header has invalid format", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "InvalidFormat test-key-123",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization header is missing key", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});

