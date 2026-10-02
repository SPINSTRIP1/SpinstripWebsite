export function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "down" | "left" }) {
  const paths = {
    "up-right": "M7 17 17 7M7 7h10v10",
    down: "M12 5v14m-6-6 6 6 6-6",
    left: "M19 12H5m6-6-6 6 6 6",
  };
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d={paths[direction]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
