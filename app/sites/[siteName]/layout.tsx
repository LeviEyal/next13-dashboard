import Link from "next/link";

interface LayoutProps {
	children: React.ReactNode;
	params: { siteName: string };
}

export default async function layout({ children, params }: LayoutProps) {
	return (
		<div className="flex flex-col text-black">
			<header className="flex bg-black/50">
				{params.siteName} page
				<Link href={`/sites/${params.siteName}/versions`}>
					<p className="text-white text-xl p-4 hover:bg-cyan-800">Versions</p>
				</Link>
				<Link href={`/sites/${params.siteName}/monitors`}>
					<p className="text-white text-xl p-4 hover:bg-cyan-800">Monitors</p>
				</Link>
				<Link href={`/sites/${params.siteName}/monitors`}>
					<p className="text-white text-xl p-4 hover:bg-cyan-800">Events</p>
				</Link>
			</header>
			<main>{children}</main>
		</div>
	);
}
