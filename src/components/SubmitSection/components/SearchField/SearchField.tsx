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
    <form onSubmit={handleSubmit}>
      <ReactSearchAutocomplete
        items={items}
        inputSearchString={value}
        onSearch={(query) => setValue(query)}
        onSelect={(item) => setGuess(item.title)}
        fuseOptions={{ keys: ["title"] }}
        resultStringKeyName="title"
        autoFocus
        maxResults={20}
        showClear={false}
        showNoResults={false}
      />
      <button type="submit" className="w-full rounded-3xl border-2">
        Guess!
      </button>
      <button
        type="button"
        onClick={() => checkUserGuess("")}
        className="w-full rounded-3xl border-2"
      >
        Skip
      </button>
    </form>
  );
};

export default SearchField;
