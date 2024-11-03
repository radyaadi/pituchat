export default function CheckBox({
  name,
  type,
}: {
  name: string;
  type: string;
}) {
  return (
    <div className="flex items-center gap-x-2 bg-white p-3">
      <input
        type="checkbox"
        id={name}
        className="size-3 appearance-none bg-white ring-2 ring-[#4D4D4D] checked:appearance-auto checked:border-transparent"
      />
      <label
        htmlFor={name}
        className="ml-2 text-[.825rem] font-medium text-gray-700"
      >
        {name} - {type}
      </label>
    </div>
  );
}
