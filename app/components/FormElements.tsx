import { appendClassName } from "../utils"

type FormTitleProps = {
  title: string,
  subtitle?: string,
}

export const FormTitle = ({ title, subtitle }: FormTitleProps) => {
  return <div className="text-neutral-800">
    <p className="text-[22px] font=semibold">{title}</p>
    {subtitle && <p className="font-light">{subtitle}</p>}
  </div>
}

type FormInputProps =
  & { label: string }
  & JSX.IntrinsicElements["input"]

export const FormInput = ({ label, ...props }: FormInputProps) => {
  return <div className={appendClassName("text-neutral-800 flex flex-col gap-[5px]", props.className)}>
    <label className="font-light text-[14px]">{label}</label>
    <input {...props} className="py-[10px] px-[15px] font-light rounded-[5px] border border-neutral-300"/>
  </div>
}

type FormSelectProps =
  & { label: string }
  & JSX.IntrinsicElements["select"]

export const FormSelect = ({ label, ...props }: FormSelectProps) => {
  return <div className={appendClassName("text-neutral-800 flex flex-col gap-[5px]", props.className)}>
    <label className="font-light text-[14px]">{label}</label>
    <select {...props} className="py-[10px] px-[15px] font-light rounded-[5px] border border-neutral-300"/>
  </div>
}

type FormTextareaProps =
  & { label: string }
  & JSX.IntrinsicElements["textarea"]

export const FormTextarea = ({ label, ...props }: FormTextareaProps) => {
  return <div className={appendClassName("text-neutral-800 flex flex-col gap-[5px]", props.className)}>
    <label className="font-light text-[14px]">{label}</label>
    <textarea {...props} className="py-[10px] px-[15px] font-light rounded-[5px] border border-neutral-300"/>
  </div>
}