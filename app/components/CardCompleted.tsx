import React from "react";
import { IoCheckmark } from "react-icons/io5";
export function CardCompleted() {
	return (
		<div className="flex bg-amber-400 justify-between  w-full rounded-[2rem] p-4 py-6">
			<div className="flex-col">
				<p className="text-lg font-semibold text-zinc-800">Meeting Title</p>
				<p className="line-clamp-1 text-zinc-700 text-sm w-[74%]">
					Meeting Description Meeting Description Meeting Description
				</p>
			</div>
			<div className="h-full aspect-square grid place-content-center rounded-full bg-zinc-950">
				<IoCheckmark className="text-white text-2xl" />
			</div>
		</div>
	);
}
