import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@chakra-ui/react';

const Notification = () => {
  return (
    <Box w={{ base: "100%", md: "50%", lg: "25%" }} p={4}>
      <ToastContainer />
    </Box>
  );
};

export const notify = (message, type = "info") => {
  toast(message, { type });
};

export default Notification;