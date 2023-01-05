<<<<<<< HEAD
import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes } from "react";

export interface iUserPage {
  children: React.ReactNode;
}

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelName: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  required: boolean;
  width: string;
  register: UseFormRegisterReturn;
  errors: iErrorsInput;
}

export interface iInputStyleProps {
  width: string;
}

interface iErrorsInput {
  message: string;
  ref: InputHTMLAttributes<HTMLInputElement>;
  type: string;
}

export interface iButtonProps {
  width: string;
  radius: string;
  padding: string;
  styleButton: string;
  fontSize: string;
  fontWeight: string;
=======
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

export interface iButtonProps{
    width?: string,
    padding?: string,
    styleButton: string,
    fontSize?: string
>>>>>>> 368be234b97cb58fa33642ecc1b58e8d19348a0d
}
