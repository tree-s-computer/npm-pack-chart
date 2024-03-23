import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { PackagesType, AllPackagesType } from "../type/Package";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Npm Pakcage Download Count",
    },
  },
};

const Chart = ({ datas }: { datas: PackagesType[] }) => {
  const packageName = datas[0].packName;
  const downloads = datas.map((el: PackagesType) => el.downloads);
  const labels = datas.map((el: PackagesType) => el.start);

  const data = {
    labels,
    datasets: [
      {
        label: `${packageName} - Download Count`,
        data: downloads,
        backgroundColor: ["rebeccapurple"],
        borderColor: ["rebeccapurple"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "100vh",
        backgroundColor: "#ffff",
        padding: "0 80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
