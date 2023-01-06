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
          {...register}
        />
      </div>
    </InputStyle>
  );
}
