// WhatsApp Service for appointment confirmations

export interface AppointmentData {
  name: string;
  phone: string;
  department: string;
  date: string;
  time: string;
  notes: string;
  doctor?: string;
}

export const sendWhatsAppAppointment = (
  appointmentData: AppointmentData,
  autoOpen: boolean = true
) => {
  const displayDate = (() => {
    if (!appointmentData.date) return 'To be decided';
    const parsed = new Date(appointmentData.date);
    if (Number.isNaN(parsed.getTime())) {
      return appointmentData.date;
    }
    return parsed.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  })();

  const displayTime = appointmentData.time || 'To be decided';

  const message = `New Appointment Booking:
Name: ${appointmentData.name}
Phone: ${appointmentData.phone}
Department: ${appointmentData.department}
Doctor: ${appointmentData.doctor || 'To be assigned'}
Preferred Slot: ${displayDate} at ${displayTime}
Notes: ${appointmentData.notes || 'N/A'}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '917090900086'; // Al Nabi Hospital WhatsApp number

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  if (autoOpen && typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank');
  }

  return whatsappUrl;
};

export const validateAppointmentData = (data: AppointmentData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!data.department || !data.department.trim()) {
    errors.push('Please choose a department');
  }

  // Phone validation
  if (!data.phone || !/^[\+]?[1-9][\d]{0,15}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.push('Please enter a valid phone number');
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
