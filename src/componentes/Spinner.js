import "../styles/spinner.css";

const Spinner = () => {
  return (
    <div className="spinnerTotal">
      <div className="spinner">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
