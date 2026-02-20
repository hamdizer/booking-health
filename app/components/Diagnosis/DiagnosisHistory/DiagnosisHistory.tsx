import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import HeartIcon from "../../../assets/icons/heart_BPM.svg";
import RespiratoryIcon from "../../../assets/icons/respiratory_rate.svg";
import TemperatureIcon from "../../../assets/icons/temperature.svg";
import BloodPressureChart from "../BloodPressure/BloodPressureChart";
import DiagnosisCard from "../DiagnosisCard/DiagnosisCard";

import {
  StyledCard,
  Title,
  ContentWrapper,
  DiagnosisGrid,
} from "./DiagnosisHistory.styles";

const DiagnosisHistory = () => {
  const { data } = useSelector((state: RootState) => state.profile);

  if (data?.diagnosis_history?.length === 0) return null;

  const avg = (arr: number[]) =>
    arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

  const heartRates = data.diagnosis_history
    .map((r) => r.heart_rate?.value)
    .filter((v) => typeof v === "number");
  const respiratoryRates = data.diagnosis_history
    .map((r) => r.respiratory_rate?.value)
    .filter((v) => typeof v === "number");
  const temperatures = data.diagnosis_history
    .map((r) => r.temperature?.value)
    .filter((v) => typeof v === "number");

  if (!heartRates.length && !respiratoryRates.length && !temperatures.length)
    return null;

  const diagnosisHistoryData = [
    {
      value: avg(heartRates).toFixed(1).toString() + " bpm",
      healthProperty: "Heart Rate",
      color: "#FFE6F1",
      icon: HeartIcon,
      levels: "Lower than Average",
    },
    {
      value: avg(respiratoryRates).toFixed(1).toString() + " bpm",
      healthProperty: "Respiratory Rate",
      color: "#E0F3FA",
      icon: RespiratoryIcon,
      levels: "Normal",
    },
    {
      value: Number(avg(temperatures).toFixed(1)).toString() + " °F",
      healthProperty: "Temperature",
      color: "#FFE6E9",
      icon: TemperatureIcon,
      levels: "Normal",
    },
  ];

  return (
    <StyledCard>
      <Title>Diagnosis History</Title>

      <ContentWrapper>
        <BloodPressureChart data={data.diagnosis_history} />

        <DiagnosisGrid>
          {diagnosisHistoryData.map((diagnosis, index) => (
            <DiagnosisCard
              key={index}
              diagnosis={{
                color: diagnosis.color,
                healthProperty: diagnosis.healthProperty,
                value: diagnosis.value,
                icon: diagnosis.icon,
                levels: diagnosis.levels,
              }}
            />
          ))}
        </DiagnosisGrid>
      </ContentWrapper>
    </StyledCard>
  );
};

export default DiagnosisHistory;
