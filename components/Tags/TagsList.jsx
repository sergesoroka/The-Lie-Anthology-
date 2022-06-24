import React from "react";
import TagItem from "./TagItem";

import { uniqueTags } from "../../util/uniqueTags";

export default function TagsList() {
  const tags = uniqueTags.map((tag, i) => <TagItem tag={tag} key={i} />);
  return (
    <>
      <div>{tags}</div>
    </>
  );
}
