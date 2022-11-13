import nock from "nock";
import { getGithubEndpoints } from "./getGithubEndpoints";

export type GithubEndpoints = {
  [key: string]: string;
};

describe("get github api information", () => {
  test("returns list of github endpoints", async () => {
    nock("https://api.github.com/")
      .get("/")
      .reply(200, { myMadeUpKey: "A made up value" });

    const response = await getGithubEndpoints();

    expect(response).toEqual(
      expect.objectContaining({ myMadeUpKey: "A made up value" })
    );
  });
});

describe("nock - persist", () => {
  beforeAll(() => {
    nock("https://api.github.com/")
      .persist()
      .get("/")
      .reply(200, { myMadeUpPersistedKey: "A made up persisted value" });
  });

  test("returns a list of endpoints 1", async () => {
    const response = await getGithubEndpoints();
    expect(response).toEqual(
      expect.objectContaining({
        myMadeUpPersistedKey: "A made up persisted value",
      })
    );
  });

  test("returns a list of endpoints 2", async () => {
    const response = await getGithubEndpoints();
    expect(response).toEqual(
      expect.objectContaining({
        myMadeUpPersistedKey: "A made up persisted value",
      })
    );
  });
});
