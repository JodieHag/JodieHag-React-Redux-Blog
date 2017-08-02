import React from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import Post from './post/Post';

class Blog extends React.Component {

  render() {
    const { posts } = this.props;
    return (
      <div className="main main-raised">
        <div className="section">
          <div className="section-posts">
            <div className="container">
              {posts.post.map(post => (
                <div className="post-item">
                  {post.postit ?
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
                          <span className="label label-info">{post.category}</span>
                          <div className="post_description text-left">
                            <p>{post.description}</p>
                          </div>
                          <h6>
                            <Moment
                              format="DD-MM-YYYY HH:mm"
                            >
                              {post.date}
                            </Moment>
                          </h6>
                        </div>
                      </div>
                    </div>
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
