import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

function Form({ addTodo, id: activity_group_id, isOpen, handleClose }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addTodo({ activity_group_id, ...data });
    reset();
    handleClose();
  };

  return (
    <>
      {isOpen ? (
        <section className='modal'>
          <div className='modal__header'>
            <p>Tambah List Item</p>
            <AiOutlineClose className='icon' onClick={() => handleClose()} />
          </div>
          <hr />
          <form className='modal__form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='nama'>Nama List Item</label>
            <input {...register('title', { required: true })} />
            <label htmlFor='priority'>Priority</label>
            <select defaultValue='very_high'>
              <option>Pilih Priority</option>
              <option value='very_high'>Very High</option>
              <option value='high'>High</option>
              <option value='medium'>Medium</option>
              <option value='low'>Low</option>
              <option value='very_low'>Very Low</option>
            </select>
            <div className='modal__footer'>
              <button type='submit' disabled={!register}>
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
