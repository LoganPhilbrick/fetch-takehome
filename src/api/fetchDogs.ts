import { Dispatch, SetStateAction } from "react";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export async function fetchDogs(
  pageLink: string,
  selectedBreed: string,
  sort: string,
  setNext: Dispatch<SetStateAction<string>>,
  setPrev: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setDogsArray: Dispatch<SetStateAction<Dog[]>>
): Promise<boolean> {
  const baseUrl = `https://frontend-take-home-service.fetch.com${pageLink}`.split("&breeds")[0];

  const params = new URLSearchParams();
  if (selectedBreed) params.set("breeds", selectedBreed);
  if (sort) params.set("sort", sort);

  const separator = baseUrl.includes("?") ? "&" : "?";
  const url = params.toString() ? `${baseUrl}${separator}${params.toString()}` : baseUrl;

  console.log("Generated URL:", url);
  console.log("pageLink:", pageLink);

  try {
    setLoading(true);
    const dogIds = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!dogIds.ok) {
      if (dogIds.status === 401) return false;
      throw new Error(`Failed to fetch: ${dogIds.status}`);
    }

    const searchObj = await dogIds.json();
    setNext(searchObj.next);
    setPrev(searchObj.prev);

    if (searchObj.resultIds.length > 0) {
      const arrOfDogs = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchObj.resultIds),
        credentials: "include",
      });

      if (!arrOfDogs.ok) {
        if (arrOfDogs.status === 401) return false;
        throw new Error(`Failed to fetch: ${arrOfDogs.status}`);
      }

      setDogsArray(await arrOfDogs.json());
      setLoading(false);
    } else {
      setDogsArray([]);
    }

    return true; // Success
  } catch (error) {
    console.error("Failed to fetch IDs:", error);
    return false;
  }
}
