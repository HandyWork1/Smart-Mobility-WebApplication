import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element to enable screen reader accessibility

const LogoutModal = ({ isOpen, onRequestClose, onLogout }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal animate__animated animate__fadeIn animate__delay-1s"
      overlayClassName="overlay"
    >
      <div className="p-6 bg-white rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
          onClick={onLogout}
        >
          <i className="fa fa-sign-out mr-2" aria-hidden="true"></i>
          Logout
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
