import { CardPromo } from "@/components/CardPromo";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20 h-[90vh]"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mx-1">
          <div className="">
            <Image
              src="/images/pt.png"
              width={1000}
              height={400}
              loading="lazy"
              alt="pt"
              className="mx-auto overflow-hidden object-cover object-center rounded-br-xl rounded-tl-xl"
            />
          </div>
          <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter ">
                Auto 2000
              </h1>
            </div>
            <p className="max-w-[600px] lg:text-lg text-gray-500 font-light dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, deleniti natus iste commodi dolor quos laboriosam
              nemo sit facilis soluta sequi aspernatur, magni, odio quibusdam.
            </p>
            <div className="space-x-4 mt-2">
              <Link target="_blank" href={"/"}>
                <Button
                  className="hover:text-red-500"
                  variant="secondary"
                  size="sm"
                >
                  <PhoneCall />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl w-full h-screen mt-10 px-4 md:px-16 mx-auto"
        id="promo"
      >
        <h2 className="text-xl">Promo</h2>
        <div>
          <CardPromo />
        </div>
      </section>
    </main>
  );
}
