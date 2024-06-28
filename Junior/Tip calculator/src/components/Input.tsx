interface InputProps {
  name: string;
  id: string;
  error?: boolean;
  handleChange: (identifier: string, newValue: string) => void;
  userInput: object;
}

export default function Input({
  name,
  id,
  error,
  handleChange,
  userInput,
}: InputProps) {
  return (
    <>
      <div>
        <div className="errorMessage">
          <p className="text">{name}</p>
          {error && <span className="error">Can't be zero</span>}
        </div>
        <input
          type="text"
          name={id}
          id={id}
          placeholder="0"
          value={userInput[id as keyof typeof userInput]}
          onChange={(event) => handleChange(id, event.target.value)}
        />
      </div>
    </>
  );
}
