import { iInputProps } from "../../interfaces";
import { InputStyle } from "./style";

export function Input({
  id,
  placeholder,
  labelName,
  required,
  inputType,
  width,
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
        />
      </div>
    </InputStyle>
  );
}
