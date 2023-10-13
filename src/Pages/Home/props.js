// import { NonceProvider } from 'react-select';

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const pieProps = {
  options: {
    labels: ["Series A", "Series B", "Series C"],
    colors: ["#556ee6", "#34c38f", "#f46a6a"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
  },
  series: [56, 38, 26],
  type: "donut",
  height: 260,
  className: "apex-charts",
  width: "150%",
};

export const MonthlyWiseChartProps = {
  options: {
    chart: {
      height: 350,
      width: "1000",
      type: "area",
      toolbar: {
        show: true,
      },
    },
    colors: ["#556ee6", "#f1b44c"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      categories: [],
      type: "numeric",
      labels: {
        formatter: (_) => Months[_ - 1],
      },
      tickAmount: "dataPoints",
    },
    markers: {
      size: 3,
      strokeWidth: 3,
      hover: {
        size: 4,
        sizeOffset: 2,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  },
  series: [
    {
      name: "Current",
      data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
    },
    {
      name: "Previous",
      data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
    },
  ],
  type: "area",
  height: 320,
  className: "apex-charts",
  width: "290%",
};
