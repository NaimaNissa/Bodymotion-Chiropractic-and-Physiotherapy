"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Calendar, Clock, User, MapPin, Filter, Phone, Mail, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

// Practitioner data with availability - Real information from Bodymotion
const practitioners = [
  {
    id: 1,
    name: "Lars Ipsen",
    specialty: "Chiropractic Care",
    qualifications: "BSc & MSc (Clinical Biomechanics)",
    image: "/api/placeholder/200/200",
    experience: "Qualified 2017",
    location: "Bodymotion, 118A London Wall, Moorgate, City of London EC2Y 5JA",
    rating: 4.9,
    reviews: 127,
    bio: "Lars qualified as a chiropractor in 2017 after completing his Master's degree in Clinical Biomechanics from the University of Southern Denmark. He has experience from private practice in both London and Denmark and is bilingual, speaking fluent English and Danish.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: {
      "Monday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Tuesday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Wednesday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Thursday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Friday": ["09:00", "10:00", "11:00", "14:00", "15:00"],
    },
  },
  {
    id: 2,
    name: "Ben Glenister",
    specialty: "Chiropractic Care",
    qualifications: "BSc(Hons) MSc PGdip (Biomechanics) DC FR",
    image: "/api/placeholder/200/200",
    experience: "Co-founder since 2006",
    location: "Bodymotion, 118A London Wall, Moorgate, City of London EC2Y 5JA",
    rating: 4.9,
    reviews: 145,
    bio: "Ben co-founded Bodymotion in 2006. He has worked within the NHS as part of a specialist back pain unit and has a keen interest in postural correction, sports injuries, biomechanics, and rehabilitation.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: {
      "Monday": ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00"],
      "Tuesday": ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00"],
      "Wednesday": ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00"],
      "Thursday": ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00", "17:00"],
      "Friday": ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00"],
    },
  },
  {
    id: 3,
    name: "Emma Daniells",
    specialty: "Chiropractic Care",
    qualifications: "BSc(Hons) MSc DC ICSSD",
    image: "/api/placeholder/200/200",
    experience: "Co-founder since 2006",
    location: "Bodymotion, 118A London Wall, Moorgate, City of London EC2Y 5JA",
    rating: 5.0,
    reviews: 178,
    bio: "Emma co-founded Bodymotion in 2006. She completed the International Chiropractic Sports Science Diploma (ICSSD) and has worked with the Cambridge Harriers and international hockey players.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: {
      "Monday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Tuesday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Wednesday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Thursday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      "Friday": ["09:00", "10:00", "11:00", "14:00", "15:00"],
    },
  },
  {
    id: 4,
    name: "Jack Finney",
    specialty: "Chiropractic Care",
    qualifications: "DC MChiro",
    image: "/api/placeholder/200/200",
    experience: "Experienced practitioner",
    location: "Bodymotion, 118A London Wall, Moorgate, City of London EC2Y 5JA",
    rating: 4.8,
    reviews: 112,
    bio: "Jack utilizes a hands-on diversified chiropractic technique combined with soft tissue work, dry needling, and taping to treat a wide range of conditions. He tailors personalized rehabilitation programs to help speed up recovery and prevent injuries from resurfacing.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: {
      "Monday": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
      "Tuesday": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
      "Wednesday": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
      "Thursday": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
      "Friday": ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
    },
  },
  {
    id: 5,
    name: "Emma Young-Smith",
    specialty: "Physiotherapy",
    qualifications: "Bachelor of Physiotherapy (Honours)",
    image: "/api/placeholder/200/200",
    experience: "Australian-trained",
    location: "Bodymotion, 118A London Wall, Moorgate, City of London EC2Y 5JA",
    rating: 4.9,
    reviews: 134,
    bio: "An Australian-trained physiotherapist with a Bachelor of Physiotherapy (Honours) from Monash University in Melbourne. She specializes in musculoskeletal physiotherapy, with a strong focus on individualized, patient-centered care.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: {
      "Monday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      "Tuesday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      "Wednesday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      "Thursday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"],
      "Friday": ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    },
  },
  {
    id: 6,
    name: "Clare Ryan",
    specialty: "Physiotherapy",
    qualifications: "BPhty MCSP",
    image: "/api/placeholder/200/200",
    experience: "Australian-trained",
    location: "Bodymotion, 118A London Wall, Moorgate, City of London EC2Y 5JA",
    rating: 4.8,
    reviews: 98,
    bio: "Clare is an Australian-trained physiotherapist with a Bachelor of Physiotherapy from the Australian Catholic University in Brisbane. She specializes in musculoskeletal physiotherapy and has a particular passion for Clinical Pilates.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: {
      "Monday": ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      "Tuesday": ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      "Wednesday": ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      "Thursday": ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      "Friday": ["10:00", "11:00", "12:00", "14:00", "15:00"],
    },
  },
];

