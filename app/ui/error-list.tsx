import { FieldError } from 'react-hook-form';

export default function ErrorList({
  errors,
  id,
}: {
  errors?: FieldError | null;
  id?: string;
}) {
  return errors?.message ? (
    <ul
      className="flex flex-col gap-1"
      id={id}
      aria-live="polite"
      aria-atomic="true"
    >
      <li className="text-[10px] text-red-500">{errors.message}</li>
    </ul>
  ) : null;
}
