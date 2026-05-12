import ClientPage from "./client-page";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  return <ClientPage params={resolvedParams} />;
}

