import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Sidebar = ({fetchExtract}) => (
  <Form onSubmit={() => fetchExtract('aaaaa')}>
    <Form.Field label="Хочу картинок" control="textarea" rows="3"/>
    <Form.Field control={Button}>ТЫЦ</Form.Field>
  </Form>
)

Sidebar.propTypes = {
  fetchExtract: PropTypes.func,
}

export default Sidebar