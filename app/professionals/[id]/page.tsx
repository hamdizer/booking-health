import WellnessProfilePage from "../../components/WellnessProfile/WellnessProfilePage";

export default async function ProfessionalDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <WellnessProfilePage params={{ id }} />;
}
