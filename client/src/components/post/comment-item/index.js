import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Card, Button, Avatar } from "antd";
import { deleteComment } from "../../../actions/postActions";

class CommentItem extends Component {
  onDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };
  render() {
    const { comment, postId, auth } = this.props;
    return (
      <Card className="mb-3" bordered>
        <Row type="flex" justify="space-between">
          <Col span={4} className="text-center1">
            <Link to={`profile/${comment.user}`}>
              <Avatar size={148} src={comment.avatar} alt={""} />
            </Link>
            <p className="mt-2 fs-1">{comment.name}</p>
          </Col>
          <Col span={18}>
            <p className="lead1">{comment.text}</p>
            {comment.user === auth.user.id ? (
              <Button
                onClick={() => {
                  this.onDeleteClick(postId, comment._id);
                }}
                type="danger"
                className="mr-1"
              >
                <i className="fas fa-times" />
              </Button>
            ) : null}
          </Col>
        </Row>
      </Card>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
