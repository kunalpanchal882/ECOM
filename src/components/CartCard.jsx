
import {
  Heart,
  Minus,
  Plus,
  Trash2,
  Truck,
  ShieldCheck,
  Tag,
  Star,
} from "lucide-react";
import { useContext } from "react";
import { store } from "../context/Store";

const CartCard = ({data}) => {

const { handleDecrease,handleIncrease,} =  useContext(store)



  // Static API data data
  // const data = {
  //   id: 1,
  //   title: "Essence Mascara Lash Princess",
  //   brand: "Essence",
  //   category: "beauty",
  //   description:
  //     "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  //   price: 9.99,
  //   rating: 2.56,
  //   discountPercentage: 10.48,
  //   availabilityStatus: "In Stock",
  //   stock: 99,
  //   thumbnail:
  //     "https://cdn.dummyjson.com/data-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  //   shippingInformation: "Ships in 3-5 business days",
  //   warrantyInformation: "1 week warranty",
  //   returnPolicy: "No return policy",
  //   minimumOrderQuantity: 48,
  //   sku: "BEA-ESS-ESS-001",
  // };

  const discountedPrice = (
    data.price -
    (data.price * data.discountPercentage) / 100
  ).toFixed(2);

  return (
     <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:p-6">

          {/* data Image */}
          <div className="relative flex h-56 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-5 sm:h-60 sm:w-60">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="h-full w-full object-contain"
            />

            <span className="absolute left-3 top-3 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-bold text-purple-700">
              -{data.discountPercentage}%
            </span>

            <button
              type="button"
              aria-label="Add to wishlist"
              className="absolute right-3 top-3 rounded-full bg-white p-2.5 text-gray-500 shadow-sm transition hover:text-pink-500"
            >
              <Heart size={18} />
            </button>
          </div>

          {/* data Details */}
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                  {data.brand} · {data.category}
                </p>

                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  {data.title}
                </h2>
              </div>

              <button
                type="button"
                aria-label="Remove data"
                className="rounded-full p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              >
                <Trash2 size={19} />
              </button>
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <Star
                size={16}
                className="fill-amber-400 text-amber-400"
              />
              <span className="text-sm font-semibold text-gray-800">
                {data.rating}
              </span>
              <span className="text-xs text-gray-400">
                data rating
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
              {data.description}
            </p>

            {/* Availability */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                ● {data.availabilityStatus}
              </span>

              <span className="text-xs text-gray-400">
                {data.stock} units available
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">
                ${discountedPrice}
              </span>

              <span className="text-sm text-gray-400 line-through">
                ${data.price.toFixed(2)}
              </span>

              <span className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                <Tag size={13} />
                Save {data.discountPercentage}%
              </span>
            </div>

            {/* Quantity UI: no functionality */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
              <div>
                <p className="mb-2 text-xs font-medium text-gray-500">
                  Quantity
                </p>

                <div className="flex items-center rounded-lg border border-gray-200">
                  <button
                  onClick={() => handleDecrease(data.id)}
                    type="button"
                    aria-label="Decrease quantity"
                    className="rounded-l-lg p-2.5 text-gray-600 transition hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-10 text-center text-sm font-semibold text-gray-900">
                    {data.quantity}
                  </span>

                  <button
                  onClick={() => handleIncrease(data.id)}
                    type="button"
                    aria-label="Increase quantity"
                    className="rounded-r-lg p-2.5 text-gray-600 transition hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Subtotal
                </p>

                <p className="mt-1 text-xl font-bold text-gray-900">
                  ${discountedPrice}
                </p>
              </div>
            </div>

            {/* Delivery and Warranty */}
            <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Truck size={16} className="shrink-0 text-purple-600" />
                {data.shippingInformation}
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck
                  size={16}
                  className="shrink-0 text-purple-600"
                />
                {data.warrantyInformation}
              </div>

              <p className="pt-1 text-xs text-gray-400">
                Return policy: {data.returnPolicy}
              </p>
            </div>

            {/* Wishlist UI */}
            <button
              type="button"
              className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-pink-500"
            >
              <Heart size={16} />
              Move to Wishlist
            </button>
          </div>
        </div>
  );
};

export default CartCard;