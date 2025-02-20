import { Sales } from "@/lib/interfaces/data.interface";

interface CardSalesProps {
  sales: Sales;
}

const CardSales = ({ sales }: CardSalesProps) => {
  return (
    <div className="m-1 p-2 rounded-lg overflow-hidden transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out shadow-md dark:bg-black">
      <div className="flex flex-col items-center">
        <img
          src={sales.profile}
          alt={sales.nama}
          loading="lazy"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-red-500"
        />
        <div className="text-center mt-2">
          <h2 className="text-sm sm:text-base font-semibold truncate">
            {sales.nama}
          </h2>
          <h3 className="text-xs sm:text-sm text-gray-500">{sales.nohp}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardSales;
