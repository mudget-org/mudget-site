import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-[#6ae58d] text-black rounded-full capitalize font-semibold border-2 border-solid border-[#6ae58d] hover:bg-[#5ad17c] hover:border-[#5ad17c] hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
