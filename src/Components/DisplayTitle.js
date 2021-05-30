function DisplayTitle({ postInfo }) {
  //console.log(postInfo);
  if (postInfo === undefined) {
    return <div>Loading</div>;
  }

  const displayTitle = postInfo.map((posts) => {
    return (
      <div className="item" key={posts.id}>
        <div className="content">
          <a href={`https://jsonplaceholder.typicode.com/posts/${posts.id}`}>
            {posts.title}
          </a>
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{displayTitle}</div>;
}

export default DisplayTitle;
