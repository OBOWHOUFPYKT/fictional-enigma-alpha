import React from "react";
import css from "./Button.module.css";

export const Button = ({ children, onClick }) => {
  console.log(css);
  return (
    <button type="button" onClick={onClick} className={css.button}>
      {children}
    </button>
  );
};
