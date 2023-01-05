import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    router.replace({
      pathname: '/clients/[id]/[clientprojectid]',
      query: {
        id: 'walter',
        clientprojectid: 'project-a',
      },
    });
  };

  return (
    <div>
      <h1>The Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
