function Tag({ text, filters, onChange }) {
  const isSelected = filters.includes(text);

  return (
    <>
      <label
        htmlFor={`tag-${text}`}
        className={`${
          isSelected ? "bg-purple-800 hover:bg-purple-900" : ""
        } px-3 py-1 rounded-full text-sm transition-all bg-gray-800 text-gray-300 hover:bg-gray-700`}
      >
        {text}
      </label>
      <input
        type="checkbox"
        id={`tag-${text}`}
        className="hidden"
        value={text}
        onChange={onChange}
      />
    </>
  );
}

export default Tag;
