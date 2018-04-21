import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Sidebar = ({fetchExtract}) => (
  <Form onSubmit={(e) => fetchExtract(e.target.text.value)}>
    <Form.Field label="Хочу картинок" name="text" control="textarea" rows="3"/>
    <Form.Field control={Button}>ТЫЦ</Form.Field>
  </Form>
)

Sidebar.propTypes = {
  fetchExtract: PropTypes.func,
}

export default Sidebar