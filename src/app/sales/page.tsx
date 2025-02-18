import CardSales from "@/components/Sales/CardSales";

const SalesPage = async () => {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <div className="mb-4 w-full mx-auto flex justify-start items-start">
          <h2 className="text-2xl font-bold mx-5">Sales</h2>
        </div>
        <CardSales />
      </section>
    </main>
  );
};

export default SalesPage;
