import React from "react";

export default function Label({ text }: { text: string }) {
  return (
    <label
      htmlFor={text}
      className="font-medium capitalize leading-6 text-black"
    >
      {text}
    </label>
  );
}
