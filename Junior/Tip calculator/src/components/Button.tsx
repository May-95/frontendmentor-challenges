export default function Button({
  tip,
  selected,
  handleChange,
}: {
  tip: string;
  selected: (id?: string) => void;
  handleChange: (identifier: string, newValue: string) => void;
}) {
  const tag = "button";
  return (
    <>
      <p
        id={tip}
        className={tag}
        onClick={() => {
          handleChange("tip", tip);
          selected(tip);
        }}>
        {tip}%
      </p>
    </>
  );
}
