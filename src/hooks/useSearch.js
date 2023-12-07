'use client'

import { useEffect, useState, useRef } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [errors, setErrors] = useState(null);
  const isFirtsInput = useRef(true);

  useEffect(() => {
    if (isFirtsInput.current) {//<- true
      isFirtsInput.current = search === ""; //en la segunda vuelta, no entra a este if porque isFirtsInput.current ya no es true, es un null o false (por ser booleano su valor inicial) debido a el ""
      //to avoid searching the same string twice
      return;
    }

    if (!search) {
      setErrors("Empty field");
      return;
    }

    if (search.match(/^\d+?/)) {
      setErrors("Only words");
      return;
    }
    if (search.length < 3) {
      setErrors("query must have at least 3 words");
      return;
    }
    setErrors(null);
  }, [search]);

  return { search, errors, updateSearch };
}
