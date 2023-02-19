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
import ModalInfo from '../components/modals/ModalInfo';
import ClickOutside from '../components/ClickOutside';

function Home() {
  const dispatch = useDispatch();
  const [addNew] = useCreateGroupMutation();
  const { data: groups, isSuccess } = useGetGroupsQuery();
  const { isOpen, isDeleteComplete, ...other } = useSelector(
    (state) => state.modalAlert
  );

  const addNewGroup = () => {
    addNew({ title: 'New Activity', email: 'aladiat046@gmail.com' });
  };

  const handleModal = () => {
    if (isOpen) {
      dispatch(setModalAlert({ isOpen: false, isDeleteComplete: false }));
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
      {isOpen && (
        <ClickOutside onClick={handleModal}>
          {!isDeleteComplete ? <ModalAlert /> : <ModalInfo />}
        </ClickOutside>
      )}
      <section className='home__content'>
        <div className='home__content-header'>
          <h3 data-cy='activity-title'>Activity</h3>
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
