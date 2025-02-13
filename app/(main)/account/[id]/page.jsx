import { Suspense } from "react";
import { getAccountWithTransactions } from "@/actions/account";
import { BarLoader } from "react-spinners";
import { TransactionTable } from "../_components/transaction-table";
import { notFound } from "next/navigation";
import { AccountChart } from "../_components/account-chart";
export default async function AccountPage({ params }) {
  if (!params || !params.id) {
    notFound(); // Handle case where params are missing
  }

  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5 bg-[#121212] text-white min-h-screen py-6">
      {/* Header Section */}
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-yellow-500 capitalize">
            {account.name}
          </h1>
          <p className="text-gray-400">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
          </p>
        </div>

        <div className="text-right pb-2">
          <div className="text-2xl sm:text-3xl font-bold text-green-400">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm text-gray-400">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#EAB308" />}>
        <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-md border border-gray-700">
          <AccountChart transactions={transactions} />
        </div>
      </Suspense>

      {/* Transactions Table */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#EAB308" />}>
        <div className="bg-[#1e1e1e] p-5 rounded-lg shadow-md border border-gray-700">
          <TransactionTable transactions={transactions} />
        </div>
      </Suspense>
    </div>
  );
}
