"use client";
import React from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";

function WassapClick() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282361456715";
    const message = encodeURIComponent(``);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <Button
      onClick={handleWhatsAppClick}
      className="hover:text-red-500 transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out"
      variant="secondary"
      size="sm"
    >
      +6281260671163
      <PhoneCall className="text-red-500" />
    </Button>
  );
}

export default WassapClick;
