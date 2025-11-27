"use client";

import { submitFormData } from "@/lib/submitFormData";
import React, { useState } from "react";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function Contact({ form, fields, headers, subsections }) {
  if (!form || !fields) return null;

  // Initial form state
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Split fields
  const firstTwo = fields.slice(0, 2);
  const middleFields = fields.slice(2, -1);
  const lastField = fields[fields.length - 1];

  // Change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};
    fields.forEach((field) => {
      const value = formData[field.name]?.trim() || "";

      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = "Please enter a valid email address";
        }
      }

      if (
        field.name.toLowerCase().includes("name") &&
        value &&
        !/^[A-Za-z\s]+$/.test(value)
      ) {
        newErrors[field.name] = `${field.label} should contain only letters`;
      }

      if (
        (field.type === "tel" || field.name.toLowerCase().includes("phone")) &&
        value
      ) {
        const cleaned = value.replace(/[\s-]/g, "");
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (!phoneRegex.test(cleaned)) {
          newErrors[field.name] =
            "Please enter a valid phone number (10–15 digits)";
        }
      }

      if (field.minLength && value.length < field.minLength) {
        newErrors[
          field.name
        ] = `${field.label} must be at least ${field.minLength} characters`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await submitFormData(
        headers?.host || "localhost:3001",
        "ec6a4195-9734-4cf6-8014-b14e480277ba",
        formData
      );
      setFormData(initialFormState);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  // Render field
  const renderField = (field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      placeholder: field.placeholder || "",
      required: field.required,
      value: formData[field.name],
      onChange: handleChange,
      className:
        "w-full px-4 py-3 rounded-lg border border-red-900 focus:outline-none",
    };

    return field.type === "textarea" ? (
      <textarea rows="5" {...commonProps} />
    ) : (
      <input type={field.type} {...commonProps} />
    );
  };

  return (
    <section className="py-12 bg-gray-100" id="contact">
      <div className="container mx-auto px-4 animate-on-scroll zoom-in">
        
        <div className="md:mb-12 mb-6 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {form.title || "Get in Touch"}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {stripHtmlTags(form.description) ||
              "Have questions or want to discuss a project? Reach out to us and our team will get back to you as soon as possible."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left (Form) */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 animate-on-scroll fade-in-left">
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              {form.title || "Send us a message"}
            </p>
            <form onSubmit={handleSubmit}>
              {/* First two fields in grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 md:mb-6">
                {firstTwo.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-gray-700 mb-2"
                    >
                      {field.label}
                    </label>
                    {renderField(field)}
                    {errors[field.name] && (
                      <p className="error">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Middle fields stacked */}
              {middleFields.map((field) => (
                <div className="mb-4 md:mb-6" key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-gray-700 mb-2"
                  >
                    {field.label}
                  </label>
                  {renderField(field)}
                  {errors[field.name] && (
                    <p className="error">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              {/* Last field (textarea usually) */}
              <div className="mb-4 md:mb-6" key={lastField.name}>
                <label
                  htmlFor={lastField.name}
                  className="block text-gray-700 mb-2"
                >
                  {lastField.label}
                </label>
                {renderField(lastField)}
                {errors[lastField.name] && (
                  <p className="error">{errors[lastField.name]}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-dark_red text-white py-3 px-6 rounded-lg transition duration-300 font-medium cursor-pointer "
              >
                Send Message
              </button>

              {submitted && (
                <p className="success-message">Form submitted successfully!</p>
              )}
            </form>
          </div>

          {/* Right (Contact info + map) */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-on-scroll fade-in-up delay-100">
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </p>
              <div className="space-y-6">
                {(subsections && subsections.length > 0
                  ? subsections
                  : [
                      {
                        title: "Address",
                        description:
                          "Keranichotti near Agarwal Marble, Abash, Barua, West Bengal 721102",
                        icon: "ri-map-pin-2-fill",
                      },
                      {
                        title: "Phone",
                        description: "+91 9475540692",
                        icon: "ri-phone-fill",
                      },
                      {
                        title: "Email",
                        description: "shyamconcreto@gmail.com",
                        icon: "ri-mail-fill",
                      },
                    ]
                ).map((item, index) => (
                  <div className="flex items-start" key={index}>
                    <div className="bg-dark_red h-12 w-12 flex justify-center items-center rounded-full mr-4 flex-shrink-0">
                      <i className={`${item.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">
                        {stripHtmlTags(item.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 animate-on-scroll fade-in-up delay-200">
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                Find Us
              </p>
              <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26700.71687266707!2d87.3136128!3d22.42313185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1755764072107!5m2!1sen!2sin"
                  width="100%"
                  height="250px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .error {
          color: red;
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }
        .success-message {
          color: green;
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
}
