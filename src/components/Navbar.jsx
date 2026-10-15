
import { House, ShoppingBag, UserRound, Sparkles } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { store } from "../context/Store";

const Navbar = () => {
  const {cartProducts} = useContext(store)
  
   const navigate = useNavigate()


  return (
    <nav className="w-full border-b border-violet-100/80 bg-[#FCFBFF] px-5 py-4 sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-md shadow-violet-200/70 transition-transform duration-300 hover:rotate-6">
            <Sparkles size={23} strokeWidth={2.2} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-800">
              lumora<span className="text-violet-500">.</span>
            </h1>
            <p className="text-[10px] font-medium tracking-[0.2em] text-slate-400">
              LITTLE THINGS, BETTER
            </p>
          </div>
        </a>

        {/* Center Navigation */}
        <div className="flex gap-10">
        <NavLink className={({isActive}) =>  isActive ? "text-violet-500" : 'text-black'} to={'/'}>Home</NavLink>
        <NavLink className={({isActive}) =>  isActive ? "text-violet-500" : 'text-black'} to={'/products'}>Producst</NavLink>

        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            onClick={() => navigate('/cart')}
            type="button"
            aria-label="Shopping cart"
            className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
          >
            <ShoppingBag
              size={20}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            {cartProducts.length>0 && 
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[9px] font-bold text-white ring-2 ring-[#FCFBFF]">
              {cartProducts.length}
            </span>
            }         
          </button>

          {/* Profile */}
          <button
            type="button"
            aria-label="User profile"
            className="group flex items-center gap-2 rounded-2xl border border-violet-100 bg-white py-1.5 pl-1.5 pr-3 shadow-sm transition-all duration-200 hover:border-violet-200 hover:bg-violet-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-teal-700 transition-transform duration-200 group-hover:scale-105">
              <UserRound size={18} strokeWidth={1.8} />
            </div>
            <span className="hidden text-sm font-semibold text-slate-700 sm:block">
              Profile
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* <div className="mt-4 flex gap-2 md:hidden">
        <a
          href="/"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-100 px-3 py-2.5 text-sm font-semibold text-violet-700"
        >
          <House size={17} />
          Home
        </a>

        <a
          href="/products"
          className="flex flex-1 items-center justify-center rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-slate-600 ring-1 ring-slate-100 transition-colors hover:bg-violet-50"
        >
          Products
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
