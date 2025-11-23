"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle, X, Send, Calendar, User, Phone, Mail } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I&apos;m here to help you book an appointment or answer any questions about our services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let botResponse = "";

      if (
        lowerInput.includes("book") ||
        lowerInput.includes("appointment") ||
        lowerInput.includes("schedule")
      ) {
        setIsBooking(true);
        botResponse =
          "Great! I'd be happy to help you book an appointment. Let me gather some information from you.";
      } else if (
        lowerInput.includes("service") ||
        lowerInput.includes("treatment") ||
        lowerInput.includes("what do you offer")
      ) {
        botResponse =
          "We offer a wide range of services including Chiropractic Care, Physiotherapy, Sports Medicine, Pain Management, Postural Correction, and Rehabilitation. Would you like to book an appointment for any of these services?";
      } else if (
        lowerInput.includes("price") ||
        lowerInput.includes("cost") ||
        lowerInput.includes("fee")
      ) {
        botResponse =
          "Our pricing varies depending on the service and treatment plan. For specific pricing information, I recommend booking a consultation. Would you like to schedule one?";
      } else if (
        lowerInput.includes("location") ||
        lowerInput.includes("where") ||
        lowerInput.includes("address")
      ) {
        botResponse =
          "We are located in London, UK. You can visit us at our clinic or book a remote consultation. Would you like to book an appointment?";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse =
          "Hello! How can I help you today? You can ask me about our services, book an appointment, or get general information.";
      } else {
        botResponse =
          "I understand you're asking about that. For more detailed information, I'd recommend booking a consultation with one of our specialists. Would you like to book an appointment?";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleBookingSubmit = () => {
    if (!bookingData.name || !bookingData.email || !bookingData.phone) {
      const errorMessage: Message = {
        id: messages.length + 1,
        text: "Please fill in all required fields (Name, Email, Phone).",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      return;
    }

    // Navigate to booking page with form data
    const params = new URLSearchParams();
    if (bookingData.name) params.append("name", bookingData.name);
    if (bookingData.email) params.append("email", bookingData.email);
    if (bookingData.phone) params.append("phone", bookingData.phone);
    if (bookingData.service) params.append("service", bookingData.service);

    const queryString = params.toString();
    router.push(`/book${queryString ? `?${queryString}` : ""}`);

    const successMessage: Message = {
      id: messages.length + 1,
      text: `Perfect! I'm taking you to our booking page where you can select a practitioner and choose your preferred date and time. Is there anything else I can help you with?`,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, successMessage]);
    setIsBooking(false);
    setBookingData({ name: "", email: "", phone: "", service: "" });
  };

  const quickActions = [
    { text: "Book Appointment", action: "book" },
    { text: "Our Services", action: "services" },
    { text: "Contact Info", action: "contact" },
  ];

  const handleQuickAction = (action: string) => {
    if (action === "book") {
      setIsBooking(true);
      setInputValue("I want to book an appointment");
      handleSendMessage();
    } else if (action === "services") {
      setInputValue("What services do you offer?");
      handleSendMessage();
    } else if (action === "contact") {
      setInputValue("What is your contact information?");
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button - Pure Sports Medicine Style */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-2xl transition flex items-center gap-2 font-medium text-sm sm:text-base"
          >
            <MessageCircle size={18} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Need some help?</span>
            <span className="sm:hidden">Help</span>
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[600px] max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <div>
                <h3 className="font-semibold">Bodymotion Assistant</h3>
                <p className="text-xs text-primary-100">We&apos;re here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-700 rounded-full p-1 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Booking Form */}
            {isBooking && (
              <div className="bg-white rounded-lg p-4 shadow-sm border border-primary-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-primary-600" />
                  Appointment Details
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, phone: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      placeholder="+44 20 7374 2272"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service (Optional)
                    </label>
                    <select
                      value={bookingData.service}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, service: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="Chiropractic Care">Chiropractic Care</option>
                      <option value="Physiotherapy">Physiotherapy</option>
                      <option value="Sports Medicine">Sports Medicine</option>
                      <option value="Pain Management">Pain Management</option>
                    </select>
                  </div>
                  <button
                    onClick={handleBookingSubmit}
                    className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition font-semibold text-sm"
                  >
                    Continue to Booking
                  </button>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            {messages.length <= 2 && !isBooking && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs hover:bg-primary-200 transition"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

