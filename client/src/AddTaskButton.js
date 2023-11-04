import React, { useState } from 'react';
import './AddTaskButton.css';

function AddTaskButton() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="AddTaskButton" onClick={handleButtonClick}>
        <p>+</p>
      </div>
      {showModal && (
        <div className="Modal">
          <div className="ModalContent">
            <button className='CloseModal' onClick={handleModalClose}>x</button>
            <form>
              <label htmlFor="taskName">Task Name:</label>
              <input type="text" id="taskName" name="taskName" />
              <button type="submit">Add Task</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTaskButton;