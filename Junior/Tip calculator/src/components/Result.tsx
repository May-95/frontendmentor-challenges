export default function Result({
  result,
  title,
}: {
  result: string;
  title: string;
}) {
  return (
    <>
      <div className="result">
        <div className="resultType">
          <p className="resultTitle">{title}</p>
          <p className="person"> / person</p>
        </div>
        <div className="result">
          <p>${result == "NaN" ? "0.00" : result}</p>
        </div>
      </div>
    </>
  );
}
