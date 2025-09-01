import { create } from "zustand";
import { CartStoreActionsType, CartStoreStateType } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated:false,
      addToCart: (product) =>
        set((state) => {
            const exisitngIndex = state.cart.findIndex(p=>
                 p.id ===product.id &&
                p.selectedSize=== product.selectedSize&&
                p.selectedColor === product.selectedColor 
            )
            if(exisitngIndex !== -1){
                const updatedCart = [...state.cart]
                updatedCart[exisitngIndex].quantity += product.quantity || 1
                return { cart: updatedCart }
            }
            return {
                cart:[
                    ...state.cart,{
                        ...product,
                        quantity:product.quantity || 1,
                        selectedSize:product.selectedSize,
                        selectedColor:product.selectedColor,

                    }
                ]
            }
        }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => !(
            p.id === product.id &&
            p.selectedSize === product.selectedSize &&
            p.selectedColor === product.selectedColor
          )),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: ()=> (state)=>{
        if(state){
            state.hasHydrated = true;
        }
      }
    }
  )
);

export default useCartStore;
