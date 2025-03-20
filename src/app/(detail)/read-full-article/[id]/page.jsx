import { getArticleByIdType } from "@/service/article.service";
import DetailComponent from "../_components/DetailComponent";

const Page = async ({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}) => {
  const searchParam = (await searchParamsPromise) || "";
  const getType = await searchParam.type;
  const params = (await paramsPromise) || {};
  const id = await params.id;

  const dataDetail = await getArticleByIdType(id, getType);

  return <DetailComponent params={params} dataDetail={dataDetail} />;
};

export default Page;
