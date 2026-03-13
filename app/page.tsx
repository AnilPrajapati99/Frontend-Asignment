import Image from "next/image";
import BasicTable from "./componets/DataTable";

export default function Home() {
  return (
    <div className="h-full w-screen bg-white  text-black">
      <div className="bg-[#3B82f6] p-6 text-white">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Patient Directory</h1>
          <h3>1000 Patient Found</h3>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-1.5">
            <h4>Table View</h4>
            <h4>Card View</h4>
          </div>
          <h4>Activity Filter</h4>
        </div>

        <div className="flex justify-between items-center">
          <div className=" w-2xl p-2 rounded border-1 border-gray-400">
            <p className="text-gray-400">Search</p>
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="text-blue-500">Sort by:</h2>
            <div>
              <h3 className="p-1.5 border-1  border-gray-400">Option 1</h3>
            </div>
            <div>
              <h3 className="p-1.5 border-1 border-gray-400">Option 1</h3>
            </div>
          </div>
        </div>

        <div>
          <BasicTable />
        </div>
      </div>
    </div>
  );
}
