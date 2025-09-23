// Professional Medical Gradients for Al Nabi Hospital

export const gradients = {
  // Primary Medical Gradients
  primary: {
    blue: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
    blueSoft: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
    blueModern: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    blueOcean: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
  },
  
  // Medical Professional Gradients
  medical: {
    trust: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    healing: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    care: 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)',
    wellness: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)',
  },
  
  // Department Specific Gradients
  departments: {
    cardiology: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #d63031 100%)',
    neurology: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #74b9ff 100%)',
    pediatrics: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 50%, #e17055 100%)',
    orthopedics: 'linear-gradient(135deg, #00b894 0%, #00cec9 50%, #74b9ff 100%)',
    emergency: 'linear-gradient(135deg, #e17055 0%, #d63031 50%, #2d3436 100%)',
    surgery: 'linear-gradient(135deg, #636e72 0%, #2d3436 50%, #1e272e 100%)',
    ophthalmology: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #6c5ce7 100%)',
    dermatology: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 50%, #d63031 100%)',
  },
  
  // UI Component Gradients
  ui: {
    header: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
    button: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    card: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
    modal: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    sidebar: 'linear-gradient(180deg, #1e40af 0%, #1d4ed8 100%)',
  },
  
  // Chatbot Specific Gradients
  chatbot: {
    header: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    button: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    message: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    userMessage: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    typing: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)',
  },
  
  // Background Gradients
  background: {
    hero: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
    section: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
    footer: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #3b82f6 100%)',
    overlay: 'linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(29,78,216,0.9) 100%)',
  },
  
  // Status Gradients
  status: {
    success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    error: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    info: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  }
};

// CSS Classes for gradients
export const gradientClasses = {
  // Primary gradients
  'gradient-primary': 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
  'gradient-primary-reverse': 'bg-gradient-to-tl from-blue-800 via-blue-700 to-blue-600',
  
  // Medical gradients
  'gradient-medical': 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700',
  'gradient-healing': 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600',
  'gradient-care': 'bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500',
  
  // UI gradients
  'gradient-header': 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800',
  'gradient-button': 'bg-gradient-to-r from-blue-500 to-blue-600',
  'gradient-card': 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
  'gradient-modal': 'bg-gradient-to-br from-white to-gray-50',
  
  // Chatbot gradients
  'gradient-chatbot-header': 'bg-gradient-to-r from-blue-500 to-blue-600',
  'gradient-chatbot-button': 'bg-gradient-to-r from-blue-400 to-blue-600',
  'gradient-chatbot-message': 'bg-gradient-to-br from-gray-50 to-gray-100',
  'gradient-chatbot-user': 'bg-gradient-to-r from-blue-500 to-blue-600',
  
  // Status gradients
  'gradient-success': 'bg-gradient-to-r from-green-400 to-green-600',
  'gradient-warning': 'bg-gradient-to-r from-yellow-400 to-orange-500',
  'gradient-error': 'bg-gradient-to-r from-red-400 to-red-600',
  'gradient-info': 'bg-gradient-to-r from-blue-400 to-blue-600',
};

// Hover effects for gradients
export const gradientHovers = {
  'hover-gradient-primary': 'hover:from-blue-700 hover:via-blue-800 hover:to-blue-900',
  'hover-gradient-button': 'hover:from-blue-600 hover:to-blue-700',
  'hover-gradient-card': 'hover:from-gray-100 hover:via-gray-50 hover:to-white',
};

// Animation classes for gradients
export const gradientAnimations = {
  'animate-gradient': 'animate-pulse',
  'animate-gradient-slow': 'animate-pulse',
  'animate-gradient-fast': 'animate-pulse',
};

// Utility function to get gradient style
export const getGradientStyle = (gradientKey: string): string => {
  const keys = gradientKey.split('.');
  let current: any = gradients;
  
  for (const key of keys) {
    if (current[key]) {
      current = current[key];
    } else {
      return gradients.primary.blue; // fallback
    }
  }
  
  return typeof current === 'string' ? current : gradients.primary.blue;
};

// Utility function to apply gradient to element
export const applyGradient = (element: HTMLElement, gradientKey: string): void => {
  const gradient = getGradientStyle(gradientKey);
  element.style.background = gradient;
};

// Professional color palette
export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  medical: {
    blue: '#3b82f6',
    darkBlue: '#1d4ed8',
    lightBlue: '#60a5fa',
    purple: '#8b5cf6',
    pink: '#ec4899',
    green: '#10b981',
    orange: '#f59e0b',
    red: '#ef4444',
  }
};
