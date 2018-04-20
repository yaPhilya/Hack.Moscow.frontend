import React, { Component } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

class App extends Component {
  render () {
    return (
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn width={2}>
            AAAAA
          </GridColumn>
          <GridColumn width={8}>
            BBBBB
          </GridColumn>
        </GridRow>
      </Grid>
    )
  }
}

export default App
