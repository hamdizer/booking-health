import { DiagnosisDetail } from "../../../types/types";
import {
  CardContainer,
  TextBox,
  HealthPropertyTypography,
  ValueTypography,
  LevelTypography,
} from "./DiagnosisCard.styles";

interface DiagnosisCardProps {
  diagnosis: DiagnosisDetail;
}

const DiagnosisCard = ({ diagnosis }: DiagnosisCardProps) => (
  <CardContainer bgColor={diagnosis.color}>
    {diagnosis.icon &&
      (typeof diagnosis.icon === "string" ? (
        <img
          src={diagnosis.icon}
          width={100}
          height={100}
          alt={diagnosis.healthProperty}
        />
      ) : (
        diagnosis.icon
      ))}

    <TextBox>
      <HealthPropertyTypography>
        {diagnosis.healthProperty}
      </HealthPropertyTypography>
      <ValueTypography>{diagnosis.value}</ValueTypography>
    </TextBox>

    <LevelTypography>{diagnosis.levels}</LevelTypography>
  </CardContainer>
);

export default DiagnosisCard;
