import React, { Component } from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

import { MainView } from './scene/MainView.js'
import { Sidebar } from './sidebar/Sidebar.js'

class App extends Component {
  render () {
    return (
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn width={2}>
            <Sidebar/>
          </GridColumn>
          <GridColumn width={8}>
            <MainView parent={this}/>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  }
}

export default App
