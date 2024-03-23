import DownloadTracker from "@yunseorim1116/npm-pack-count";
import { useEffect, useState } from "react";
import { PACKAGES } from "../data";
import Chart from "../components/Chart";
import { AllPackagesType, PackagesType } from "../type/Package";

export const Main = () => {
  const [data, seDate] = useState<AllPackagesType>();

  const createTrackerInstance = async () => {
    const tracker = new DownloadTracker(PACKAGES, 8);
    const datas = await tracker.start();
    console.log(datas);
    seDate(datas);
  };

  useEffect(() => {
    createTrackerInstance();
  }, []);

  return (
    <div>
      {data &&
        data.map((data: PackagesType[], index: number) => (
          <Chart datas={data} key={index} />
        ))}
    </div>
  );
};
