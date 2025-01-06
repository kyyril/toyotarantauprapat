function CarDetail({ params }: { params: { slug: string } }) {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center flex-col">
        <div>CarDetail {params.slug}</div>
      </section>
    </main>
  );
}

export default CarDetail;
