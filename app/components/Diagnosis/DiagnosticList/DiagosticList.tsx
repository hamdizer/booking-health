import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import CustomTable from "../../Tables/CustomTable/CustomTable";
import { DiagnosisItem } from "../../../types/types";
import { StyledCard, Title } from "./DiagnosticList.styles";

const DiagonsticList = () => {
  const { data } = useSelector((state: RootState) => state.profile);
  if (!data || Array.isArray(data)) return null;

  const diagnosisListColumns =
    data?.diagnostic_list?.length > 0
      ? Object.keys(data.diagnostic_list[0])
      : [];

  return (
    <StyledCard>
      <Title>Diagnostic List</Title>

      <CustomTable<DiagnosisItem>
        columns={diagnosisListColumns}
        rows={data?.diagnostic_list}
      />
    </StyledCard>
  );
};

export default DiagonsticList;
