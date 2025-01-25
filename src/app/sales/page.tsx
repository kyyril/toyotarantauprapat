import { CardSales } from "@/components/Sales/CardSales";
import { fetchSales } from "@/lib/utils/fetcher";

const SalesPage = async () => {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex flex-col">
        <h2 className="text-2xl font-semibold text-start">Sales</h2>
        <div className="mb-4"></div>
        <CardSales />
      </section>
    </main>
  );
};

export default SalesPage;
