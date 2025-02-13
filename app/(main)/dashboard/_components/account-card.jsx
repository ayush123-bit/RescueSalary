"use client";

import { ArrowUpRight, ArrowDownRight, CreditCard } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { updateDefaultAccount } from "@/actions/account";
import { toast } from "react-toastify";

export function AccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault(); // Prevent navigation

    if (isDefault) {
      toast.warning("You need at least 1 default account", {
        position: "top-right",
      });
      return;
    }

    await updateDefaultFn(id);
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully", {
        position: "top-right",
      });
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account", {
        position: "top-right",
      });
    }
  }, [error]);

  return (
    <Card className="bg-[#1e1e1e] text-white border border-gray-700 hover:shadow-lg transition-shadow group relative rounded-lg overflow-hidden">
      <Link href={`/account/${id}`}>
        {/* Header Section */}
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold capitalize text-yellow-500">
            {name}
          </CardTitle>
          <Switch
            checked={isDefault}
            onClick={handleDefaultChange}
            disabled={updateDefaultLoading}
            className="border border-yellow-500"
          />
        </CardHeader>

        {/* Balance & Account Type */}
        <CardContent>
          <div className="text-3xl font-bold text-green-400">
            ${parseFloat(balance).toFixed(2)}
          </div>
          <p className="text-sm text-gray-400">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </p>
        </CardContent>

        {/* Footer with Income & Expense */}
        <CardFooter className="flex justify-between text-sm text-gray-400">
          <div className="flex items-center">
            <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            <span className="text-green-400">Income</span>
          </div>
          <div className="flex items-center">
            <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
            <span className="text-red-400">Expense</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
