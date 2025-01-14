function CarDetail({ params }: { params: { slug: string } }) {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center flex-col">
        <h1>Detail Mobil {params.slug}</h1>
      </section>
    </main>
  );
}

export default CarDetail;
