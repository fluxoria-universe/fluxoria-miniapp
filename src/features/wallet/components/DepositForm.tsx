export default function DepositForm() {
  return (
    <div className="rounded-2xl border border-slate-400 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Deposit Funds
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Select Asset
          </label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option>USDT</option>
            <option>IDRX</option>
            <option>BTC</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Amount</label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Network</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option>TRC20</option>
            <option>ERC20</option>
            <option>BEP20</option>
          </select>
        </div>
        <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-medium">
          Generate Address
        </button>
      </div>
    </div>
  );
}
