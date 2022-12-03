import Link from "next/link";
import { AiFillCamera } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

async function getSites() {
	return [
		{ name: "Gatwick", icon: <AiFillCamera/> },
		{ name: "HERMES", icon: <BsFillPersonFill/> },
		{ name: "MX", icon: <FaRegBell/> },
		{ name: "Navon", icon: <FiSettings/> },
	];
}

export default async function layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const sites = await getSites();

	return (
		<div className="flex h-full bg-zinc-300">
			<menu className="h-screen bg-cyan-900 sticky top-0 left-0 w-64 flex flex-col drop-shadow-2xl rounded-r-3xl">
				<div className="bg-white/40 rounded-2xl p-5 m-5 text-center text-xl">
					SeeTrue
				</div>
				{sites.map((site) => (
          <Link href={`/sites/${site.name}`} key={site.name}>
            
						<div className="text-white text-xl p-4 hover:bg-cyan-800 flex items-center gap-5">{site.icon}{site.name}</div>
					</Link>
				))}
			</menu>
			<main className="grow">{children}</main>
		</div>
	);
}
