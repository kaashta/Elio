// ProgressBar — animated horizontal bar showing completion percentage

export default function ProgressBar({ percent, label }) {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm text-muted-text mb-1">
          <span>{label}</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div className="h-2.5 bg-sand rounded-full overflow-hidden">
        <div
          className="h-full bg-terracotta rounded-full transition-all duration-500"
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
