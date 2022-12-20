const TaskForm = ({ createTask, name, handleInputChange, isEditing, updateTask }) => {
  return (
    // # CONDTION IF CREATE OR EDIT A RECORD
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
      {/* # CONDTION IF CREATE OR EDIT A RECORD */}
      <button type='submit'>{isEditing ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
