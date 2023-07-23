"use client";

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../components/context/appContext";

export default function SelectHome() {
  const router = useRouter();
  const { home, setHome } = useAppContext();

  function handleHouseChange(e: { target: { value: SetStateAction<string> } }) {
    setHome(e?.target.value);
  }
  function handleClick() {
    router.push("/rooms");
  }

  return (
    <div className="pt-20 pb-20 flex flex-col justify-center">
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <input
            onChange={handleHouseChange}
            id="house"
            type="radio"
            name="select-home"
            value="House"
            checked={home === "House"}
          />
          <h1>House</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <input
            onChange={handleHouseChange}
            id="apartment"
            type="radio"
            name="select-home"
            value="Apartment"
            checked={home === "Apartment"}
          />
          <h1>Apartment</h1>
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          onClick={handleClick}
          className="rounded-full bg-white px-4 py-2 text-black mt-5"
        >
          Next Step
        </button>
        <h1 className="mt-5 text-xl">
          <p>
            You have choosed:{" "}
            <span className="underline decoration-indigo-500 font-bold">
              {home}
            </span>
          </p>
        </h1>
      </div>
    </div>
  );
}
