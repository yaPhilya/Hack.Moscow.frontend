import React, { Component } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

import VisibleScene from './VisibleScene'
import VisibleSidebar from './VisibleSidebar'

class App extends Component {
  render () {
    return (
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn width={2}>
            <VisibleSidebar/>
          </GridColumn>
          <GridColumn width={8}>
            <VisibleScene parent={this}/>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  }
}

export default App
