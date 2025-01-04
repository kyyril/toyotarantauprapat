import React from "react";

function CarDetail({ params }: { params: { slug: string } }) {
  return <div>CarDetail {params.slug}</div>;
}

export default CarDetail;
