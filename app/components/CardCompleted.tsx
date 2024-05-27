import React from "react";
import { IoCheckmark } from "react-icons/io5";
export function CardCompleted() {
	return (
		<div className="flex bg-amber-400 justify-between text-black w-full rounded-[2rem] p-4">
			<div className="flex-col">
				<p className="text-lg font-semibold">Meeting Title</p>
				<p className="line-clamp-1 w-[74%]">
					Meeting Description Meeting Description Meeting Description
				</p>
			</div>
			<div className="h-full aspect-square grid place-content-center rounded-full bg-zinc-950">
				<IoCheckmark className="text-white text-2xl" />
			</div>
		</div>
	);
}
