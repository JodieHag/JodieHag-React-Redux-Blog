import React from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import TabsCategories from './tabs/TabsCategories';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.categorySelected = this.props.categorySelected.bind(this);
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="main main-raised">
        <TabsCategories onSelected={this.categorySelected} />
        <div className="section">
          <div className="section-posts">
            <div className="container">
              {posts.post.map(post => (
                <div className="post-item">
                  {post.postit ?
                    ((post.category === posts.category) || (posts.category === 'all')
                    ?
                    <div className="col-md-4 col-sm-6 post-item__box" key={post._id}>
                      <div className="post card card-signup">
                        <div className="post__header">
                          <div className="post__info header text-center">
                            <Link to={`/blog/${post.url}`} className="full-container-link">
                              <h3 className="post__title text-white">{post.title}</h3>
                            </Link>
                          </div>
                        </div>
                        <div className="post__body text-center">
                          <span className="label label-primary primary">{post.category}</span>
                          <div className="post_description text-left">
                            <p>{post.description}</p>
                          </div>
                          <span className="label label-success">
                            <Moment
                              format="DD-MM-YYYY"
                            >
                              {post.date}
                            </Moment>
                          </span>
                        </div>
                      </div>
                    </div>
                    :
                    null
                    )
                    :
                    null
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;

Blog.propTypes = {
  posts: PropTypes.object,
  categorySelected: PropTypes.func.isRequired
};

Blog.defaultProps = {
  posts: {}
};
