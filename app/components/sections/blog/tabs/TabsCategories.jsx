import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

class TabsCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs>
        <Tab
          label="All"
          onClick={this.props.onSelected.bind(this, 'all')}
          onTouchTap={this.props.onSelected.bind(this, 'all')}
          className="primary"
        />
        <Tab
          label="Developer"
          icon={<FontIcon className="material-icons">code</FontIcon>}
          onClick={this.props.onSelected.bind(this, 'Developer')}
          onTouchTap={this.props.onSelected.bind(this, 'Developer')}
          className="primary"
        />
        <Tab
          label="Human Error"
          icon={<FontIcon className="fa fa-bug" />}
          onClick={this.props.onSelected.bind(this, 'Human Error')}
          onTouchTap={this.props.onSelected.bind(this, 'Human Error')}
          className="primary"
        />
        <Tab
          label="Feminist"
          icon={<FontIcon className="fa fa-venus" />}
          onClick={this.props.onSelected.bind(this, 'Feminist')}
          onTouchTap={this.props.onSelected.bind(this, 'Feminist')}
          className="primary"
        />
        <Tab
          label="Traveling"
          icon={<FontIcon className="fa fa-plane" />}
          onClick={this.props.onSelected.bind(this, 'Traveling')}
          onTouchTap={this.props.onSelected.bind(this, 'Traveling')}
          className="primary"
        />
      </Tabs>
    );
  }
}


export default TabsCategories;
