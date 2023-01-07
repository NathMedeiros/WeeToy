import { iInputAnnounceProps } from "../../interfaces";
import { InputAnnounceStyle } from "./style";

export function InputAnnounce({
  id,
  placeholder,
  labelName,
  required,
  inputType,
  width,
  register,
}: iInputAnnounceProps) {
  return (
    <InputAnnounceStyle width={width}>
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
    </InputAnnounceStyle>
  );
}
