function Label({ text }) {
  return (
    <span className="px-2 py-1 bg-gray-900/80 backdrop-blur-sm text-xs rounded-full border border-purple-500/30 shadow-lg animate-delay">
      {text}
    </span>
  );
}

export default Label;
