import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function Folder({ folder }) {
  return (
    <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
        className="folderLink"
        as={Link}
      >
        <svg viewBox="0 0 40 40" fill="none" role="img" className="dig-ContentIcon dig-ContentIcon--small"
             focusable="false" width="40" height="40" data-testid="FolderBaseDefaultSmall">
            <path
                d="M15.002 7.004c.552.018.993.252 1.295.7l.785 2.12c.145.298.363.576.561.779.252.257.633.4 1.156.4H35.5l-.002 18c-.027.976-.3 1.594-.836 2.142-.565.577-1.383.858-2.41.858H8.748c-1.026 0-1.844-.28-2.409-.858-.564-.577-.838-1.415-.838-2.465V7.003h9.502Z"
                fill="#8AA8CA"></path>
            <path
                d="M15.002 7.001c.552.018.993.252 1.295.7l.785 2.12c.145.298.363.576.561.779.252.257.633.4 1.156.4H35.5l-.002 16.84c-.027.976-.3 1.754-.836 2.302-.565.577-1.383.858-2.41.858H8.748c-1.026 0-1.844-.28-2.409-.858-.564-.577-.838-1.415-.838-2.465V7l9.502.001Z"
                fill="#A1C9F7"></path>
        </svg>
      {folder.name}
    </Button>
  )
}
