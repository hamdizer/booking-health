import JetDetails from "../../components/JetDetails/JetDetails";

export default function JetDetailsPage({
  params,
}: {
  params: { value: { id: string } };
}) {
  return <JetDetails params={params} />;
}
