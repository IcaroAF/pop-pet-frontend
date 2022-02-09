import { toast } from 'react-toastify'

function SuccessMessage(message) {
  toast.success(message, {
    position: 'top-right',
    autoClose: 4000,
    closeOnClick: true,
  })
}

export default SuccessMessage
