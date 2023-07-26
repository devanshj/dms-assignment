import * as Icon from "@iconscout/react-unicons"
import { AlertBox, Button, ButtonFlag, FormInput, FormSelect, FormTextarea, FormTitle, InfoBox } from "../components"
import { FormTable, Pagination } from "../components/TableElements"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard"
}

export default function Dashboard() {
  return <div className="bg-neutral-100">
    <DashboardTop/>
    <div className="flex">
      <DashboardLeft/>
      <div className="flex-1">
        <div className="flex justify-between px-[30px] py-[16px] bg-white">
          <div className="flex gap-[30px] items-center text-neutral-800">
            <div className="text-[22px] font-semibold">Add new post</div>
            <div className="flex gap-[25px]">
              <div className="flex gap-[5px]">
                <Icon.UilPlus size="24"/>
                <div>Add Content</div>
              </div>
              <div className="flex gap-[5px]">
                <Icon.UilCog size="24"/>
                <div>Settings</div>
              </div>
            </div>
          </div>
          <div className="flex w-[350px] p-[10px] border border-neutral-300 rounded-[5px]">
            <input className="flex-1" type="text" placeholder="Search Content..."/>
            <Icon.UilSearch/>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] p-[30px]">
          <div className="flex gap-[20px]">
            <div className="flex-1">
              <InfoBox
                icon={<div className="text-orange-600"><Icon.UilShoppingBag size="45"/></div>}
                label="Total Sales"
                value="$2,456"/>
            </div>
            <div className="flex-1">
              <InfoBox
                icon={<div className="text-violet-600"><Icon.UilShop size="45"/></div>}
                label="Total Expenses"
                value="$3,326"/>
            </div>
            <div className="flex-1">
              <InfoBox
                icon={<div className="text-emerald-600"><Icon.UilUsersAlt size="45"/></div>}
                label="Total Visitors"
                value="$5,325"/>
            </div>
            <div className="flex-1">
              <InfoBox
                icon={<div className="text-purple-600"><Icon.UilListUiAlt size="45"/></div>}
                label="Total Orders"
                value="$1,326"/>
            </div>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col gap-[20px] p-[30px]">
            <FormTitle title="Form Title" subtitle="Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim."/>
            <AlertBox message="Senectus malesuada suspendisse bibendum elit amet vitae."/>
            <FormTable data={[
              ["Etiam purus in", "Curabitur donec duis", "Morbi pharetra, accumsan"],
              ["Duis eget habitant", "At amet odio", "Commodo eget scelerisque"],
              ["Aliquam velit lacus", "Pellentesque egestas placerat", "Tortor habitant sit"]
            ]} />
            <Pagination total={5} current={1} />
          </div>
          <div className="bg-white rounded-[10px] flex flex-col gap-[20px] p-[30px]">
            <FormTitle title="Form Title" subtitle="Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim."/>
            <div className="flex gap-[10px]">
              <ButtonFlag code="gb" label="English" active/>
              <ButtonFlag code="tr" label="Turkish" />
            </div>
            <FormInput label="Label Title" placeholder="Placeholder Content"/>
            <div className="flex gap-[20px]">
              <FormSelect label="Label Title" className="flex-1">
                <option>Choose</option>
              </FormSelect>
              <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
              <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
            </div>
            <div className="flex gap-[20px]">
              <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
              <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
            </div>
            <FormTextarea label="Label Title" placeholder="Placeholder Content" rows={4}/>
          </div>
          <div className="flex gap-[30px]">
            <div className="flex-1 bg-white rounded-[10px] flex flex-col gap-[20px] p-[30px]">
              <FormTitle title="Form Title" subtitle="Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim."/>
              <FormInput label="Label Title" placeholder="Placeholder Content"/>
              <div className="flex gap-[20px]">
                <FormSelect label="Label Title" className="flex-1">
                  <option>Choose</option>
                </FormSelect>
                <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
                <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
              </div>
              <div className="flex gap-[20px]">
                <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
                <FormInput label="Label Title" placeholder="Placeholder Content" className="flex-1"/>
              </div>
              <FormTextarea label="Label Title" placeholder="Placeholder Content" rows={4}/>
            </div>
            <div className="w-[310px] bg-white rounded-[10px] flex flex-col gap-[20px] p-[30px]">
              <FormTitle title="Form Title"/>
              <FormInput label="Label Title" placeholder="Placeholder Content"/>
              <FormSelect label="Label Title">
                <option>Choose</option>
              </FormSelect>
              <FormTextarea label="Label Title" placeholder="Placeholder Content" rows={4}/>
              <Button>Button Title</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const DashboardTop = () => {
  return <div className="flex justify-between bg-neutral-900 px-[30px] py-[10px]">
    <div className="flex text-white gap-[25px]">
      <div className="flex items-center gap-[5px]">
        <Icon.UilHome size="18"/>
        <div className="text-[14px]">Home</div>
      </div>
      <div className="flex items-center gap-[5px]">
        <Icon.UilListUl size="18"/>
        <div className="text-[14px]">Contents</div>
      </div>
      <div className="flex items-center gap-[5px]">
        <Icon.UilListUiAlt size="18"/>
        <div className="text-[14px]">Categories</div>
      </div>
      <div className="flex items-center gap-[5px]">
        <Icon.UilCog size="18"/>
        <div className="text-[14px]">Contents</div>
      </div>
    </div>
    <div>
      <div className="flex items-center gap-[5px] bg-white p-[3px] pr-[15px] rounded-[99px]">
        <img src="/user-avatar.jpg" className="h-[30px] w-[30px] rounded-[15px]"/>
        <div className="text-gray-900 text-[14px]">İsmail İhsan Bülbül</div>
      </div>
    </div>
  </div>
}

const DashboardLeft = () => {
  return <div className="flex flex-col bg-neutral-800">
    <div className="px-[30px] py-[15px]">
      <button className="flex bg-white p-[10px] gap-[5px] w-[200px] rounded-[5px]">
        <Icon.UilPlus size="24"/>
        <div className="font-medium text-[18px]">New Item</div>
      </button>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Dashboard</div>
      </div>
      <Icon.UilAngleDown size="18"/>
    </div>
    <div className="flex flex-col gap-[10px] pl-[50px] pb-[15px] text-white font-medium">
      <div>Commerce</div>
      <div>Analytics</div>
      <div>Crypto</div>
      <div>Helpdesk</div>
      <div>Monitoring</div>
      <div>Fitness</div>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Application</div>
      </div>
      <Icon.UilAngleUp size="18"/>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Elements</div>
      </div>
      <Icon.UilAngleUp size="18"/>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Forms</div>
      </div>
      <Icon.UilAngleUp size="18"/>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Plugins</div>
      </div>
      <Icon.UilAngleUp size="18"/>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Elements</div>
      </div>
      <Icon.UilAngleUp size="18"/>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Datagrid</div>
      </div>
      <Icon.UilAngleUp size="18"/>
    </div>
    <div className="text-white flex items-center justify-between px-[30px] py-[15px] border-t border-neutral-900">
      <div className="flex items-center gap-[5px]">
        <Icon.UilApps size="18"/>
        <div className="font-medium">Settings</div>
      </div>
      <Icon.UilAngleUp size="18"/>
    </div>
  </div>
}