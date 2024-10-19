import {
  Home,
  FileInput,
  TrendingUp,
  DollarSign,
  Wallet,
  Settings,
  HelpCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      ></div>
      <aside
        className={cn(
          "fixed top-0 left-0 z-30 w-[290px] h-screen transition-transform duration-300 ease-in-out transform bg-card text-card-foreground lg:translate-x-0 lg:static lg:h-auto border-r-2 border-gray-100",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-8 border-b-2">
          <div className="flex items-center space-x-2">
            <Image
              src={"/Synergy.png"}
              alt="logo"
              width={400}
              height={400}
              className="md:w-[48px] md:h-[48px] w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[14px] text-[#0A0D14]">
                PLATINUM PROPERTY
              </span>
              <p className="text-[#525866] text-[12px] font-medium">
                Investment Group
              </p>
             

            </div>

          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="px-4 py-8">
          <h4 className="text-[#868C98] text-[12px]">MAIN</h4>
          <ul className="space-y-[8px] pt-4 text-[#525866]">
            {[
              { icon: Home, label: "Dashboard" },
              { icon: FileInput, label: "Input" },
              { icon: TrendingUp, label: "Projected Capital Growth" },
              { icon: DollarSign, label: "Construction Payments" },
              { icon: Wallet, label: "Mortgage Calculator" },
              //   { icon: DollarSign, label: "Payments" },
            ].map((item, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className="w-full hover:border-l-2 rounded-l-none hover:border-[#375DFB] justify-start hover:bg-[#d8e6f5]"
                >
                  <item.icon className="mr-2 h-4 w-4 text-[#525866]" />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-[#d8e6f5] hover:border-l-2 rounded-l-none hover:border-[#375DFB]"
          >
            <Settings className="mr-2 h-4 w-4  " />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:border-l-2 rounded-l-none hover:border-[#375DFB] hover:bg-[#d8e6f5]"
          >
            <HelpCircle className="mr-2 h-4 w-4 " />
            Support
          </Button>
        </div>
      </aside>
    </>
  );
}
