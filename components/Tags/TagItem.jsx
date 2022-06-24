import React from "react";
import { TagsContext, useTagsContext } from "./../../context/tagsContect";
import styles from "./Tags.module.css";

export default function TagItem({ tag }) {
  const { addTag, getTags } = useTagsContext(TagsContext);
  const tags = getTags();

  const selectTag = () => {
    addTag(tag);
  };
  return (
    <span
      className={
        tags.includes(tag) ? styles.tag + " " + styles.tagSelected : styles.tag
      }
      onClick={selectTag}
    >
      {tag}
    </span>
  );
}
