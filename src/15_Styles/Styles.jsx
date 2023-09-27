import React from "react";
import cn from "classnames";
// import css
import "./styles.css";

// import css module
import styles from "./styles.module.css";

// import scss module
import stylesSCSS from "./styles.module.scss";

// import CSS-in-JS
import { Title } from "./Header.styles";

export default function Styles() {
  return (
    <div>
      <h1 className="title">Styles</h1>
      <h1 className={cn(styles.title, "alert alert-danger")}>CSS Module</h1>
      <h1 className={stylesSCSS.title}>SCSS Module</h1>
      <Title color="red" bg="aqua">
        CSS-in-JS
      </Title>
    </div>
  );
}
