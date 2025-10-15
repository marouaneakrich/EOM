import toast, { Toaster } from 'react-hot-toast';

const ConfirmToast = ({ toastId, message, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    toast.dismiss(toastId);
  };

  const handleCancel = () => {
    toast.dismiss(toastId);
  };

  return (
    <div style={{ padding: '16px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>

      <p style={{ margin: '0 0 16px', color: '#333' }}>{message}</p>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end',}}>
        <button
          onClick={handleCancel}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            background: '#ef4444',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmToast;
