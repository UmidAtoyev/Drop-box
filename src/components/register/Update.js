import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function Update() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [Error, setError] = useState("")
  const [Loading, setLoading] = useState(false)
  const history = useHistory()

  function Submit(e) {
    e.preventDefault()
    if 
    (passwordRef.current.value !== passwordConfirmRef.current.value) 
    {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if 
    (emailRef.current.value !== currentUser.email) 
    {
      promises.push(updateEmail
        (emailRef.current.value))
    }
    if 
    (passwordRef.current.value) {
      promises.push(updatePassword
        (passwordRef.current.value))
    }





    Promise.all(promises).then(() => 
    {
        history.push("/")
      })
      .catch(() => 
      {
        setError("Failed to update account")
      })
      .finally(() => 
      {
        setLoading(false)
      })
  }

  return (
    <div className="background2">
      <CenteredContainer className="formContent">
          
            <Card.Body className="formContent">
              <h2 className="text-center mb-4">Update Profile</h2>
              {Error && <Alert variant="danger">{Error}</Alert>}
              <Form onSubmit={Submit}>
                  <Form.Label className="label-item sm-3">Email:</Form.Label>
                  <Form.Control className="bg-light text-secondary" placeholder="email" type="email" ref={emailRef} required defaultValue={currentUser.email}/><br/>
                  <Form.Label className="label-item sm-3">New Password:</Form.Label>
                  <Form.Control className="bg-light text-secondary" placeholder="password" type="password" ref={passwordRef}/><br/>
                  <Form.Label className="label-item sm-3">Password again:</Form.Label>
                  <Form.Control className="bg-light text-secondary" placeholder="password again" type="password" ref={passwordConfirmRef}/><br/>
                
                <Button disabled={Loading} className="loginButton" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
            <div className="w-100 p-3 h-50 text-center border-top border bg-light">
              <Link to="/" className="d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" width="20" height="20">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                </svg> &nbsp; Back</Link>
            </div>
      </CenteredContainer>
    </div>
  )
}
