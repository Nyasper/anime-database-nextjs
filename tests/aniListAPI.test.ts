import { expect, test, describe } from "bun:test";
import { getAllMedia, getMediaBySearch, getMediaInfoByID, getCharacterInfoByID, getAllCharacters } from "../src/app/utils/aniListAPI";

describe("AniList API", () => {
  test("getAllMedia should return data", async () => {
    const data = await getAllMedia("ANIME" as any, 1, 5, "POPULARITY_DESC" as any);
    expect(data).toBeDefined();
    expect(data.Page).toBeDefined();
    expect(data.Page.media).toBeInstanceOf(Array);
    expect(data.Page.media.length).toBeGreaterThan(0);
    console.log(data.Page);
  });

  test("getMediaBySearch should return search results", async () => {
    const data = await getMediaBySearch("Naruto", "ANIME" as any, 1, 5);
    expect(data).toBeDefined();
    expect(data.Page).toBeDefined();
    expect(data.Page.media).toBeInstanceOf(Array);
    expect(data.Page.media.length).toBeGreaterThan(0);
  });

  test("getMediaInfoByID should return anime info", async () => {
    // 21 is One Piece
    const data = await getMediaInfoByID(21, 1);
    expect(data).toBeDefined();
    expect(data.Page).toBeDefined();
    expect(data.Page.media).toBeInstanceOf(Array);
    expect(data.Page.media.length).toBeGreaterThan(0);
    expect(data.Page.media[0].id).toBe(21);
  });

  test("getCharacterInfoByID should return character info", async () => {
    // 40 is Luffy
    const data = await getCharacterInfoByID(40);
    expect(data).toBeDefined();
    expect(data.Character).toBeDefined();
    expect(data.Character.id).toBe(40);
  });

  test("getAllCharacters should return characters", async () => {
    const data = await getAllCharacters("POPULARITY_DESC" as any);
    expect(data).toBeDefined();
    expect(data.Page).toBeDefined();
    expect(data.Page.media).toBeInstanceOf(Array);
  });
});
