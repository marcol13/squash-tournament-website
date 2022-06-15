import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const Search = ({
  inputPlaceholder,
  onClick,
  value,
}: {
  inputPlaceholder?: string;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <div>
      <Input type="search" value={value} placeholder={inputPlaceholder ?? ""} />
      <Button onClick={onClick}>Wyszukaj</Button>
    </div>
  );
};
