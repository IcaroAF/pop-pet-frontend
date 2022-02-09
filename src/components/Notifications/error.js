import { toast } from 'react-toastify'

function ErrorMessage(message) {
  toast.error(message, {
    position: 'top-right',
    autoClose: 4000,
    closeOnClick: true,
  })
}

export default ErrorMessage
