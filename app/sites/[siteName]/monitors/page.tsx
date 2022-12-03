import Image from "next/image";

interface Lane {
  laneName: string;
  monitorScreenShotURL: string;
}

async function getData(): Promise<Lane[]> {
  return [
    {
      laneName: "Lane 1",
      monitorScreenShotURL: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      laneName: "Lane 2",
      monitorScreenShotURL: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      laneName: "Lane 3",
      monitorScreenShotURL: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    }
  ];
}

interface PageProps {
	params: { siteName: string };
}

export default async function page({ params }: PageProps) {
	const lanes = await getData();
	return (
		<div className="grid grid-cols-4 gap-3 m-5">
      {
        lanes.map(lane => <div className="bg-white shadow-lg rounded-lg p-5" key={lane.laneName}>
          <h1>{lane.laneName}</h1>
          <img src={lane.monitorScreenShotURL} alt="" width={50} height={50}/>
        </div>)
      }
		</div>
	);
}
