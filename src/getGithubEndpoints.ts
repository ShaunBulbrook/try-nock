import fetch from "node-fetch";
import { GithubEndpoints } from "./getGithubEndpoints.test";

export async function getGithubEndpoints(): Promise<GithubEndpoints> {
  const response = await fetch("https://api.github.com/");
  const data = await response.json();
  return data;
}
