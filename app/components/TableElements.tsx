import { ButtonMini, ButtonPage } from "."
import * as Icon from "@iconscout/react-unicons"

type FormTableProps = {
  data: [string, string, string][]
}

export const FormTable = ({ data }: FormTableProps) => {
  return <table className="rounded-[5px] overflow-hidden">
    <thead>
      <tr className="text-left bg-neutral-300 font-semibold">
        <th className="px-[20px] py-[10px]">Table Title</th>
        <th className="px-[20px] py-[10px]">Table Title</th>
        <th className="px-[20px] py-[10px]">Table Title</th>
        <th className="px-[20px] py-[10px]">Table Title</th>
      </tr>
    </thead>
    <tbody className="text-neutral-800">
      {data.map(([a, b, c]) => 
        <tr className="even:bg-neutral-100">
          <td className="px-[20px] py-[10px]">{a}</td>
          <td className="px-[20px] py-[10px]">{b}</td>
          <td className="px-[20px] py-[10px]">{c}</td>
          <td className="px-[20px] py-[10px] flex gap-[10px]">
            <ButtonMini variant="default" className="flex gap-[3px] items-center">
              <Icon.UilSave size="18"/>
              <div>Save</div>
            </ButtonMini>
            <ButtonMini variant="warning" className="flex gap-[3px] items-center">
              <Icon.UilTrash size="18"/>
              <div>Delete</div>
            </ButtonMini>
          </td>
        </tr>
      )}
    </tbody>
  </table>
}

type PaginationProps = {
  total: number,
  current: number
}

export const Pagination = ({ total, current }: PaginationProps) =>
  <div className="flex gap-[5px] items-center self-center">
    <button className={current === 0 ? "opacity-40" : "opacity-100"}>
      <Icon.UilAngleDoubleLeft size="18"/>
    </button>
    {Array.from({ length: total }, (_, i) =>
      <ButtonPage variant={i === current ? "active" : "default"} key={i+1}>{i+1}</ButtonPage>
    )}
    <button className={current === total-1 ? "opacity-40" : "opacity-100"}>
      <Icon.UilAngleDoubleRight size="18"/>
    </button>
  </div>