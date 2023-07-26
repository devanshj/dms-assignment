import React from "react"
import * as Icon from "@iconscout/react-unicons"

type InfoBoxProps = {
  icon: React.ReactNode,
  label: string,
  value: string
}

export const InfoBox = ({ icon, label, value }: InfoBoxProps) => {
  return <div className="flex gap-[10px] p-[20px] bg-white rounded-[10px]">
    {icon}
    <div>
      <div className="text-[12px] font-light">{label}</div>
      <div className="text-[22px] font-semibold">{value}</div>
    </div>
  </div>
}

type AlertBoxProps = {
  message: string
}

export const AlertBox = ({ message }: AlertBoxProps) => {
  return <div className="flex gap-[10px] p-[15px] bg-red-50 border border-red-400 text-red-900 rounded-[5px]">
    <Icon.UilInfoCircle />
    <div>{message}</div>
  </div>
}