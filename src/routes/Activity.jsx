import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  HiChevronLeft,
  HiOutlinePencil,
  HiOutlineSwitchVertical,
  HiPlus,
} from 'react-icons/hi';
import Form from '../components/Form';

import {
  useCreateTodoMutation,
  useGetTodoByGroupQuery,
  useDeleteTodoMutation,
} from '../app/api/todoApiSlice';
import { useGetOneGroupQuery } from '../app/api/groupApiSlice';
import Todo from '../components/Todo';
import Header from '../components/Header';
import InlineEdit from '../components/InlineEdit';
import Content from '../components/todos/Content';

function Activity() {
  // react-router-dom
  let { id } = useParams();
  const navigate = useNavigate();

  // rtk query
  const { data, error, isError, isLoading, isSuccess } =
    useGetTodoByGroupQuery(id);
  const todos = data?.data;

  // state
  const [isOpen, setIsOpen] = useState(false);
  // const [titleEdit, setTitleEdit] = useState(title);

  // create function handler
  const [addTodo] = useCreateTodoMutation();
  const addTodoHandler = (todo) => {
    try {
      addTodo(todo);
    } catch (error) {
      console.log(error);
    }
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

  // close modal handler
  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Oh no, there was an error {error}</p>;
  } else if (isSuccess) {
    content = <Content items={todos} handleDelete={deleteTodoHandler} />;
  }

  return (
    <main className='home'>
      <Header />
      <Form
        addTodo={addTodoHandler}
        id={id}
        isOpen={isOpen}
        handleClose={handleClose}
      />
      <section className='home__content'>
        <div className='home__content-header'>
          <div className='header__left'>
            <HiChevronLeft className='icon' onClick={() => navigate(-1)} />

            {/* <InlineEdit value={titleEdit} setValue={setTitleEdit} /> */}

            <HiOutlinePencil className='icon' />
          </div>
          <div className='header__right'>
            <HiOutlineSwitchVertical className='switch_icon' />

            <button
              onClick={() => {
                setIsOpen((prev) => !prev);
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
