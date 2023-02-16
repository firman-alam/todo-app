import {
  useCreateGroupMutation,
  useDeleteGroupMutation,
  useGetGroupsQuery,
} from '../app/api/groupApiSlice';
import { HiPlus } from 'react-icons/hi';
import Card from '../components/Card';
import Header from '../components/Header';

function Home() {
  const { data, error, isError, isLoading, isSuccess } = useGetGroupsQuery();
  const groups = data?.data;

  const [addNew] = useCreateGroupMutation();
  const addNewGroup = () => {
    try {
      addNew({
        title: 'New Activity',
        email: 'aladiat046@gmail.com',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [deleteGroup] = useDeleteGroupMutation();
  const deleteGroupById = (id) => {
    try {
      deleteGroup(id);
    } catch (error) {
      console.log(error);
    }
  };

  // content
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Oh no, there was an error {error}</p>;
  } else if (isSuccess) {
    content = groups.map((group) => {
      return (
        <Card
          key={group.id}
          id={group.id}
          title={group.title}
          date={group.created_at}
          deleteCard={() => deleteGroupById(group.id)}
        />
      );
    });
  }

  return (
    <main className='home' data-cy='activity-dashboard'>
      <Header />
      <section className='home__content'>
        <div className='home__content-header'>
          <p>Activity</p>
          <button className='button-new' onClick={addNewGroup}>
            <HiPlus className='icon' />
            <span>Tambah</span>
          </button>
        </div>
        <article className='home__content-card'>{content}</article>
      </section>
    </main>
  );
}

export default Home;
