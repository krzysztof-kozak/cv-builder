import {
	TranslateIcon,
	RewindIcon,
	FastForwardIcon,
	DocumentDownloadIcon,
	CogIcon,
	ColorSwatchIcon,
	CubeIcon,
} from '@heroicons/react/solid';

export default function Toolbar() {
	return (
		<div className="text-slate-20 mx-auto mt-3 flex max-w-screen-sm justify-evenly rounded-full bg-slate-500 p-4 text-lg text-slate-200">
			<div className="flex items-center hover:text-emerald-400">
				<TranslateIcon className="h-5" />
				<button>Font</button>
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<ColorSwatchIcon className="h-5" />
				<button>Theme</button>
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<CubeIcon className="h-5" />
				<button>Layout</button>
			</div>

			<div className="flex items-center hover:text-emerald-400">
				<CogIcon className="h-5" />
				<button>Settings</button>
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
