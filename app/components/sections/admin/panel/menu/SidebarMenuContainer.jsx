import React from 'react';
import SidebarMenu from './SidebarMenu';

class SidebarMenuContainer extends React.Component{


  render() {
    const { adding, deleting, updatingPost } = this.props;
    return (
      <SidebarMenu
        adding={adding}
        deleting={deleting}
        updatingPost={updatingPost}
      />
    );
  }
}
export default SidebarMenuContainer;
