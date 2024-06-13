"use client";

import { useGameContext } from "@/context/gameProvider";
import { searchService } from "@/services/search";
import { SearchPaintingResponse } from "@/services/search/search.types";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

type Item = {
  id: number;
  title: string;
};

const SearchField = () => {
  const [value, setValue] = useState("");
  const [guess, setGuess] = useState("");
  const [items, setItems] = useState<SearchPaintingResponse>([]);
  const { checkUserGuess } = useGameContext();

  useEffect(() => {
    setGuess(value);
    const getAutocompleteResults = async (query: string) => {
      if (query !== "") {
        const res = await searchService.searchPaintings(query);
        setItems(res);
      }
    };
    getAutocompleteResults(value);
  }, [value]);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    checkUserGuess(guess);
    setValue("");
  };

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-4 px-10"
      onSubmit={handleSubmit}
    >
      <ReactSearchAutocomplete
        items={items}
        inputSearchString={value}
        onSearch={(query) => setValue(query)}
        onSelect={(item) => setGuess(item.title)}
        fuseOptions={{ keys: ["title"] }}
        resultStringKeyName="title"
        autoFocus
        maxResults={5}
        showClear={false}
        showNoResults={false}
        placeholder="Make a guess"
        className="w-full transition"
        styling={{
          height: "44px",
          border: "1px solid #73664fb8",
          borderRadius: "8px",
          backgroundColor: "#f3f2ea",
          color: "#73664f",
          iconColor: "#73664fb8",
          lineColor: "#73664fb8",
          hoverBackgroundColor: "#73664f64",
          placeholderColor: "#73664f64",
        }}
      />
      <div className="flex w-full flex-col items-center justify-center gap-2 mobile:flex-row">
        <button
          type="submit"
          className="h-10 w-full rounded-lg border-2 border-brown-light bg-brown-light font-fairplay text-lg font-semibold text-background-light shadow-lg transition mobile:basis-2/3"
        >
          Guess!
        </button>
        <button
          type="button"
          onClick={() => checkUserGuess("")}
          className="h-10 w-full rounded-lg border-2 border-brown-light bg-background-dark font-fairplay text-lg text-black shadow-lg mobile:basis-1/3"
        >
          Skip
        </button>
      </div>
    </form>
  );
};

export default SearchField;
