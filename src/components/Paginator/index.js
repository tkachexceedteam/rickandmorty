const Paginator = ({ onChange, page, totalPages }) => {
  const onPrevClick = () => {
    onChange(page - 1);
  };
  const onNextClick = () => {
    onChange(page + 1);
  };

  const onFirstClick = () => {
    onChange(1);
  };

  const onLastClick = () => {
    onChange(totalPages);
  };

  return (
    <div className="paginator">
      <button disabled={page === 1} onClick={onFirstClick}>
        First
      </button>
      <button disabled={page === 1} onClick={onPrevClick}>
        Previous
      </button>
      Page: {page}/{totalPages}
      <button disabled={page === totalPages} onClick={onNextClick}>
        Next
      </button>
      <button disabled={page === totalPages} onClick={onLastClick}>
        Last
      </button>
    </div>
  );
};

export default Paginator;
