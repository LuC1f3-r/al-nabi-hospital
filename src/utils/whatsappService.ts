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
  const message = `🏥 *Al Nabi Hospital - Appointment Confirmation*

👤 *Patient Name:* ${appointmentData.name}
📞 *Phone:* ${appointmentData.phone}
📧 *Email:* ${appointmentData.email}
🏥 *Department:* ${appointmentData.department}
👨‍⚕️ *Doctor:* ${appointmentData.doctor || 'To be assigned'}
📅 *Date:* ${appointmentData.date}
⏰ *Time:* ${appointmentData.time}
📝 *Notes:* ${appointmentData.notes || 'None'}

✅ *Appointment Status:* Confirmed
📋 *Please bring:* ID proof, previous medical records (if any)

📍 *Location:* Al Nabi Hospital, 123 Medical Center Drive, Bijapur
📞 *Contact:* +91 4 123 4567

*Thank you for choosing Al Nabi Hospital!* 🏥`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '+919876543210'; // Replace with actual hospital WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp in new tab
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
