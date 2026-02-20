import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";
import {
  StyledCard,
  Title,
  LabResultRow,
  LabResultText,
} from "./LabResults.styles";

export const LabResults = () => {
  const { data } = useSelector((state: RootState) => state.profile);
  if (!data || Array.isArray(data)) return null;

  return (
    <StyledCard>
      <Title>Lab results</Title>

      {data.lab_results?.map((result: string, index: number) => (
        <LabResultRow key={index}>
          <LabResultText>{result}</LabResultText>
          <DownloadIcon />
        </LabResultRow>
      ))}
    </StyledCard>
  );
};
