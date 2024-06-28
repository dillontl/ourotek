"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import styles from "./page.module.css";
import FormAnimation from "@/app/components/lottie/form-animation";
import CheckboxAnimation from "@/app/components/lottie/checkbox-animation";
import Script from "next/script";
import { gapi } from "gapi-script";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { useMediaQuery } from "@mui/material";

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const SCOPES =
  "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events";

export default function Page() {
  const [userStep, setUserStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    consent: false,
    serviceType: "",
    otherService: "",
    summary: "",
    companyName: "",
    phoneNumber: "",
    appointmentDate: null,
    timezone: moment.tz.guess(),
  });
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: SCOPES,
        })
        .then(() => {
          const GoogleAuth = gapi.auth2.getAuthInstance();
          if (!GoogleAuth.isSignedIn.get()) {
            GoogleAuth.signIn().then(() => {
              setGapiLoaded(true);
            });
          } else {
            setGapiLoaded(true);
          }
        })
        .catch((error: any) => {
          console.error("Error initializing Google API client:", error);
        });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDateChange = (date: any) => {
    setFormData({
      ...formData,
      appointmentDate: date,
    });
  };

  const handleNext = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setUserStep((prevStep) => prevStep + 1);
      setFadeClass("fade-in");
    }, 500);
  };

  const handleAuthAndCreateEvent = async () => {
    if (!gapiLoaded) {
      console.error("Google API client is not loaded yet.");
      return;
    }

    const serviceChoice =
      formData.serviceType === "Other"
        ? formData.otherService
        : formData.serviceType;
    const startDateTime = moment
      .tz(formData.appointmentDate, formData.timezone)
      .format();
    const endDateTime = moment(startDateTime).add(1, "hours").format();

    const event = {
      summary: `Consultation Call - ${serviceChoice}`,
      description: `Consultation call with ${formData.firstName} ${formData.lastName} about ${serviceChoice}`,
      start: {
        dateTime: startDateTime,
        timeZone: formData.timezone,
      },
      end: {
        dateTime: endDateTime,
        timeZone: formData.timezone,
      },
      attendees: [{ email: formData.email }],
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
      sendUpdates: "all", // Send notifications to all attendees
    });

    request.execute((event: any) => {
      if (event.error) {
        console.error("Error creating event:", event.error.message);
      } else {
        console.log("Event created: ", event.htmlLink);
        setUserStep(4);
      }
    });
  };

  const handleCreateEventWithEmail = () => {
    const serviceChoice =
      formData.serviceType === "Other"
        ? formData.otherService
        : formData.serviceType;
    const startDateTime = moment
      .tz(formData.appointmentDate, formData.timezone)
      .format();
    const endDateTime = moment(startDateTime).add(1, "hours").format();

    // Here, you can send an email to the provided address with the event details
    // For example, using an email service API or simply displaying the event details to the user
    console.log(`Event details:
            Summary: Consultation Call - ${serviceChoice}
            Description: Consultation call with ${formData.firstName} ${formData.lastName} about ${serviceChoice}
            Start: ${startDateTime} (${formData.timezone})
            End: ${endDateTime} (${formData.timezone})
            Attendee: ${formData.email}`);

    setUserStep(4);
  };

  const renderStep = () => {
    switch (userStep) {
      case 0:
        return (
          <div className={fadeClass}>
            <form>
              <h2>Let&apos;s get started!</h2>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="consent">
                  Consent to contact
                </label>
              </div>
            </form>
            <p className={styles.consentExplanation}>
              By checking this box, you consent to be contacted by us via email
              or phone regarding our services and offers. We respect your
              privacy and you can unsubscribe from our communications at any
              time.
            </p>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handleNext}
            >
              Next <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        );
      case 1:
        return (
          <div className={fadeClass}>
            <form>
              <h2>Service Details</h2>
              <div className="mb-3">
                <label htmlFor="serviceType" className="form-label">
                  Type of Service Needed
                </label>
                <select
                  className="form-select"
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Domain Management">Domain Management</option>
                  <option value="Server Management">Server Management</option>
                  <option value="Troubleshooting">Troubleshooting</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Security">Security</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {formData.serviceType === "Other" && (
                <div className="mb-3">
                  <label htmlFor="otherService" className="form-label">
                    Please Specify
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otherService"
                    name="otherService"
                    value={formData.otherService}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="summary" className="form-label">
                  Summary of What&apos;s Needed
                </label>
                <textarea
                  className="form-control"
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleNext}
              >
                Book Consultation <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </form>
          </div>
        );
      case 2:
        return (
          <div className={fadeClass}>
            <form>
              <h2>Schedule Your Consultation</h2>
              <div className="mb-3">
                <label htmlFor="appointmentDate" className="form-label">
                  Select Date & Time
                </label>
                <DatePicker
                  selected={formData.appointmentDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  minTime={moment().hours(8).minutes(0).toDate()}
                  maxTime={moment().hours(20).minutes(0).toDate()}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="timezone" className="form-label">
                  Select Timezone
                </label>
                <select
                  className="form-select"
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                >
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="UTC">Coordinated Universal Time (UTC)</option>
                  <option value="Europe/London">
                    Greenwich Mean Time (GMT)
                  </option>
                  <option value="Europe/Berlin">
                    Central European Time (CET)
                  </option>
                  <option value="Asia/Kolkata">
                    India Standard Time (IST)
                  </option>
                  <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                  <option value="Australia/Sydney">
                    Australian Eastern Time (AET)
                  </option>
                </select>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleNext}
              >
                Next <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div className={fadeClass}>
            <div>
              <h2>Review and Confirm</h2>
              <p>
                <strong>Summary:</strong> Consultation Call -{" "}
                {formData.serviceType === "Other"
                  ? formData.otherService
                  : formData.serviceType}
              </p>
              <p>
                <strong>Description:</strong> Consultation call with{" "}
                {formData.firstName} {formData.lastName} about{" "}
                {formData.serviceType === "Other"
                  ? formData.otherService
                  : formData.serviceType}
              </p>
              <p>
                <strong>Start:</strong>{" "}
                {moment
                  .tz(formData.appointmentDate, formData.timezone)
                  .format("MMMM Do YYYY, h:mm a")}
              </p>
              <p>
                <strong>End:</strong>{" "}
                {moment
                  .tz(formData.appointmentDate, formData.timezone)
                  .add(1, "hours")
                  .format("MMMM Do YYYY, h:mm a")}
              </p>
              <p>
                <strong>Timezone:</strong> {formData.timezone}
              </p>
              <p>
                <strong>Attendee:</strong> {formData.email}
              </p>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleAuthAndCreateEvent}
              >
                Schedule using Google <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button
                type="button"
                className="btn btn-secondary mt-3 ms-3"
                onClick={handleCreateEventWithEmail}
              >
                Schedule with Email
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={fadeClass}>
            <div className={styles.finalBox}>
              <h1>Looking forward to syncing up!</h1>
              <CheckboxAnimation />
              <p>
                {formData.firstName}, we are booked for{" "}
                {moment(formData.appointmentDate).format(
                  "MMMM Do YYYY, h:mm a",
                )}
              </p>
              <p>Check your email for confirmation: {formData.email}</p>
            </div>
          </div>
        );
      default:
        return <p>Step not found</p>;
    }
  };

  return (
    <div className="my-5 container">
      <Script
        src="https://apis.google.com/js/api.js"
        onLoad={() => setGapiLoaded(true)}
      />
      <div className="pe-lg-0 align-items-center rounded-3 border shadow-lg">
        <FormAnimation />
        <div className={`my-3 ${isMobile ? "" : "mx-5"} ${styles.consultForm}`}>
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
