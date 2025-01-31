import React from "react";

function LayananDetail(params: any) {
  return (
    <div>
      LayananDetail dengan id: <span className="font-bold">{params.slug}</span>
    </div>
  );
}

export default LayananDetail;
