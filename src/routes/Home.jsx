import './page.scss';

// library
import { useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

// rtk query
import {
  useCreateGroupMutation,
  useGetGroupsQuery,
} from '../app/api/groupApiSlice';
import { setActivity } from '../app/reducers/activitySlice';
import { setModalAlert } from '../app/reducers/modalAlertSlice';

// local components
import Header from '../components/controlled/Header';
import ModalInfo from '../components/modals/ModalInfo';
import ModalAlert from '../components/modals/ModalAlert';
import Content from '../components/cards/Content';
import ClickOutside from '../components/controlled/ClickOutside';

const Home = () => {
  const dispatch = useDispatch();
  const [addNew] = useCreateGroupMutation();
  const { data: groups, isSuccess } = useGetGroupsQuery();
  const { isOpen, isDeleteComplete, ...other } = useSelector(
    (state) => state.modalAlert
  );

  // functions
  const addNewGroup = () => {
    addNew({ title: 'New Activity', email: 'aladiat046@gmail.com' });
  };
  const handleModal = () => {
    if (isOpen) {
      dispatch(setModalAlert({ isOpen: false, isDeleteComplete: false }));
    }
  };

  // to avoid re-render another component while rendering
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
      {/* Header */}
      <Header />

      {/* Content */}
      <section className='home__content'>
        {/* Content Header */}
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

        {/* Content Body */}
        <article className='home__content-card'>{content}</article>
      </section>

      {/* modals */}
      {isOpen && (
        <ClickOutside onClick={handleModal}>
          {!isDeleteComplete ? <ModalAlert /> : <ModalInfo />}
        </ClickOutside>
      )}
    </main>
  );
};

export default Home;
