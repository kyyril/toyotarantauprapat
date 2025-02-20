import { Sales } from "@/lib/interfaces/data.interface";

interface CardSalesProps {
  sales: Sales;
}

const CardSales = ({ sales }: CardSalesProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl dark:bg-black transition hover:scale-95 hover:shadow-xl ease-in-out">
      <div className="flex flex-col items-center">
        <img
          src={sales.profile}
          alt={sales.nama}
          loading="lazy"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-red-500"
        />
        <div className="text-center mt-2">
          <h2 className="text-sm sm:text-base font-semibold text-ellipsis line-clamp-1">
            {sales.nama}
          </h2>
          <h3 className="text-xs sm:text-sm text-gray-500">{sales.nohp}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardSales;
