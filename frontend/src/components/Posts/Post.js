import React from 'react';

// Redux
import { connect } from 'react-redux';

import { Avatar, Comment, Icon, Tooltip } from 'antd';
import moment from 'moment';

class Post extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {
    const { action } = this.state;
    const post = this.props.post[0] || {};
    const voteScore = post.voteScore || 0;

    const actions = [
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>Votes: {voteScore}</span>,
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
      </span>,
      <span>Reply to</span>,
    ];

    return (
      <Comment
        actions={actions}
        author={post.author}
        avatar={<Icon type="smile" />}
        content={<p>{post.body}</p>}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

function mapStateToProps ({ posts }, { id }) {
  return {
    post: Object.keys(posts)
                .filter(idx => posts[idx].id === id)
                .map((idx) => posts[idx])
  }
}

export default connect(mapStateToProps)(Post);
