import { cn } from "@/lib/styles";
import React from "react";

function IphoneFrame({ children, className }: { children: React.ReactNode, className?: string}) {
	return (
		<main className={cn("w-full flex justify-center p-10 bg-neutral-100",className)}>
			<div className="w-[18rem] h-[37rem] bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 rounded-[3rem] flex items-center justify-center border-box p-[0.2rem] relative shadow-[1rem_1rem_6rem_rgba(0,0,0,0.4),0_0_0.1rem_rgba(0,0,0,0.4)]">
				<div className="w-1 h-20 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-r from-neutral-400 via-blue-300 to-blue-300 border-r border-blue-100 absolute -right-1 top-[30%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]" />
				<div className="w-1 h-10 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[38%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]" />
				<div className="w-1 h-10 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[28%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]" />
				<div className="w-1 h-5 rounded-[0_0.1rem_0.1rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[20%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]" />

				<div className="relative h-full w-full bg-black rounded-[2.9rem] flex  justify-center border-box p-[0.5rem]">
					<div className="dynamic-island absolute flex justify-between w-24 items-center p-2 bg-zinc-950 rounded-xl">
						<img
							src="/public/camera-lens-image.png"
							className="size-3 absolute"
							alt=""
						/>
					</div>
					{children}
				</div>
			</div>
		</main>
	);
}

export default IphoneFrame;