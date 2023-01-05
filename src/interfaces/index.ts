import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelName: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  required: boolean;
  width: string;
}

export interface iInputStyleProps {
  width: string;
}

// interface iErrorsInput{
//     message: string,
//     ref: InputHTMLAttributes<HTMLInputElement>,
//     type: string
// }

export interface iButtonProps {
  width?: string;
  padding?: string;
  styleButton: string;
  fontSize?: string;
}

export interface iFormModal {
  email: string;
  password: string;
  confirmPass?: string;
  name?: string;
}
