const PostsTab = () => {
  let items = [];

  for (let i = 0; i < 50000; i++) {
    items.push(<p key={i}>I am a post</p>);
  }

  return (
    <div>
      <h1>I am posts tab</h1>
      {items}
    </div>
  );
};

export default PostsTab;
