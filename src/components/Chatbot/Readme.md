# Al Nabi Hospital Chatbot

A responsive, intelligent chatbot for Al Nabi Hospital that helps patients book appointments, get information about services, and receive WhatsApp confirmations.

## 🚀 Features

### Core Functionality
- **Appointment Booking**: Complete appointment booking flow with validation
- **WhatsApp Integration**: Automatic WhatsApp confirmation messages
- **Email Confirmations**: Email notifications for appointments
- **Service Information**: Detailed information about all hospital departments
- **Doctor Directory**: Find and book appointments with specific doctors
- **Emergency Information**: Quick access to emergency services
- **Contact Information**: Hospital contact details and operating hours

### Technical Features
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Error Handling**: Comprehensive validation and error messages
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized animations and smooth interactions
- **Dark Mode**: Automatic dark mode support
- **Touch Optimized**: Optimized for touch devices

## 📱 Responsive Design

The chatbot adapts to different screen sizes:

- **Mobile (< 768px)**: Full-screen chat window
- **Tablet (768px - 1023px)**: Medium-sized window
- **Desktop (≥ 1024px)**: Standard chat window
- **Large Desktop (≥ 1440px)**: Larger window for better readability

## 🏥 Available Services

### Departments
1. **Cardiology** - Heart care & cardiovascular health
2. **Neurology** - Brain & nervous system disorders
3. **Pediatrics** - Child healthcare & development
4. **Ophthalmology** - Eye care & vision correction
5. **Orthopedics** - Bone, joint & muscle care
6. **General Medicine** - Primary healthcare
7. **Emergency Medicine** - 24/7 urgent care
8. **Dermatology** - Skin & hair conditions
9. **Gynecology** - Women's health
10. **Urology** - Urinary system care
11. **ENT** - Ear, nose & throat
12. **Psychiatry** - Mental health support

### Doctors
Each department has multiple specialized doctors available for booking.

## 📋 Appointment Booking Process

1. **Name**: Full name validation (minimum 2 characters, letters only)
2. **Phone**: International phone number validation
3. **Email**: Email format validation
4. **Department**: Choose from available departments
5. **Doctor**: Select specific doctor or any available
6. **Date**: Future date validation
7. **Time**: Available time slots
8. **Notes**: Optional additional information

## 📱 WhatsApp Integration

When an appointment is confirmed:
- Automatic WhatsApp message is sent to the hospital
- Includes all appointment details
- Formatted for easy reading
- Contains hospital contact information

### WhatsApp Message Format:
```
🏥 Al Nabi Hospital - Appointment Confirmation

👤 Patient Name: [Name]
📞 Phone: [Phone]
📧 Email: [Email]
🏥 Department: [Department]
👨‍⚕️ Doctor: [Doctor]
📅 Date: [Date]
⏰ Time: [Time]
📝 Notes: [Notes]

✅ Appointment Status: Confirmed
📋 Please bring: ID proof, previous medical records (if any)

📍 Location: Al Nabi Hospital, 123 Medical Center Drive, Bijapur
📞 Contact: +91 709 090 0086

Thank you for choosing Al Nabi Hospital! 🏥
```

## 🛠️ Technical Implementation

### Components
- `Chatbot.tsx` - Main chatbot component
- `ChatWindow.tsx` - Chat interface
- `ChatbotIcon.tsx` - Floating action button
- `ChatbotButton.tsx` - Animated button component

### Services
- `whatsappService.ts` - WhatsApp and email integration
- `bookingStore.ts` - State management

### Styling
- `ChatbotButton.css` - Button animations
- `ChatbotResponsive.css` - Responsive design

## 🎨 Customization

### Colors
The chatbot uses a blue color scheme that can be customized:
- Primary: `#3b82f6` (blue-600)
- Secondary: `#1d4ed8` (blue-700)
- Background: `#f9fafb` (gray-50)

### WhatsApp Number
Update the WhatsApp number in `whatsappService.ts`:
```typescript
const whatsappNumber = '+919876543210'; // Replace with actual number
```

### Hospital Information
Update hospital details in the service responses:
- Address
- Phone numbers
- Operating hours
- Contact email

## 🔧 Installation & Usage

1. **Import the chatbot** in your main component:
```tsx
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <div>
      {/* Your app content */}
      <Chatbot />
    </div>
  );
}
```

2. **Add required dependencies**:
```json
{
  "framer-motion": "^10.0.0",
  "lucide-react": "^0.263.0",
  "zustand": "^4.4.0"
}
```

3. **Import CSS files** in your main CSS:
```css
@import './components/Chatbot/ChatbotResponsive.css';
```

## 🚨 Error Handling

The chatbot includes comprehensive error handling:

- **Input Validation**: Real-time validation for all form fields
- **Error Messages**: Clear, user-friendly error messages
- **Fallback Responses**: Graceful handling of unexpected inputs
- **Network Errors**: Handles WhatsApp/email service failures

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **High Contrast**: High contrast mode support
- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Proper focus handling
- **Touch Targets**: Minimum 44px touch targets

## 📊 Performance Optimizations

- **Lazy Loading**: Components load only when needed
- **Debounced Input**: Prevents excessive API calls
- **Optimized Animations**: Hardware-accelerated animations
- **Memory Management**: Proper cleanup of event listeners
- **Bundle Size**: Minimal dependencies

## 🔒 Security Considerations

- **Input Sanitization**: All user inputs are sanitized
- **XSS Prevention**: No direct HTML injection
- **Data Privacy**: No sensitive data stored locally
- **HTTPS Only**: WhatsApp links use secure protocol

## 🧪 Testing

The chatbot can be tested with various scenarios:

1. **Appointment Booking**: Complete booking flow
2. **Error Handling**: Invalid inputs and edge cases
3. **Responsive Design**: Different screen sizes
4. **Accessibility**: Keyboard and screen reader testing
5. **WhatsApp Integration**: Message formatting and sending

## 📈 Future Enhancements

- **AI Integration**: Natural language processing
- **Voice Support**: Voice-to-text and text-to-speech
- **Multi-language**: Internationalization support
- **Analytics**: Usage tracking and insights
- **Offline Support**: PWA capabilities
- **Video Calls**: Integration with telemedicine platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For technical support or questions:
- Email: alnabihospital@gmail.com
- Phone: +91 709 090 0086
- GitHub Issues: Create an issue in the repository

---

**Built with ❤️ for Al Nabi Hospital**