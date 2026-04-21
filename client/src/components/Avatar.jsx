// Avatar — shows a profile photo or a warm initial placeholder

export default function Avatar({ photo, name, size = 'md' }) {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-24 h-24 text-4xl',
  };

  const classes = `${sizes[size]} rounded-full object-cover border-2 border-sand flex-shrink-0`;

  if (photo) {
    return (
      <img
        src={`/uploads/${photo}`}
        alt={name || 'User'}
        className={classes + ' object-cover'}
      />
    );
  }

  return (
    <div className={`${classes} bg-sand flex items-center justify-center font-semibold text-warm-brown`}>
      {name?.[0]?.toUpperCase() || '?'}
    </div>
  );
}
