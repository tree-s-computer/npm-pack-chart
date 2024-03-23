import DownloadTracker from "@yunseorim1116/npm-pack-count";
import { useEffect, useState } from "react";
import { PACKAGES } from "../data";
import Chart from "../components/Chart";
import { useRef } from "react";

export const Main = () => {
  const [data, seDate] = useState<any>();

  const createTrackerInstance = async () => {
    const tracker = new DownloadTracker(PACKAGES, 2);
    const datas = await tracker.start();
    console.log(datas);
    seDate(datas);
  };

  useEffect(() => {
    createTrackerInstance();
  }, []);
  return (
    <>
      <Chart />
    </>
  );
};
