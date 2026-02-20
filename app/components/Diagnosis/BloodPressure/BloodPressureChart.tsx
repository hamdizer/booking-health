import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DiagnosisHistoryItem } from "../../../types/types";

import {
  Container,
  ChartWrapper,
  SideBox,
  CardBox,
  StatusBox,
  LegendCircle,
  TitleTypography,
  CardLabelTypography,
  CardValueTypography,
  CardStatusTypography,
  StyledSelect,
} from "./BloodPressureChart.styles";
import { Box, MenuItem, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

interface Props {
  data: DiagnosisHistoryItem[];
}

const BloodPressureChart = ({ data }: Props) => {
  const labels = data.map((item) => `${item.month.slice(0, 3)}, ${item.year}`);
  const systolicData = data.map((item) => item.blood_pressure.systolic.value);
  const diastolicData = data.map((item) => item.blood_pressure.diastolic.value);

  const latestSystolic = systolicData[systolicData.length - 1];
  const latestDiastolic = diastolicData[diastolicData.length - 1];
  const latestSystolicLevel =
    data[data.length - 1]?.blood_pressure.systolic.levels;
  const latestDiastolicLevel =
    data[data.length - 1]?.blood_pressure.diastolic.levels;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#333",
        padding: 12,
        displayColors: true,
        callbacks: { title: (ctx) => ctx[0].label },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20, color: "#666", font: { size: 12 } },
        grid: { color: "#E0E0E0" },
        border: { display: false },
      },
      x: {
        ticks: { color: "#666", font: { size: 12 } },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  const getStatusIcon = (level: string) => {
    if (level?.toLowerCase().includes("higher")) return "▲";
    if (level?.toLowerCase().includes("lower")) return "▼";
    return "●";
  };

  const getStatusText = (level: string) => {
    if (level?.toLowerCase().includes("higher")) return "Higher than Average";
    if (level?.toLowerCase().includes("lower")) return "Lower than Average";
    return "Normal";
  };

  return (
    <Container display={"flex"} justifyContent={"space-between"}>
      <ChartWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TitleTypography>Blood Pressure</TitleTypography>
          <StyledSelect defaultValue="6months" size="small">
            <MenuItem value="6months">
              <Typography color=" #072635" fontSize="14px">
                Last 6 months
              </Typography>
            </MenuItem>
            <MenuItem value="3months">
              <Typography color=" #072635" fontSize="14px">
                Last 3 months
              </Typography>
            </MenuItem>
            <MenuItem value="1year">
              <Typography color=" #072635" fontSize="14px">
                Last year
              </Typography>
            </MenuItem>
          </StyledSelect>
        </Box>
        <Line data={chartData} options={options} />
      </ChartWrapper>
      <SideBox>
        <CardBox>
          <StatusBox>
            <LegendCircle color="#E66FD2" />
            <CardLabelTypography>Systolic</CardLabelTypography>
          </StatusBox>
          <CardValueTypography>{latestSystolic}</CardValueTypography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <CardStatusTypography>
              {getStatusIcon(latestSystolicLevel)}
            </CardStatusTypography>
            <CardStatusTypography>
              {getStatusText(latestSystolicLevel)}
            </CardStatusTypography>
          </Box>
        </CardBox>

        <CardBox>
          <StatusBox>
            <LegendCircle color="#8C6FE6" />
            <CardLabelTypography>Diastolic</CardLabelTypography>
          </StatusBox>
          <CardValueTypography>{latestDiastolic}</CardValueTypography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <CardStatusTypography>
              {getStatusIcon(latestDiastolicLevel)}
            </CardStatusTypography>
            <CardStatusTypography>
              {getStatusText(latestDiastolicLevel)}
            </CardStatusTypography>
          </Box>
        </CardBox>
      </SideBox>
    </Container>
  );
};

export default BloodPressureChart;
