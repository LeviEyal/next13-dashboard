interface Version {
  package: string;
  version: string;
}

interface Lane {
  laneName: string;
  versions: Version[];
}

async function getData(): Promise<Lane[]> {
  return [
    {
      laneName: "Lane 1",
      versions: [
        {
          package: "package1",
          version: "1.0.0"
        },
        {
          package: "package2",
          version: "2.0.0"
        },
        {
          package: "package3",
          version: "3.0.0"
        }
      ]
    },
    {
      laneName: "Lane 2",
      versions: [
        {
          package: "package1",
          version: "1.0.0"
        },
        {
          package: "package2",
          version: "2.0.0"
        },
        {
          package: "package3",
          version: "3.0.0"
        }
      ]
    },
    {
      laneName: "Lane 3",
      versions: [
        {
          package: "package1",
          version: "1.0.0"
        },
        {
          package: "package2",
          version: "2.0.0"
        },
        {
          package: "package3",
          version: "3.0.0"
        }
      ]
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
          <table className="w-full">
            <thead>
              <tr>
                <th>Package</th>
                <th>Version</th>
              </tr>
            </thead>
            <tbody>
              {
                lane.versions.map(version => <tr key={version.package}>
                  <td>{version.package}</td>
                  <td>{version.version}</td>
                </tr>)
              }
            </tbody>

          </table>
        </div>)
      }
		</div>
	);
}
