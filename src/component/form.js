export function Form() {
  return (
    <form className="form">
      <label className="cardholder-name-label">
        <div className="txt">CARDHOLDER NAME</div>
        <input
          type="text"
          className="cardholder-name-input input"
          placeholder="e.g. Jane Appleseed"
        />
      </label>
      <label className="card-number-label">
        <div className="txt">CARD NUMBER</div>
        <input type="text" className="card-number-input input" placeholder="e.g. 1234 5678 9123 0000" />
      </label>
      <div className="row">
        <label className="exp-date-label">
          <div className="txt">EXP. DATE (MM/YY)</div>
          <input type="number" className="exp-date-mm-input input" />
          <input type="number" className="exp-date-yy-input input" />
        </label>
        <label className="cvv-label">
          <div className="txt">CVV</div>
          <input type="number" className="cvv-input input" />
        </label>
      </div>
      <input type="submit" className="submit-button" value="Confirm" />
    </form>
  );
}
