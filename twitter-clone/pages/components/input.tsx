interface  InputProps {
placeholder?:string;
value?:string;
type?:string;
disabled?:boolean;
onChange: ( event:React.ChangeEvent<HTMLInputElement>) => void;

}

const input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange

    }
) => {
  return (
    <input
    disabled={disabled}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}
    className="
    w-full
    p-4
    text-lg
    bg-black
    borderd-netural-800
    rounded-md
    outline-none
    text-white
    focus:border-sky-500
    focus-border-2
    transition
    delay-100
    duration-200
    disabled:bg-neutral-900
    dsiabled:opacity-70
    disabled:cursor-not-allowed"
>

    </input>
  )
}

export default input