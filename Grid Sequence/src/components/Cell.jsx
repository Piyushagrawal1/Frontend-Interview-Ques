
const Cell = ({ filled, onClick }) => {
  return (
    <button
      type="button"
      disabled={filled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
};

export default Cell