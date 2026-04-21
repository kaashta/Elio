// LoadingSpinner — a warm, minimal spinner for loading states

export default function LoadingSpinner({ message = 'Loading…' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-muted-text">
      <div className="w-10 h-10 border-4 border-sand border-t-terracotta rounded-full animate-spin" />
      <p className="text-sm">{message}</p>
    </div>
  );
}
