// WhatsApp Service for appointment confirmations

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  department: string;
  date: string;
  time: string;
  notes: string;
  doctor?: string;
}

export const sendWhatsAppAppointment = (appointmentData: AppointmentData) => {
  const message = `New Appointment Booking:
Name: ${appointmentData.name}
Phone: ${appointmentData.phone}
Email: ${appointmentData.email}
Department: ${appointmentData.department}
Doctor: ${appointmentData.doctor || 'To be assigned'}
Date & Time: ${appointmentData.date} at ${appointmentData.time}
Notes: ${appointmentData.notes || 'N/A'}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '919738878894'; // Al Nabi Hospital WhatsApp number

  // WhatsApp URL to send the message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp chat in new tab
  window.open(whatsappUrl, '_blank');
  
  return whatsappUrl;
};

export const sendEmailAppointment = async (appointmentData: AppointmentData) => {
  // This would typically connect to your backend email service
  // For now, we'll just log the data
  console.log('Sending email confirmation:', appointmentData);
  
  // Simulate email sending
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Email confirmation sent successfully');
      resolve(true);
    }, 1000);
  });
};

export const validateAppointmentData = (data: AppointmentData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  // Phone validation
  if (!data.phone || !/^[\+]?[1-9][\d]{0,15}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.push('Please enter a valid phone number');
  }
  
  // Email validation
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Date validation
  if (!data.date) {
    errors.push('Please select an appointment date');
  } else {
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.push('Please select a future date');
    }
  }
  
  // Time validation
  if (!data.time) {
    errors.push('Please select an appointment time');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
