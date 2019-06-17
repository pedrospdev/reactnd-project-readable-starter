import React, { Fragment } from 'react';

// Redux
import { connect } from 'react-redux';

import Post from './Post';

class ListOfPosts extends React.Component {
  render () {
    const postIds = this.props.postIds || [];

    return (
      <Fragment>
        { postIds.map((item) => (
          <Post id={item.id} />
        ))}
      </Fragment>
    )
  }
}

function mapStateToProps ({ posts }, { category }) {
  const cat = category || ''; 
  const postIds = Object.keys(posts)
                        .filter(idx => posts[idx].category === cat || cat === '')
                        .sort((a, b) => (a.timestamp > b.timestamp))
                        .map((idx) => { return { id: posts[idx].id } })

  return {
    postIds
  }
}

export default connect(mapStateToProps)(ListOfPosts);
