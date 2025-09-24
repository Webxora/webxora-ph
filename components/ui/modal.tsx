import { useModalStore } from "@/store/useModalStore"
import Image from "next/image";
import { Button } from "./button";

export default function ComingSoonModal() {
    const { isOpen, close } = useModalStore(state => state);
    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-[#030019] border border-[#434343] rounded-[10px] shadow-xl p-8 w-[90%] max-w-md items-center relative flex flex-col gap-[5px]">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <Image
                                src="/images/logo.png" // ilagay mo yung actual path ng logo
                                alt="WebXora Logo"
                                width={80}
                                height={80}
                            />
                        </div>
                        {/* Title */}
                        <h2 className="text-[42px] font-bold text-[#E398FF]">
                            Coming Soon 🚀
                        </h2>
                        <p className="text-[#00EEFF] text-[14px] max-w-xs text-center mb-[10px]">
                            We’re working hard to launch something amazing. Stay tuned!
                        </p>

                        <Button
                            onClick={close}
                            className="h-[44px] w-[199px] md:w-[180px] rounded-full text-white"
                            variant="style2"
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}