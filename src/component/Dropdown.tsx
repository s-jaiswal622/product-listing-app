import '../App.css';


interface DropdownOption<T = string> {
  label: string;
  value: T;
}

interface DropdownProps<T = string> {
  label?: string;
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
  className?: string;
}

function Dropdown<T extends string | number>({
  label,
  value,
  options,
  onChange,
  className
}: DropdownProps<T>) {
  return (
    <div className={`dropdown ${className ?? ''}`}>
      {label && <label className="dropdown-label">{label}</label>}
      <select
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((opt) => (
          <option key={String(opt.value)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
