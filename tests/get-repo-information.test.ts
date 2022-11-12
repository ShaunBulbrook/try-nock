import fetch from "node-fetch";

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
    const response = await getGithubEndpoints();

    expect(response).toBe(
      expect.objectContaining({ myMadeUpKey: "A made up value" })
    );
  });
});
