import Image from "next/image";
import huawei from "../../huwa.svg";
import netapp from "../../icons8-netapp.svg";
import redDragon from "../../icons8-redragon-240.svg";

interface Company {
  id: number;
  name: string;
  logoUrl: string;
}

const companies: Company[] = [
  { id: 1, name: "Huawei", logoUrl: huawei },
  { id: 3, name: "NetApp", logoUrl: netapp },
  { id: 5, name: "RedDragon", logoUrl: redDragon },
];

export default function CompaniesPage() {
  return (
    <div className="container px-8">
      <div className="flex flex-row gap-8">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex flex-row items-center p-4 rounded-lg shadow-md bg-blue-500 bg-opacity-40 backdrop-blur-sm 
            hover:bg-opacity-70 hover:backdrop-blur-none transition-all duration-300 ease-in-out"
          >
            <Image
              src={company.logoUrl}
              alt={`${company.name} logo`}
              width={70}
              height={70}
              className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
            <h3 className="mt-4 text-4xl font-semibold text-black opacity-500 hover:opacity-100 transition-opacity duration-300">
              {company.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
