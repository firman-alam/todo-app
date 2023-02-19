import { useNavigate, useParams } from 'react-router-dom';
import { HiChevronLeft, HiOutlineSwitchVertical, HiPlus } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setModalForm } from '../app/reducers/modalFormSlice';
import Content from '../components/todos/Content';
import Header from '../components/Header';
import ModalForm from '../components/modals/ModalForm';
import ModalAlert from '../components/modals/ModalAlert';
import { useGetOneGroupQuery } from '../app/api/groupApiSlice';
import { setSort } from '../app/reducers/sortOptionsSlice';
import SortDropdown from '../components/sorts/SortDropdown';
import InlineEdit from '../components/InlineEdit';
import { useEffect } from 'react';
import { setModalAlert } from '../app/reducers/modalAlertSlice';
import ModalInfo from '../components/modals/ModalInfo';
import ClickOutside from '../components/ClickOutside';

function Activity() {
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

  let content;
  if (isSuccess) {
    content = <Content items={data} />;
  }

  return (
    <main className='home' data-cy='Item-List'>
      <Header />
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
      <section className='home__content'>
        <div className='home__content-header'>
          <div className='header__left'>
            <HiChevronLeft
              className='icon'
              onClick={() => handleNavigateBack()}
              data-cy='todo-back-button'
            />
            <InlineEdit />
          </div>
          <div className='header__right'>
            <HiOutlineSwitchVertical
              className='button-switch'
              onClick={handleSortOpt}
              data-cy='todo-sort-button'
            />

            <div className='sort__open'></div>

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
        <article className='home__content-items'>{content}</article>
      </section>
    </main>
  );
}

export default Activity;
