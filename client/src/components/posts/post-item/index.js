import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Badge, Card, Button, Row, Col, Avatar } from "antd";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../../actions/postActions";

class PostItem extends Component {
  onDeleteClick = id => {
    this.props.deletePost(id);
  };

  onLikeClick = id => {
    this.props.addLike(id);
  };

  onUnLikeClick = id => {
    this.props.removeLike(id);
  };

  findUserLike = likes => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { post, auth, showActions } = this.props;
    debugger;
    return (
      <Card className="mb-3" bordered>
        <Row type="flex" justify="space-between">
          <Col span={4} className="text-center1">
            <Link to={`profile/${post.user}`}>
              <Avatar size={148} src={post.avatar} alt={""} />
            </Link>
            <p className="mt-2 fs-1">{post.name}</p>
          </Col>
          <Col span={18}>
            <p className="lead1">{post.text}</p>
            {showActions ? (
              <React.Fragment>
                <Button
                  size="large"
                  className="mr-1"
                  onClick={() => {
                    this.onLikeClick(post._id);
                  }}
                >
                  <i
                    className={classnames("fas fa-thumbs-up mr-1", {
                      "primary-color": this.findUserLike(post.likes)
                    })}
                  />
                  <Badge>{post.likes.length}</Badge>
                </Button>
                <Button
                  size="large"
                  className="mr-1"
                  onClick={() => {
                    this.onUnLikeClick(post._id);
                  }}
                >
                  <i className="fas fa-thumbs-down" />
                </Button>
                <Button className="mr-1" type="primary" size="large">
                  <Link to={`/post/${post._id}`}>Comments</Link>
                </Button>
                {post.user === auth.user.id ? (
                  <Button
                    size="large"
                    type="danger"
                    onClick={() => {
                      this.onDeleteClick(post._id);
                    }}
                  >
                    <i className="fas fa-times" />
                  </Button>
                ) : null}
              </React.Fragment>
            ) : null}
          </Col>
        </Row>
      </Card>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
