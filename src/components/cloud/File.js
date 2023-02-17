import React from "react"

export default function File({ file }) {
  return (
    <a
      href={file.url}
      className="btn btn-outline-primary folderLink w-100">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px"><path fill="#90CAF9" d="M40 45L8 45 8 3 30 3 40 13z"/><path fill="#E1F5FE" d="M38.5 14L29 14 29 4.5z"/></svg>
      {file.name}
    </a>
  )
}
