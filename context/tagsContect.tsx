import { createContext, ReactNode, useContext, useState } from "react";

type TagsContextProviderProps = {
  children: ReactNode
}

type TagItemType = {
  tagName: string
}

type TagsContextType = {
  addTag: (tag: TagItemType) => void;
  getTags: () => TagItemType[]
}


const TagsContext = createContext({} as TagsContextType)

export function useTagsContext() {
  return useContext(TagsContext)
}

export function TagsContextProvider({ children }: TagsContextProviderProps) {
  const [Checked, setChecked] = useState<TagItemType[]>([])

  function addTag( tag: TagItemType ) {
    const currentIndex = Checked.indexOf(tag);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(tag)
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked)
  }

  function getTags() {
    return Checked;
  }

  return (
  <TagsContext.Provider value={{addTag, getTags}}>
    {children}
  </TagsContext.Provider>)
}