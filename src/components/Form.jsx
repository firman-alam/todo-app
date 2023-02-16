import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

function Form({ addTodo, id: activity_group_id, isOpenForm, handleCloseForm }) {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    addTodo({ activity_group_id, ...data });
    reset();
    handleCloseForm();
  };

  return (
    <>
      {isOpenForm ? (
        <section className='modal' data-cy='Tambah-List-Item'>
          <div className='modal__header'>
            <p>Tambah List Item</p>
            <AiOutlineClose
              className='icon'
              onClick={() => handleCloseForm()}
            />
          </div>
          <hr />
          <form className='modal__form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='nama'>Nama List Item</label>
            <input {...register('title', { required: true })} />
            <label htmlFor='priority'>Priority</label>
            <select defaultValue='very-high'>
              <option>Pilih Priority</option>
              <option value='very-high'>Very High</option>
              <option value='high'>High</option>
              <option value='medium'>Medium</option>
              <option value='low'>Low</option>
              <option value='very-low'>Very Low</option>
            </select>
            <div className='modal__footer'>
              <button type='submit' disabled={!formState.isValid}>
                Simpan
              </button>
            </div>
          </form>
        </section>
      ) : null}
    </>
  );
}

export default Form;
