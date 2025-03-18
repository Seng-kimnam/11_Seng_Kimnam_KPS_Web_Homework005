import { useSearchParams } from "next/navigation";
import DetailComponent from "../_components/DetailComponent";

const page = ({ params }) => {
  return <DetailComponent params={params} />;
};

export default page;
