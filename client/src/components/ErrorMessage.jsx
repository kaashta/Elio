// ErrorMessage — inline error display with a warm tone

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <div className="bg-rust/10 border border-rust/30 text-rust rounded-btn px-4 py-3 text-sm">
      {message}
    </div>
  );
}
