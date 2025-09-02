import { Suspense } from "react";
import CartWrapper from "./CartWrapper";

function CartPage() {
  return (
    <div className="mt-12 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-medium text-center">Your Shopping Cart</h1>

      <Suspense fallback={<p className="mt-8 text-center">Loading cart...</p>}>
        <CartWrapper />
      </Suspense>
    </div>
  );
}

export default CartPage;
