import {
  useCreateGroupMutation,
  useGetGroupsQuery,
} from '../app/api/groupApiSlice';
import { HiPlus } from 'react-icons/hi';
import Header from '../components/Header';
import Content from '../components/groups/Content';
import { useDispatch, useSelector } from 'react-redux';
import ModalAlert from '../components/modals/ModalAlert';
import { setActivity } from '../app/reducers/activitySlice';
import { useEffect, useRef } from 'react';
import { setModalAlert } from '../app/reducers/modalAlertSlice';

function Home() {
  const dispatch = useDispatch();
  const [addNew] = useCreateGroupMutation();
  const { data: groups, isSuccess } = useGetGroupsQuery();
  const { isOpen, isDeleteComplete, ...other } = useSelector(
    (state) => state.modalAlert
  );

  const handleClickOutside = (e) => {
    if (!e.target.classList.contains('alert')) {
      dispatch(setModalAlert({ isOpen: false }));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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

  useEffect(() => {
    dispatch(setActivity(groups));
  }, [groups]);

  // content
  let content;
  if (isSuccess) {
    content = <Content items={groups} createGroup={addNewGroup} />;
  }

  return (
    <main className='home' data-cy='activity-dashboard'>
      <Header />
      {isOpen && <ModalAlert />}
      <section className='home__content'>
        <div className='home__content-header'>
          <p data-cy='activity-title'>Activity</p>
          <button
            className='button-new'
            onClick={addNewGroup}
            data-cy='activity-add-button'
          >
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
