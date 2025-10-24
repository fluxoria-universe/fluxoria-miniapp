"use client";

import { useState } from "react";
import Toast from "./Toast";

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

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      // Reset form
      setFormData({
        question: "",
        category: "Politics",
        outcomes: [
          { id: "yes", name: "Yes", probability: 50, color: "#10b981" },
          { id: "no", name: "No", probability: 50, color: "#ef4444" },
        ],
        volume: 0,
        deadline: "",
      });
    }, 1000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-200 p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Create Prediction Market
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question
            </label>
            <textarea
              placeholder="Will..."
              value={formData.question}
              onChange={(e) =>
                setFormData({ ...formData, question: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none transition-all"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <div className="relative">
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent appearance-none bg-white transition-all"
                required
              >
                <option>Politics</option>
                <option>Sports</option>
                <option>Crypto</option>
                <option>Entertainment</option>
                <option>Technology</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Volume ($)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                placeholder="0"
                value={formData.volume || ""}
                onChange={(e) =>
                  setFormData({ ...formData, volume: Number(e.target.value) })
                }
                className="w-full border border-gray-300 rounded-lg pl-7 pr-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deadline
            </label>
            <input
              type="datetime-local"
              value={formData.deadline}
              onChange={(e) =>
                setFormData({ ...formData, deadline: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Create Pool
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      <Toast
        message="Permissionless belongs to you soon!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
