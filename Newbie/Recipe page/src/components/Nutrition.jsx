function Nutrition() {
  return (
    <div className="nutrition">
      <h2>Nutrition</h2>
      <p className="text">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          <tr className="table-row table-row-border">
            <td>Calories</td>
            <td className="nutrition-values">277kcal</td>
          </tr>
          <tr className="table-row table-row-border">
            <td>Carbs</td>
            <td className="nutrition-values">0g</td>
          </tr>
          <tr className="table-row table-row-border">
            <td>Protein</td>
            <td className="nutrition-values">20g</td>
          </tr>
          <tr className="table-row">
            <td>Fat</td>
            <td className="nutrition-values">22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Nutrition;
