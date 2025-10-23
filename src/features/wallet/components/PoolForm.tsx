"use client";

import { useState } from "react";

export default function PoolForm() {
  const [formData, setFormData] = useState({
    question: "",
    category: "Politics",
    outcomes: [
      { id: "yes", name: "Yes", probability: 50, color: "#10b981" },
      { id: "no", name: "No", probability: 50, color: "#ef4444" },
    ],
    volume: 0,
    deadline: "",
  });

//   const handleOutcomeChange = (
//     index: number,
//     field: "name" | "probability",
//     value: string | number
//   ) => {
//     const newOutcomes = [...formData.outcomes];
//     if (field === "probability") {
//       const prob = Number(value);
//       newOutcomes[index].probability = prob;
//       // Auto adjust other probability
//       if (index === 0) {
//         newOutcomes[1].probability = 100 - prob;
//       } else {
//         newOutcomes[0].probability = 100 - prob;
//       }
//     } else {
//       newOutcomes[index].name = String(value);
//     }
//     setFormData({ ...formData, outcomes: newOutcomes });
//   };

  return (
    <div className="rounded-2xl border border-slate-400 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Create Prediction Market
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Question</label>
          <textarea
            placeholder="Will..."
            value={formData.question}
            onChange={(e) =>
              setFormData({ ...formData, question: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option>Politics</option>
            <option>Sports</option>
            <option>Crypto</option>
          </select>
        </div>
        {/* <div>
          <label className="block text-sm text-gray-600 mb-2">Outcomes</label>
          {formData.outcomes.map((outcome, index) => (
            <div key={outcome.id} className="mb-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={outcome.name}
                  onChange={(e) =>
                    handleOutcomeChange(index, "name", e.target.value)
                  }
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Outcome name"
                />
                <input
                  type="color"
                  value={outcome.color}
                  onChange={(e) => {
                    const newOutcomes = [...formData.outcomes];
                    newOutcomes[index].color = e.target.value;
                    setFormData({ ...formData, outcomes: newOutcomes });
                  }}
                  className="w-12 h-9 border border-gray-300 rounded cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={outcome.probability}
                  onChange={(e) =>
                    handleOutcomeChange(index, "probability", e.target.value)
                  }
                  className="flex-1"
                />
                <span className="text-sm font-medium text-gray-700 w-12">
                  {outcome.probability}%
                </span>
              </div>
            </div>
          ))}
        </div> */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Initial Volume ($)
          </label>
          <input
            type="number"
            placeholder="0"
            value={formData.volume || ""}
            onChange={(e) =>
              setFormData({ ...formData, volume: Number(e.target.value) })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Deadline</label>
          <input
            type="datetime-local"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-medium hover:bg-cyan-500 transition-colors">
          Create Pool
        </button>
      </div>
    </div>
  );
}
