"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function ShippingForm({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Name</label>
        <input
          type="text"
          placeholder="Abdulnour Jamal"
          {...register("name")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Email</label>
        <input
          type="email"
          placeholder="Abdulnour_Abdulrhman@outlook.com"
          {...register("email")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Phone</label>
        <input
          type="tel"
          placeholder="0797743569"
          {...register("phone")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Address</label>
        <input
          type="text"
          placeholder="Jordan - Amman"
          {...register("address")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">City</label>
        <input
          type="text"
          placeholder="Na'ur"
          {...register("city")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
}

export default ShippingForm;
