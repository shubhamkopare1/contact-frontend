export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePhone = (phone) => {
    const phoneRegex = /^\+?\d{7,15}$/;
    return phoneRegex.test(phone);
  };
  