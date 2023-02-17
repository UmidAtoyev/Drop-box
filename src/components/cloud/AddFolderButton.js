import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import { ROOT_FOLDER } from "../../hooks/useFolder"

export default function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const { currentUser } = useAuth()

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (currentFolder == null) return

    const path = [...currentFolder.path]
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id })
    }

    database.folders.add({
      name: name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      path: path,
      createdAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeModal()
  }

  return (
    <>
      <Button onClick={openModal} variant="outline-primary" size="sm" className="createFolderButton">
        <svg viewBox="0 0 24 24" fill="black" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24"
             focusable="false">
          <path d="M11.75 4.5V19M19 11.75H4.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path>
        </svg>
        Create folder
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form className="bg-light" onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label className="text-dark">Folder Name</Form.Label>
              <Form.Control type="text" className="bg-light" required value={name} onChange={e => setName(e.target.value)}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bg-light">
            <Button onClick={closeModal}>
              Close
            </Button>
            <Button type="submit" className="primaryButton">
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
