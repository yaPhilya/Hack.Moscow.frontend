import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const Sidebar = () => (
  <Form>
    <Form.Field label="Хочу картинок" control="textarea" rows="3"/>
    <Form.Field control={Button}>ТЫЦ</Form.Field>
  </Form>
)

export default Sidebar