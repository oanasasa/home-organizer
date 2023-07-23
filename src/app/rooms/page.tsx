"use client";
import { useAppContext } from "../../components/context/appContext";
import { useRouter } from "next/navigation";

export default function Rooms() {
  const router = useRouter();
  const { rooms, setRooms } = useAppContext();

  return (
    <div className="pt-20 pb-20 flex flex-col justify-center">
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <input id="house" type="number" name="select-bedrooms" />
          <h1>Bedrooms</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <input id="apartment" type="number" name="select-bathrooms" />
          <h1>Bathrooms</h1>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="rounded-full bg-white px-4 py-2 text-black mt-5">
          Next Step
        </button>
        <h1 className="mt-5 text-xl">
          <p>
            You have choosed:
            <span className="underline decoration-indigo-500 font-bold">
              {} bedrooms
            </span>{" "}
            and{" "}
            <span className="underline decoration-indigo-500 font-bold">
              {} bathrooms
            </span>
          </p>
        </h1>
      </div>
    </div>
  );
}
