// library
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HiChevronLeft, HiOutlineSwitchVertical, HiPlus } from 'react-icons/hi';

// rtk query
import { setSort } from '../app/reducers/sortOptionsSlice';
import { setModalForm } from '../app/reducers/modalFormSlice';
import { useGetOneGroupQuery } from '../app/api/groupApiSlice';
import { setModalAlert } from '../app/reducers/modalAlertSlice';

// local components
import Content from '../components/todos/Content';
import Header from '../components/controlled/Header';
import ModalInfo from '../components/modals/ModalInfo';
import ModalForm from '../components/modals/ModalForm';
import ModalAlert from '../components/modals/ModalAlert';
import SortDropdown from '../components/sorts/SortDropdown';
import InlineEdit from '../components/controlled/InlineEdit';
import ClickOutside from '../components/controlled/ClickOutside';

const Activity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetOneGroupQuery(id);
  const { isOpen: openAlert, isDeleteComplete } = useSelector(
    (state) => state.modalAlert
  );
  const { isOpen: openSort, sortBy } = useSelector((state) => state.sortOption);
  const { isOpen: openForm, ...other } = useSelector(
    (state) => state.modalForm
  );

  // functions
  const handleModal = () => {
    if (openAlert) {
      dispatch(setModalAlert({ isOpen: false, isDeleteComplete: false }));
    } else if (openForm) {
      dispatch(setModalForm({ isOpen: false, isSubmitted: false }));
    } else if (openSort) {
      dispatch(setSort({ isOpen: false }));
    }
  };

  const handleForm = () => {
    dispatch(
      setModalForm({
        isOpen: true,
        titleForm: 'Tambahkan List Item',
        priority: 'Very High',
      })
    );
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleSortOpt = () => {
    dispatch(setSort({ isOpen: !openSort }));
  };

  // content
  let content;
  if (isSuccess) {
    content = <Content items={data} />;
  }

  return (
    <main className='home' data-cy='Item-List'>
      {/* Header */}
      <Header />

      {/* Content */}
      <section className='home__content'>
        {/* Content Header */}
        <div className='home__content-header'>
          {/* Header Left */}
          <div className='header__left'>
            <HiChevronLeft
              className='icon'
              onClick={() => handleNavigateBack()}
              data-cy='todo-back-button'
            />
            <InlineEdit />
          </div>

          {/* Header Right */}
          <div className='header__right'>
            <HiOutlineSwitchVertical
              className='button-switch'
              onClick={handleSortOpt}
              data-cy='todo-sort-button'
            />
            <button
              className='button-add'
              onClick={handleForm}
              data-cy='todo-add-button'
            >
              <HiPlus className='icon' />
              <span>Tambah</span>
            </button>
          </div>
        </div>
        {/* Content Body */}
        <article className='home__content-items'>{content}</article>
      </section>

      {/* Modals */}
      {openForm && (
        <ClickOutside onClick={handleModal}>
          <ModalForm />
        </ClickOutside>
      )}
      {openAlert && (
        <ClickOutside onClick={handleModal}>
          {!isDeleteComplete ? <ModalAlert /> : <ModalInfo />}
        </ClickOutside>
      )}
      {openSort && (
        <ClickOutside onClick={handleModal}>
          <SortDropdown />
        </ClickOutside>
      )}
    </main>
  );
};

export default Activity;
