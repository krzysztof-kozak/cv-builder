import {
	BookOpenIcon,
	RewindIcon,
	FastForwardIcon,
	DocumentDownloadIcon,
	CogIcon,
	MapIcon,
} from '@heroicons/react/solid';

export default function Toolbar() {
	return (
		<div className="text-slate-20 mx-auto mt-3 flex max-w-screen-sm justify-around rounded-full bg-slate-500 p-4 text-lg text-slate-200">
			<div className="flex items-center hover:text-emerald-400">
				<BookOpenIcon className="h-5" />
				<button className="">Font</button>
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<BookOpenIcon className="h-5" />
				<button className="">Theme</button>
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<MapIcon className="h-5" />
				<button className="">Layout</button>
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<CogIcon className="h-5" />
				<button className="">Settings</button>
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<RewindIcon className="h-5 cursor-pointer" />
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<FastForwardIcon className="h-5 cursor-pointer" />
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<DocumentDownloadIcon className="h-5" />
				<button className="">Download</button>
			</div>
		</div>
	);
}
