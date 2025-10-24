"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  // Close modal when escape key is pressed (only when connected)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Only allow closing if wallet is connected
        const isConnected = document.querySelector(
          '[data-wallet-connected="true"]'
        );
        if (isConnected) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset"; // Restore scrolling
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-slate-400/50 backdrop-blur-xs" />

      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all"
          onClick={(e) => e.stopPropagation()} // Prevent any click propagation
        >
          {/* Header - no close button when not connected */}
          <div className="flex items-center justify-center border-b border-gray-100 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Connect Required
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Please connect your wallet to continue
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Wallet connection is required to use Fluxoria</span>
              </div>
            </div>

            {/* RainbowKit ConnectButton with custom styling */}
            <div className="rainbowkit-custom">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  // Update data attribute for escape key handler
                  useEffect(() => {
                    if (connected) {
                      document.body.setAttribute(
                        "data-wallet-connected",
                        "true"
                      );
                    } else {
                      document.body.removeAttribute("data-wallet-connected");
                    }
                  }, [connected]);

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <button
                              onClick={openConnectModal}
                              type="button"
                              className="w-full rounded-lg bg-orange-500 px-4 py-3 font-medium text-white hover:bg-orange-600 transition-colors shadow-lg"
                            >
                              Connect Wallet
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button
                              onClick={openChainModal}
                              type="button"
                              className="w-full rounded-lg bg-red-600 px-4 py-3 font-medium text-white"
                            >
                              Switch Network
                            </button>
                          );
                        }

                        return (
                          <div className="space-y-3">
                            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-medium text-green-800">
                                  Wallet Connected: {account.displayName}
                                </span>
                              </div>
                              {account.displayBalance && (
                                <p className="text-xs text-green-600 mt-1">
                                  Balance: {account.displayBalance}
                                </p>
                              )}
                            </div>

                            <button
                              onClick={onClose}
                              type="button"
                              className="w-full rounded-lg bg-green-500 px-4 py-3 font-medium text-white hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                            >
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
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Continue to App
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>

          {/* Footer - updated message */}
          <div className="bg-gray-50 px-6 py-3">
            <p className="text-xs text-gray-500 text-center">
              New to crypto wallets?{" "}
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
