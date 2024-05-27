import * as React from "react";
import { IoMdClose } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";

import { cn } from "@/lib/styles";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TfiArrowTopRight } from "react-icons/tfi";

export function CardPopupDrawer() {
	const [open, setOpen] = React.useState(false);
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<TfiArrowTopRight className="text-white -ml-1 -mb-1 text-xl" />
			</DrawerTrigger>
			<DrawerContent className="bg-white max-h-[90%]">
				<DrawerHeader>
					<div className="flex justify-between items-center">
						<div className="size-12 flex justify-center items-center bg-zinc-200 rounded-full">
							<IoMdClose className="text-zinc-800 text-2xl" />
						</div>
						<div className="size-12 flex justify-center items-center bg-zinc-200 rounded-full">
							<FiEdit3 className="text-zinc-800 text-2xl" />
						</div>
					</div>
				</DrawerHeader>
				<MeetingDetails className="px-4" />
			</DrawerContent>
		</Drawer>
	);
}

function MeetingDetails({ className, agendaItems }: { className?: string, agendaItems?: { title: string; timing: string }[]}) {
  const items= [{
    title: 'Discuss the project requirements and plan the tasks',
    timing: '1:00-1:30 PM'
  },{
    title: 'Review the code',
    timing: '1:30-2:00 PM'
  },{
    title: 'Plan the next steps',
    timing: '2:00-2:30 PM'
  }] || agendaItems;
	return (
		<div className="p-4 pt-0 flex flex-col gap-4">
			
			<div className="flex justify-center">
				<div className="pill bg-black px-8 text-sm rounded-full py-3">
					1:00-2:30 PM
				</div>
			</div>
			<div className="flex flex-col items-center text-black justify-center">
				<p className="text-3xl font-bold">PM Meeting</p>
				<p>Discussion of tasks for the month</p>
			</div>
			<div className="flex items-start justify-center">
				<img
					className="size-14 border-2 border-white rounded-full -ml-2"
					src="https://avatar.iran.liara.run/public/46"
					alt=""
				/>
				<img
					className="size-14 border-2 border-white rounded-full -ml-2"
					src="https://avatar.iran.liara.run/public/41"
					alt=""
				/>
				<img
					className="size-14 border-2 border-white rounded-full -ml-2"
					src="https://avatar.iran.liara.run/public/32"
					alt=""
				/>
				<div className="flex bg-orange-500 size-14 border-2 border-white -ml-2 justify-center items-center rounded-full">
					+7
				</div>
			</div>
			<div className="agenda-items flex pt-6 flex-col justify-center items-center text-black gap-1">
				<p className="text-3xl pb-4 font-bold">Plan</p>
				{items.map((item, i) => (
					<div className="flex bg-zinc-100 w-full p-4 justify-between items-start rounded-2xl pb-12">
						<p className="max-w-[70%] text-xl font-semibold line-clamp-2">
							{item.title}
						</p>
						<p className="max-w-[30%]">{item.timing}</p>
					</div>
				))}
			</div>
		</div>
	);
}
