export const applyBoldStyle = (input: string) => {
  const parts = input.split("**");

  return parts.map((part, index) => {
    return index % 2 === 0 ? (
      <span key={index}>{part}</span>
    ) : (
      <span key={index} style={{ fontWeight: "bold" }}>
        {part}
      </span>
    );
  });
};
