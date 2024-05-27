import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { CardPopupDrawer } from "./CardPopupDrawer";
export function CardOngoing({
	timing,
	title,
	desc,
}: { timing: string; title: string; desc: string }) {
	
	return (
		<div className="flex flex-col bg-white justify-between text-black w-full rounded-[2rem] p-4">
			<div className="flex justify-between ">
				<div className="flex-1 max-w-[70%]">
					<p className="text-xs text-zinc-800">{timing}</p>
					<p className="text-xl font-semibold">{title}</p>
					<p className="line-clamp-1 text-zinc-800 text-xs w-[74%]">
						{desc}
					</p>
				</div>
				<div className="flex items-start justify-center max-w-[35%]">
					<img
						className="size-10 border-2 border-white rounded-full -ml-2"
						src="https://avatar.iran.liara.run/public/46"
						alt=""
					/>
					<img
						className="size-10 border-2 border-white rounded-full -ml-2"
						src="https://avatar.iran.liara.run/public/41"
						alt=""
					/>
					<div className="flex bg-orange-500 size-10 border-2 border-white -ml-2 justify-center items-center rounded-full">
						+7
					</div>
				</div>
			</div>

			<div className="flex items-end justify-between">
				<div className="flex h-full gap-2 w-full pt-8">
					<div className="px-4 py-3 text-sm grid place-content-center rounded-full bg-zinc-200">
						Today
					</div>
					<div className="px-4 py-3 text-sm grid place-content-center rounded-full bg-zinc-200">
						1h
					</div>
				</div>
				<div className="h-full max-h-10 aspect-square grid place-content-center rounded-full bg-zinc-950">
					<CardPopupDrawer />
				</div>
			</div>
		</div>
	);
}
