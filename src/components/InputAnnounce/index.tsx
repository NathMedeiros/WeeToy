import { iInputProps } from "../../interfaces";
import { InputAnnounceStyle } from "./style";

export function InputAnnounce({
  id,
  placeholder,
  labelName,
  required,
  inputType,
  width,
}: iInputProps) {
  return (
    <InputAnnounceStyle width={width}>
      <div>
        <label htmlFor={id}>{labelName}</label>
        <input
          id={id}
          type={inputType}
          required={required}
          placeholder={placeholder}
        />
      </div>
    </InputAnnounceStyle>
  );
}
