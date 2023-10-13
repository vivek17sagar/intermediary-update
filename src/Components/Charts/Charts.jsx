import Chart from "react-apexcharts";
// import { BarChartType } from "Types/types";
import { ApexOptions } from "apexcharts";

export const Bar = ({ options, series, width, height }) => {
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width={width}
      height={height}
    />
  );
};

export const BarGeneralized = (props) => {
  return <Chart {...props} />;
};

export const Pie = (props) => {
  return <Chart {...props} />;
};

export const Area = (props) => {
  return <Chart {...props} />;
};
