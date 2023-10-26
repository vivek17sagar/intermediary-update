import React from "react";
import "./shimmer.css";

const ShimmeringTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
            <th className="shimmer"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
              <td className="shimmer"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShimmeringTable;
