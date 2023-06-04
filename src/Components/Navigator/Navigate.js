export function Navigate({ className, pageName , children}) {
  return (
    <div
      onPointerUp={() => {
        window.location.href =
          window.location.origin + "?page=" + pageName;
      }}
      className={className}
    >
      {children}
    </div>
  );
}
