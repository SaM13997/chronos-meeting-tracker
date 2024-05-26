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
		<div className="h-full flex flex-col">
			<IphoneFrame className="hidden min-[500px]:block">
				<p>adawd</p>
			</IphoneFrame>
			<div className="flex flex-col items-start w-full h-full gap-1">
				<div className="flex flex-col pb-4 px-4 justify-start w-full rounded-b-3xl bg-red-600">
					<p className="text-3xl font-semibold py-4">March</p>
					<div className="flex justify-between">
						<div className="flex bg-white text-red-700 font-semibold rounded-full py-4 px-3 justify-center items-center flex-col">
							<p>Sun</p>
							<p>12</p>
						</div>
						<div className="flex  font-semibold rounded-full py-4 px-3 justify-center items-center flex-col">
							<p>Sun</p>
							<p>12</p>
						</div>
						<div className="flex font-semibold rounded-full py-4 px-3 justify-center items-center flex-col">
							<p>Sun</p>
							<p>12</p>
						</div>
						<div className="flex  font-semibold rounded-full py-4 px-3 justify-center items-center flex-col">
							<p>Sun</p>
							<p>12</p>
						</div>
						<div className="flex  font-semibold rounded-full py-4 px-3 justify-center items-center flex-col">
							<p>Sun</p>
							<p>12</p>
						</div>
						<div className="flex  font-semibold rounded-full py-4 px-3 justify-center items-center flex-col">
							<p>Sun</p>
							<p>12</p>
						</div>
						<div className="flex  font-semibold rounded-full py-4 px-3 justify-center items-center flex-col">
							<p>Sun</p>
							<p>12</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
