import DownloadTracker from "@yunseorim1116/npm-pack-count";
import { useEffect, useState } from "react";
import { PACKAGES } from "../data";

export const Main = () => {
  const [data, seDate] = useState<any>();
  useEffect(() => {
    const tracker = new DownloadTracker(PACKAGES, 2);
    const createTrackerInstance = async () => {
      const datas = await tracker.start();
      seDate(datas);
    };
    createTrackerInstance();
  }, []);
  return <div>Main!</div>;
};
