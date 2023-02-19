import { HiOutlinePencil } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { setTitle } from '../../app/reducers/titleSlice';
import { useUpdateGroupMutation } from '../../app/api/groupApiSlice';
import { setSelectedActivity } from '../../app/reducers/selectedActivitySlice';

const InlineEdit = () => {
  const { id } = useParams();
  const { path } = useLocation();
  const dispatch = useDispatch();
  const [updateGroup] = useUpdateGroupMutation();
  const { title: titleSelected, todo_items } = useSelector(
    (state) => state.selectedActivity
  );
  const { title: titleActivity, isEditing } = useSelector(
    (state) => state.title
  );

  const handleTitle = () =>
    dispatch(setTitle({ title: titleSelected, isEditing: true }));
  const handleChange = (e) => dispatch(setTitle({ title: e.target.value }));

  const handleUpdate = async () => {
    await updateGroup({ id, title: titleActivity });
    dispatch(setSelectedActivity({ title: titleActivity }));
    dispatch(setTitle({ title: null, isEditing: false }));
  };

  const handleSync = async () => {
    if (titleActivity === titleSelected) {
      dispatch(setTitle({ title: null, isEditing: false }));
    } else if (!titleActivity) {
      dispatch(setTitle({ title: titleActivity, isEditing: false }));
    } else {
      await handleUpdate();
    }
  };

  const onKeyDown = async (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      await handleSync();
    }
  };

  return (
    <div className='inline-edit'>
      {!isEditing && path !== '/' && (
        <h3 data-cy='todo-title' onClick={handleTitle}>
          {titleSelected}
        </h3>
      )}
      {isEditing && path !== '/' && (
        <input
          autoFocus
          type='text'
          className='edit__title'
          onChange={handleChange}
          onKeyDown={onKeyDown}
          onBlur={handleSync}
          value={titleActivity}
        />
      )}
      {path !== '/' && (
        <HiOutlinePencil
          className='edit__icon'
          data-cy='todo-title-edit-button'
          onClick={handleTitle}
          onBlur={handleSync}
        />
      )}
    </div>
  );
};

export default InlineEdit;
