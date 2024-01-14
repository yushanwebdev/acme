export default function ErrorList({
  errors,
  id,
}: {
  errors?: Array<string> | null;
  id?: string;
}) {
  return errors?.length ? (
    <ul
      className="flex flex-col gap-1"
      id={id}
      aria-live="polite"
      aria-atomic="true"
    >
      {errors.map((error, i) => (
        <li key={i} className="text-[10px] text-red-500">
          {error}
        </li>
      ))}
    </ul>
  ) : null;
}
