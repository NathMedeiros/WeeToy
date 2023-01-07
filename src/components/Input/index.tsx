import { iInputProps } from "../../interfaces";
import { InputStyle } from "./style";

export function Input({
  id,
  placeholder,
  labelName,
  required,
  inputType,
  width,
  register,
  value,
}: iInputProps) {
  return (
    <InputStyle width={width}>
      <div>
        <label htmlFor={id}>{labelName}</label>
        <input
          id={id}
          type={inputType}
          required={required}
          placeholder={placeholder}
          defaultValue={value}
          {...register}
        />
      </div>
    </InputStyle>
  );
}
