import InstagramFeed from "react-ig-feed";

const Projects = ({ accessToken }) => {
  return (
    <div className="container">
      <h1 className="header projHeader">Some of my clicks...</h1>
      <p className="subContent">
        Art, to me, is a kind of expression—a way of communicating one's
        perspective and way of thinking.
      </p>
      <InstagramFeed token={accessToken} counter="24" />
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  const accessToken = process.env.accessToken;
  return {
    props: {
      accessToken: accessToken,
    },
  };
}
