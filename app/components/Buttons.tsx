import React from "react";
import { appendClassName, assertNever } from "../utils";
import Flag from "react-world-flags";

type ButtonProps =
  & { variant?: "default" | "neutral" | "ghost" }
  & JSX.IntrinsicElements["button"]

export const Button = ({ variant = "default", ...props }: ButtonProps) =>
  <button
    {...props}
    className={appendClassName(
      (
        variant === "default" ? "bg-blue-600 text-white" :
        variant === "neutral" ? "bg-neutral-600 text-white" :
        variant === "ghost" ? "border border-neutral-600 text-neutral-600" :
        assertNever(variant)
      ) + " px-[20px] py-[10px] font-medium rounded-[5px]",
      props.className
    )} />

type ButtonMiniProps =
  & { variant?: "default" | "warning" }
  & JSX.IntrinsicElements["button"]

export const ButtonMini = ({ variant = "default", ...props }: ButtonMiniProps) =>
  <button
    {...props}
    className={appendClassName(
      (
        variant === "default" ? "bg-blue-600" :
        variant === "warning" ? "bg-amber-600" :
        assertNever(variant)
      ) + " px-[5px] py-[3px] rounded-[3px] text-white text-[12px]",
      props.className
    )}/>


type ButtonPageProps =
  & { variant?: "default" | "active" }
  & JSX.IntrinsicElements["button"]

export const ButtonPage = ({ variant = "default", ...props }: ButtonPageProps) =>
  <button
    {...props}
    className={appendClassName(
      (
        variant === "default" ? "border border-neutral-400 text-neutral-800" :
        variant === "active" ? "bg-blue-600 text-white" :
        assertNever(variant)
      ) + " w-[35px] h-[35px] rounded-[5px] flex justify-center items-center",
      props.className
    )} />

type ButtonFlagProps =
  & { code: string, label: string, active?: boolean }
  & JSX.IntrinsicElements["button"]

export const ButtonFlag = ({ code, label, active, ...props }: ButtonFlagProps) =>
  <button
    {...props}
    className={appendClassName(
      (
        active ? "bg-amber-200 border-amber-600" :
        "border-neutral-300"
      ) + " border flex items-center gap-[10px] p-[5px] pr-[10px] rounded-[5px]",
      props.className
    )}>
      <Flag code={code} height="25" width="25"/>
      {label}
  </button>