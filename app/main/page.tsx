import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Main() {
  return ( 
  <div className="flex w-full max-w-sm items-center space-x-2">
    <Input  placeholder="Input Something..."/>
    <Button type="submit"> Submit</Button>
  </div>
  )
}