const specialties = [
  "All Specialties",
  "Chiropractic Care",
  "Physiotherapy",
];

type BookingData = {
  practitionerId: number | null;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
};

export default function BookingPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [selectedPractitioner, setSelectedPractitioner] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingData, setBookingData] = useState<BookingData>({
    practitionerId: null,
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  });

  // Pre-fill from URL parameters
  useEffect(() => {
    const service = searchParams.get("service");
    const clinic = searchParams.get("clinic");
    const specialist = searchParams.get("specialist");

    if (service) {
      const matchingSpecialty = practitioners.find(p => 
        p.specialty.toLowerCase().includes(service.toLowerCase())
      );
      if (matchingSpecialty) {
        setSelectedPractitioner(matchingSpecialty.id);
      }
    }
  }, [searchParams]);

  const filteredPractitioners = practitioners.filter((practitioner) => {
    const matchesSearch =
      practitioner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practitioner.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All Specialties" ||
      practitioner.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleSelectPractitioner = (practitionerId: number) => {
    setSelectedPractitioner(practitionerId);
    setSelectedDate("");
    setSelectedTime("");
    setShowBookingForm(false);
    setBookingConfirmed(false);
  };

  const getAvailableDates = (practitionerId: number) => {
    const practitioner = practitioners.find(p => p.id === practitionerId);
    if (!practitioner) return [];

    const dates: string[] = [];
    const today = new Date();
    const next30Days = 30;

    for (let i = 0; i < next30Days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      
      if (practitioner.availableDays.includes(dayName)) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const getAvailableTimes = (practitionerId: number, date: string) => {
    const practitioner = practitioners.find(p => p.id === practitionerId);
    if (!practitioner || !date) return [];

    const selectedDate = new Date(date);
    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    return practitioner.timeSlots[dayName as keyof typeof practitioner.timeSlots] || [];
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowBookingForm(true);
    setBookingData({
      ...bookingData,
      practitionerId: selectedPractitioner,
      date: selectedDate,
      time: time,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking submission
    // In production, this would send data to your backend/API
    console.log("Booking submitted:", bookingData);
    
    setBookingConfirmed(true);
    
    // Reset after showing confirmation
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedPractitioner(null);
      setSelectedDate("");
      setSelectedTime("");
      setShowBookingForm(false);
      setBookingData({
        practitionerId: null,
        date: "",
        time: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        reason: "",
      });
    }, 5000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const selectedPractitionerData = practitioners.find(p => p.id === selectedPractitioner);

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 mb-3 sm:mb-4 inline-block text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
          <h1 className="text-h1 sm:text-[36px] md:text-[40px] font-medium text-gray-900 mb-2 sm:mb-4">
            Book an Appointment
          </h1>
          <p className="text-body sm:text-lg text-gray-600">
            Select a practitioner, choose your preferred date and time
          </p>
        </div>

        {bookingConfirmed ? (
          /* Booking Confirmation */
          <div className="bg-white rounded-lg shadow-md p-8 sm:p-12 text-center">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Appointment Booked Successfully!
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Your appointment with {selectedPractitionerData?.name} has been confirmed.
            </p>
            <div className="bg-primary-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
              <div className="space-y-2 text-gray-700">
                <p><strong>Date:</strong> {formatDate(bookingData.date)}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Practitioner:</strong> {selectedPractitionerData?.name}</p>
                <p><strong>Location:</strong> {selectedPractitionerData?.location}</p>
              </div>
            </div>
            <p className="text-gray-600">
              A confirmation email has been sent to {bookingData.email}
            </p>
          </div>
        ) : selectedPractitioner ? (
          /* Date and Time Selection */
          <div className="space-y-6">
            {/* Practitioner Info Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User size={32} className="text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {selectedPractitionerData?.name}
                    </h2>
                    <p className="text-primary-600 font-semibold mb-2">
                      {selectedPractitionerData?.specialty}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mb-2">
                      {selectedPractitionerData?.bio}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {selectedPractitionerData?.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span> {selectedPractitionerData?.rating} ({selectedPractitionerData?.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedPractitioner(null);
                    setSelectedDate("");
                    setSelectedTime("");
                    setShowBookingForm(false);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Date Selection */}
            {!selectedDate && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Select a Date</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {getAvailableDates(selectedPractitioner).map((date) => (
                    <button
                      key={date}
                      onClick={() => handleDateSelect(date)}
                      className="p-3 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition text-center"
                    >
                      <div className="text-sm font-semibold text-gray-900">
                        {formatDate(date)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Time Selection */}
            {selectedDate && !selectedTime && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Select a Time for {formatDate(selectedDate)}
                  </h3>
                  <button
                    onClick={() => setSelectedDate("")}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Change Date
                  </button>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {getAvailableTimes(selectedPractitioner, selectedDate).map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="p-3 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition text-center font-medium text-gray-900"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Booking Form */}
            {showBookingForm && selectedDate && selectedTime && (
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Complete Your Booking
                </h3>
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={bookingData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={bookingData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit (Optional)
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      rows={4}
                      value={bookingData.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base resize-none"
                      placeholder="Please describe your symptoms or reason for visit..."
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-primary-600 text-white px-6 py-3 sm:py-4 rounded-lg hover:bg-primary-700 transition font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      Confirm Booking
                      <CheckCircle size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowBookingForm(false);
                        setSelectedTime("");
                      }}
                      className="px-6 py-3 sm:py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : (
          /* Practitioner Selection */
          <>
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                  >
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Practitioner Cards */}
            <div className="space-y-6">
              {filteredPractitioners.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <p className="text-gray-600 text-lg">
                    No practitioners found matching your criteria.
                  </p>
                </div>
              ) : (
                filteredPractitioners.map((practitioner) => (
                  <div
                    key={practitioner.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                          <User size={48} className="text-primary-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className="text-h4 sm:text-[24px] font-normal text-gray-900 mb-2">
                              {practitioner.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-2 text-sm sm:text-base">
                              <span className="flex items-center gap-1">
                                <MapPin size={16} />
                                {practitioner.location}
                              </span>
                              <span>{practitioner.experience}</span>
                            </div>
                            <p className="text-primary-600 font-semibold mb-1">
                              {practitioner.specialty}
                            </p>
                            {(practitioner as any).qualifications && (
                              <p className="text-gray-500 text-xs mb-2">
                                {(practitioner as any).qualifications}
                              </p>
                            )}
                            <p className="text-gray-600 text-sm mb-2">
                              {practitioner.bio}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 font-semibold">
                                ★ {practitioner.rating}
                              </span>
                              <span className="text-gray-500">
                                ({practitioner.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">
                            Available Days:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {practitioner.availableDays.map((day, index) => (
                              <div
                                key={index}
                                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                              >
                                {day}
                              </div>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => handleSelectPractitioner(practitioner.id)}
                          className="bg-primary-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-primary-700 transition font-semibold flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
                        >
                          <Calendar size={18} className="sm:w-5 sm:h-5" />
                          Check Availability & Book
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
