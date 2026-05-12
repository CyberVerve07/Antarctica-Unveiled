import ClientPage from "./client-page";

type Params = {
  slug: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  return <ClientPage params={resolvedParams} />;
}

