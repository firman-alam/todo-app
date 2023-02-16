import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

function EditForm({ data, isUpdateForm, handleUpdateForm, updateTodo }) {
  const { register, handleSubmit, reset, formState, setValue } = useForm();

  const id = data.id;

  setValue('title', data.title);
  setValue('priority', data.priority);

  const onSubmit = (data) => {
    // let cxa = { id, ...data };
    updateTodo({ id, data });
    // console.log(cxa);
    reset();
    handleUpdateForm();
  };

  return (
    <>
      {isUpdateForm ? (
        <section className='modal'>
          <div className='modal__header'>
            <p>Tambah List Item</p>
            <AiOutlineClose
              className='icon'
              onClick={() => handleUpdateForm()}
            />
          </div>
          <hr />
          <form className='modal__form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='nama'>Nama List Item</label>
            <input {...register('title', { required: true })} />
            <label htmlFor='priority'>Priority</label>
            <select {...register('priority', { required: true })}>
              <option>Pilih Priority</option>
              <option value='very-high'>Very High</option>
              <option value='high'>High</option>
              <option value='medium'>Medium</option>
              <option value='low'>Low</option>
              <option value='very-low'>Very Low</option>
            </select>
            <div className='modal__footer'>
              <button type='submit'>Simpan</button>
            </div>
          </form>
        </section>
      ) : null}
    </>
  );
}

export default EditForm;
