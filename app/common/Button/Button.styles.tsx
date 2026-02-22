"use client";
import React from "react";

export function ButtonWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function StyledButton({
  children,
  className = "",
  onClick,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`bg-transparent rounded-[41px] hover:bg-[#01F0D0] flex items-center px-3 py-1.5 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-[#072635] ml-2 font-bold ${className}`}>
      {children}
    </span>
  );
}
