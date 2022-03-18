import { BeakerIcon } from '@heroicons/react/solid';
import { Switch } from '@headlessui/react';
import { useState } from 'react';

export default function Optimizer() {
	const [enabled, setEnabled] = useState(false);

	return (
		<div className="flex items-center justify-between gap-3 rounded-full bg-slate-500 px-4 py-2 text-lg text-slate-200 shadow-lg">
			<BeakerIcon className="h-5" />
			<p>Optimizer</p>
			<p
				className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-400
        p-3 text-sm text-slate-400"
			>
				13
			</p>
			<p
				className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-400
        p-3 text-sm text-slate-400"
			>
				1
			</p>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? 'bg-emerald-500' : 'bg-slate-800'
				} border-1 relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`
          transform transition duration-200 ease-in-out
          ${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white`}
				/>
			</Switch>
		</div>
	);
}
