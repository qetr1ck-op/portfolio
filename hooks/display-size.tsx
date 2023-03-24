import { useEffect, useLayoutEffect, useReducer, useState } from "react";

type ScreenValues = "xs" | "sm" | "md" | "lg" | "xl";
type Actions = {
  type: "set";
  payload: ScreenValues;
};
type ScreenState = {
  [key in ScreenValues]: boolean;
};

export function useDisplaySize(
  breakPoints = { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280 }
) {
  const [display, setDisplay] = useState<ScreenValues | null>(null);

  useLayoutEffect(() => {
    const xsQuery = window.matchMedia(`(max-width: ${480}px)`);
    const smQuery = window.matchMedia(
      `(min-width: ${480}px) and (max-width: ${640}px)`
    );
    const mdQuery = window.matchMedia(
      `(min-width: ${640}px) and (max-width: ${748}px)`
    );
    const lgQuery = window.matchMedia(
      `(min-width: ${748}px) and (max-width: ${1024}px)`
    );
    const xlQuery = window.matchMedia(`(min-width: ${1024}px)`);

    const allStates: { type: ScreenValues; value: boolean }[] = [
      { type: "xs", value: xsQuery.matches },
      { type: "sm", value: smQuery.matches },
      { type: "md", value: mdQuery.matches },
      { type: "lg", value: lgQuery.matches },
      { type: "xl", value: xlQuery.matches },
    ];

    const state = allStates.find(({ value }) => value);

    if (state?.type) {
      setDisplay(state.type);
    }

    const handleXsQuery = (event: MediaQueryListEvent) =>
      event.matches && setDisplay("xs");
    const handleSmQuery = (event: MediaQueryListEvent) =>
      event.matches && setDisplay("sm");
    const handleMdQuery = (event: MediaQueryListEvent) =>
      event.matches && setDisplay("md");
    const handleLgQuery = (event: MediaQueryListEvent) =>
      event.matches && setDisplay("lg");
    const handleXlQuery = (event: MediaQueryListEvent) =>
      event.matches && setDisplay("xl");

    // Add the callback function as a listener for changes to the media query
    xsQuery.addEventListener("change", handleXsQuery);
    smQuery.addEventListener("change", handleSmQuery);
    mdQuery.addEventListener("change", handleMdQuery);
    lgQuery.addEventListener("change", handleLgQuery);
    xlQuery.addEventListener("change", handleXlQuery);

    // Remove the listener when the component is unmounted
    return () => {
      xsQuery.removeEventListener("change", handleXsQuery);
      smQuery.removeEventListener("change", handleSmQuery);
      mdQuery.removeEventListener("change", handleMdQuery);
      lgQuery.removeEventListener("change", handleLgQuery);
      xlQuery.removeEventListener("change", handleXlQuery);
    };
  }, []);

  return display;
}
