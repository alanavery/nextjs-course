const UserIdPage = ({ id }) => {
  return <h1>{id}</h1>;
};

export default UserIdPage;

export const getServerSideProps = async (context) => {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: `userid-${userId}`,
    },
  };
};
