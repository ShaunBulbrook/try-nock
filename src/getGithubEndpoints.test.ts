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
