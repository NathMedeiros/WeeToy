import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelName: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  required: boolean;
  width: string;
  register: UseFormRegisterReturn;
  value?: string;
  readonly?: boolean;
}
export interface iInputAnnounceProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelName: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  required: boolean;
  width: string;
  register: UseFormRegisterReturn;
}

export interface iInputStyleProps {
  width: string;
}

export interface iFormModal {
  email: string;
  password: string;
  confirmPass?: string;
  name?: string;
}

export interface iButtonProps {
  width?: string;
  padding?: string;
  styleButton: string;
  fontSize?: string;
}

export interface IToyData {
  img: string;
  marks: string;
  toy_name: string;
  category: string;
  price: number | null;
  description: string;
}

export interface iCardProductProps {
  name: string;
  price: number;
  img: string;
  id: number;
}

export interface iCardHistoryBuy {
  img: string;
  toy_name: string;
  price: number;
  id: number;
}
export interface iUserPage {
  children: React.ReactNode;
}

export interface iFormRegister {
  name: string;
  address: string;
  cep: string;
  email: string;
  birth_date: string;
  purchases_historic: iUserToys[];
  toy: iUserToys[];
}

export interface iEditProductModal {
  img: string;
  toy_name: string;
  category: string;
  price: number;
  marks: string;
  description: string;
  id: number;
}

export interface iUserToys {
  category: string;
  description: string;
  id: number;
  img: string;
  marks: string;
  price: number;
  toy_name: string;
  userId: number;
}
