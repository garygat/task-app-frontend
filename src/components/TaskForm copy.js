const TaskFormDel = ({ createTask, name, handleInputChange, isEditing, updateTask }) => {
  return (
    <form
      className='task-form'
      onSubmit={isEditing ? updateTask : createTask}
    >
      <input
        type='text'
        name='name'
        id=''
        placeholder='Add a task'
        maxLength={25}
        value={name}
        onChange={handleInputChange}
      />
      <button type='submit'>{isEditing ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default TaskFormDel;
