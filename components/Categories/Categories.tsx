import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "./../../store/categoriesSlice";
import { RootState } from './../../store/store'
import styles from "./Categories.module.css";

type CaregoryName = {
  name: string;
};

const Categories: FC = () => {
  const categories = useSelector((state: RootState)  => state.categories.categoriesArray);
  const dispatch = useDispatch();

  return (
    <ul className={styles.catWrapper}>
      <li
        className={
          categories.includes("Правда")
            ? styles.catItem + " " + styles.catItemActiveTrue
            : styles.catItem
        }
        onClick={() => dispatch(addCategory("Правда"))}
      >
        Правда
      </li>
      <li
        className={
          categories.includes("Неправда")
            ? styles.catItem + " " + styles.catItemActiveNotTrue
            : styles.catItem
        }
        onClick={() => dispatch(addCategory("Неправда"))}
      >
        Неправда
      </li>
      <li
        className={
          categories.includes("Маніпуляція")
            ? styles.catItem + " " + styles.catItemActiveManipulation
            : styles.catItem
        }
        onClick={() => dispatch(addCategory("Маніпуляція"))}
      >
        Маніпуляція
      </li>
      <li
        className={
          categories.includes("Перебільшення")
            ? styles.catItem + " " + styles.catItemActiveOverrated
            : styles.catItem
        }
        onClick={() => dispatch(addCategory("Перебільшення"))}
      >
        Перебільшення
      </li>
    </ul>
  );
};

export default Categories;
