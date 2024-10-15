export default function FormInput({
  children,
  iconFirst,
  icon,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={children}>{children}</label>
      <div className="input">
        {iconFirst ? (
          <>
            <span>{icon}</span>
            <input type="number" value={value} onChange={onChange} />
          </>
        ) : (
          <>
            <input type="number" value={value} onChange={onChange} />
            <span>{icon}</span>
          </>
        )}
      </div>
    </>
  );
}
