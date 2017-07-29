import React from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';

class Post extends React.Component {

  render() {
    const { posts } = this.props;
    return (
      <div className="section-single-post">
        <div className="container">
          <Link to="/blog" className="btn-link"><i className="fa fa-arrow-left"/> Go back</Link>
        </div>
      </div>
    );
  }
}

export default Post;
