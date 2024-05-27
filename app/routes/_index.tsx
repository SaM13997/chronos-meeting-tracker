import { CardOngoing } from '@/components/CardOngoing';
import { CardCompleted } from '@/components/CardCompleted';
import IphoneFrame from "@/components/Misc/IphoneFrame";
import { title } from "@/config.shared";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: title() },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="h-full flex flex-col overflow-y-hidden">
			<IphoneFrame className="hidden min-[500px]:block">
				<p>adawd</p>
			</IphoneFrame>
			<div className="flex flex-col items-start w-full h-full gap-1">
				<div className="flex flex-col pb-4 px-4 justify-start w-full rounded-b-3xl bg-[#D95638]">
					<p className="text-3xl font-semibold py-4">March</p>
					<div className="flex justify-between gap-2 overflow-x-auto ">
						{[...Array(7)].map((_, i) => {
							return (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={i}
									className="flex bg-white text-red-700 font-semibold rounded-full py-4 px-3 text-[clamp(12px,1vw,200px)] justify-center items-center flex-col"
								>
									<p>Sun</p>
									<p>12</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex bg flex-col w-full gap-1 px-4 overflow-y-auto pb-4">
					<CardCompleted />
					<CardOngoing />
					<CardOngoing />
					<CardOngoing />
				</div>
			</div>
		</div>
	);
}
