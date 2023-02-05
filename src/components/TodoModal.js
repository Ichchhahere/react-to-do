import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, status });
  };
  return (
    <div>
      {modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
            >
              <MdOutlineClose />
              <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <h1 className={styles.formTitle}>Add Task</h1>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label htmlFor="status">
                  Status
                  <select
                    name="status"
                    id="staus"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">complete</option>
                  </select>
                </label>
                <div className={styles.buttonContainer}>
                  <Button type="submit" variant="primary">
                    Add Task
                  </Button>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
            <h1>This is modal</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoModal;
