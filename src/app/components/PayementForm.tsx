"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

function PayementForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit: SubmitHandler<PaymentFormInputs> = (data) => {
    console.log("Payment submitted:", data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Card Holder</label>
        <input
          type="text"
          {...register("cardHolder")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Card Number</label>
        <input
          type="text"
          maxLength={16}
          {...register("cardNumber")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">
          Expiration Date
        </label>
        <input
          type="text"
          placeholder="MM/YY"
          {...register("expirationDate")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">CVV</label>
        <input
          type="text"
          maxLength={3}
          {...register("cvv")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg"
      >
        Pay Now
      </button>
    </form>
  );
}

export default PayementForm;
