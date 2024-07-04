import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut, Radar } from "react-chartjs-2";
import {
  Card,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js";

// Register the required Chart.js plugins
ChartJS.register(Tooltip, Legend);

const DashBoardChart = () => {
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        backgroundColor: [],
        borderWidth: 1,
        data: [],
      },
    ],
  });
  const [chartType, setChartType] = useState("Pie");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  // Hardcoded data for companies and their values
  const companyData = [
    { company: "Company A", value: 55 },
    { company: "Company B", value: 78 },
    { company: "Company C", value: 45 },
    { company: "Company D", value: 88 },
    { company: "Company E", value: 67 },
    { company: "Company F", value: 92 },
    { company: "Company G", value: 34 },
    { company: "Company H", value: 77 },
    { company: "Company I", value: 50 },
   
  ];

  useEffect(() => {
    const companyName = [];
    const companyValue = [];

    companyData.forEach((element) => {
      companyName.push(element.company);
      companyValue.push(element.value);
    });

    setGraphData({
      labels: companyName,
      datasets: [
        {
          label: "Value",
          backgroundColor: [
            "green",
            "red",
            "blue",
            "#FFBF00",
            "#DE3163",
            "orange",
            "#40E0D0",
            "#6495ED",
            "#CCCCFF",
            "#FFBF00",
          ],
          borderWidth: 1,
          data: companyValue,
        },
      ],
    });
  }, []);

  const handleClick = (event, element) => {
    if (element.length > 0) {
      const index = element[0].index;
      const label = graphData.labels[index];
      const value = graphData.datasets[0].data[index];

      // Perform your data fetching logic here
      console.log(`Label: ${label}, Value: ${value}`);
    }
  };

  const renderChart = () => {
    const options = {
      responsive: true,
      onClick: handleClick,
    };

    if (!graphData.datasets) {
      return null;
    }

    switch (chartType) {
      case "Bar":
        return <Bar data={graphData} options={options} />;
      case "Line":
        return <Line data={graphData} options={options} />;
      case "Pie":
        return <Pie data={graphData} options={options} />;
      case "Doughnut":
        return <Doughnut data={graphData} options={options} />;
      case "Radar":
        return <Radar data={graphData} options={options} />;
      default:
        return <Pie data={graphData} options={options} />;
    }
  };

  return (
    <Card className="">
      <CardBody>
        <CardTitle className="mt-0">Chart</CardTitle>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle tag="button" className="btn btn-primary">
            Select Chart <i className="mdi mdi-chevron-down" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setChartType("Bar")}>
              Bar Chart
            </DropdownItem>
            <DropdownItem onClick={() => setChartType("Line")}>
              Line Chart
            </DropdownItem>
            <DropdownItem onClick={() => setChartType("Pie")}>
              Pie Chart
            </DropdownItem>
            <DropdownItem onClick={() => setChartType("Doughnut")}>
              Doughnut Chart
            </DropdownItem>
            <DropdownItem onClick={() => setChartType("Radar")}>
              Radar Chart
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="chart-container">{renderChart()}</div>
      </CardBody>
    </Card>
  );
};

export default DashBoardChart;
