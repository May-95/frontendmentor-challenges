import Button from "./Button";

export default function Tip({
  handleChange,
  selected,
}: {
  handleChange: (identifier: string, newValue: string) => void;
  selected: (id?: string) => void;
}) {
  const tips = ["5", "10", "15", "25", "50"];

  return (
    <>
      <div>
        <p className="text">Select Tip %</p>
        <div className="buttonContainer">
          {tips.map((tip, index) => (
            <Button
              tip={tip}
              key={index}
              handleChange={handleChange}
              selected={selected}
            />
          ))}
          <input
            type="text"
            className="button"
            id="custom"
            placeholder="Custom"
            onChange={(event) => {
              handleChange("tip", event.target.value), selected("custom");
            }}
          />
        </div>
      </div>
    </>
  );
}
