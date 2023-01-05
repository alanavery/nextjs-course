import { useRouter } from 'next/router';

const SelectedProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Selected Project Page</h1>
    </div>
  );
};

export default SelectedProjectPage;
