import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element to enable screen reader accessibility

const LogoutModal = ({ isOpen, onRequestClose, onLogout }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal animate__animated animate__fadeIn animate__delay-1s w-96"
      overlayClassName="overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      shouldCloseOnOverlayClick={true}
    >
      <div className="p-6 bg-white rounded-md">
        <div className="flex justify-end mb-2">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onRequestClose}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <hr className="my-2 border-gray-300" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <div className="flex items-center space-x-4">
          <hr className="flex-grow my-2 border-gray-300" />
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition focus:outline-none"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition focus:outline-none"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
