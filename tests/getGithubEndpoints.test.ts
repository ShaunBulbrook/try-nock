import fetch from "node-fetch";
import nock from "nock";

type GithubEndpoints = {
  [key: string]: string;
};

const getGithubEndpoints = async (): Promise<GithubEndpoints> => {
  const response = await fetch("https://api.github.com/");
  const data = await response.json();

  return data;
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
