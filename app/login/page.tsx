import { Button, FormInput, FormTitle } from "../components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login"
}

export default function Login() {
  return <div className="h-screen w-full bg-neutral-100 grid place-items-center">
    <div className="w-[900px] rounded-[10px] bg-white flex">
      <div className="bg-[url(/login-image.jpg)] bg-cover rounded-l-[10px] flex-1"/>
      <div className="flex-1 p-[40px] flex flex-col gap-[40px]">
        <FormTitle title="Login" subtitle="Donec tortor quam at duis tortor." />
        <form className="flex flex-col gap-[20px]">
          <FormInput label="E-Mail" placeholder="Placeholder Content"/>
          <FormInput label="Password" type="password" placeholder="Placeholder Content"/>
          <a className="self-end">Forgot Password?</a>
          <Button>Login</Button>
        </form>
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center">
            <div className="flex-1 h-[1px] bg-neutral-200"></div>
            <div className="text-neutral-400 text-[12px] px-[10px] py-[5px]">or</div>
            <div className="flex-1 h-[1px] bg-neutral-200"></div>
          </div>
          <Button variant="ghost">Register now</Button>
        </div>
      </div>
    </div>
  </div>
}