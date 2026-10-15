  import {
    Heart,
    ShoppingCart,
    Star,
    Truck,
    ShieldCheck,
    Minus,
    Plus,
  } from "lucide-react";
  import { useContext } from "react";
  import { store } from "../context/Store";

  const ProductCard = ({ product }) => {
    const {
      title,
      brand,
      category,
      description,
      price,
      rating,
      discountPercentage,
      availabilityStatus,
      thumbnail,
      warrantyInformation,
      shippingInformation,
    } = product;

    const { toggleCart , handleDecrease,handleIncrease, settoggleCart ,setcartProducts,cartProducts } = useContext(store);



const cart = cartProducts.find(
  (item) => item.id === product.id
);


    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
      2,
    );

    return (
      <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Product Image */}
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50 p-6">
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />

          <span className="absolute left-4 top-4 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-bold text-purple-700">
            -{Math.round(discountPercentage)}% OFF
          </span>

          <button
            type="button"
            aria-label="Wishlist"
            className="absolute right-4 top-4 rounded-full bg-white p-2.5 text-gray-600 shadow-sm transition hover:bg-pink-50 hover:text-pink-500"
          >
            <Heart size={19} />
          </button>
        </div>

        {/* Product Information */}
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold capitalize text-gray-600">
              {category}
            </span>

            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {availabilityStatus}
            </span>
          </div>

          <p className="mb-1 text-sm font-medium text-purple-600">{brand}</p>

          <h3 className="min-h-12 text-lg font-bold leading-6 text-gray-900">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
            {description}
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-amber-400">
              <Star size={16} className="fill-current" />
            </div>

            <span className="text-sm font-semibold text-gray-800">{rating}</span>

            <span className="text-xs text-gray-400">Customer rating</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-end gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${discountedPrice}
            </span>

            <span className="mb-1 text-sm text-gray-400 line-through">
              ${price.toFixed(2)}
            </span>
          </div>

          {/* Product Benefits */}
          <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Truck size={15} className="shrink-0 text-purple-600" />
              <span>{shippingInformation}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={15} className="shrink-0 text-purple-600" />
              <span>{warrantyInformation}</span>
            </div>
          </div>

          {/* Button UI only */}

          {cart ? (
            <div className="flex mt-6 items-center rounded-lg border border-gray-200 justify-between">
              <button
              onClick={() => handleDecrease(product.id)}
                type="button"
                aria-label="Decrease quantity"
                className="rounded-l-lg p-2.5 text-gray-600 transition hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>

              <span className="min-w-10 text-center text-sm font-semibold text-gray-900">
                {cart.quantity}
              </span>

              <button
              onClick={() => handleIncrease(product.id)}
                type="button"
                aria-label="Increase quantity"
                className="rounded-r-lg p-2.5 text-gray-600 transition hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setcartProducts(prev => [...prev,{...product,quantity:1}])
              }}
              type="button"
              className="mt-5 flex w-full curser items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    );
  };

  export default ProductCard;
