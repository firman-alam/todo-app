import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  HiChevronLeft,
  HiOutlinePencil,
  HiOutlineSwitchVertical,
  HiPlus,
} from 'react-icons/hi';
import {
  useCreateTodoMutation,
  useGetTodoByGroupQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../app/api/todoApiSlice';
import { Content, Dropdown, Form, Header } from '../components';
import EditForm from '../components/EditForm';

function Activity() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [dataEdit, setDataEdit] = useState(null);

  const { data, error, isError, isLoading, isSuccess } =
    useGetTodoByGroupQuery(id);
  const todos = data.data;

  // create or update function handler
  const [addTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const addTodoHandler = (todo) => {
    if (!todo.id) addTodo(todo);
    if (todo.id) updateTodo(todo);
  };

  // delete funtion handler
  const [deleteTodo] = useDeleteTodoMutation();
  const deleteTodoHandler = (id) => {
    try {
      deleteTodo(id);
    } catch (error) {
      console.log(error);
    }
  };

  // close form handler
  const handleCloseForm = () => {
    setIsOpenForm((prev) => !prev);
  };
  // close update form handler
  const handleUpdateForm = () => {
    setIsUpdateForm((prev) => !prev);
  };

  const handleEdit = (todo) => {
    setDataEdit(todo);
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Oh no, there was an error {error}</p>;
  } else if (isSuccess) {
    content = (
      <Content
        items={todos}
        handleEdit={handleEdit}
        handleUpdateForm={handleUpdateForm}
        handleDelete={deleteTodoHandler}
      />
    );
  }

  return (
    <main className='home' data-cy='Item-List'>
      <Header />
      <Form
        addTodo={addTodoHandler}
        id={id}
        isOpenForm={isOpenForm}
        handleCloseForm={handleCloseForm}
      />
      <EditForm
        data={dataEdit}
        updateTodo={addTodoHandler}
        isUpdateForm={isUpdateForm}
        handleUpdateForm={handleUpdateForm}
      />
      <section className='home__content'>
        <div className='home__content-header'>
          <div className='header__left'>
            <HiChevronLeft className='icon' onClick={() => navigate(-1)} />

            {/* <InlineEdit value={titleEdit} setValue={setTitleEdit} /> */}

            <HiOutlinePencil className='icon' />
          </div>
          <div className='header__right'>
            <button className='button-switch'>
              <HiOutlineSwitchVertical className='icon' />
            </button>

            <button
              className='button-add'
              onClick={() => {
                setIsOpenForm((prev) => !prev);
              }}
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
