'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  companyName: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  commencementDate: string
  roles: string[]
  workType: string
  additionalInfo: string
  file: File | null
}

const JOB_ROLES = [
  'Practice Manager',
  'Process Worker',
  'Production Worker',
  'QA (Quality Assurance)',
  'QC (Quality Control)',
  'Receptionist',
  'Sales Representative',
  'Scheduling',
  'Scissor Lift Operator',
  'Shipping',
  'Strapping',
  'Truck Driver - HC',
  'Truck Driver - HR',
  'Truck Driver - MC',
  'Truck Driver - MR',
  'Warehouse - Dispatcher',
  'Warehouse - Inbound',
  'Warehouse - Labourer',
  'Warehouse - Picking / Packing',
  'Warehouse - Replenishment',
  'Warehouse - RF Scanning',
]

const WORK_TYPES = ['Full Time', 'Part Time', 'Casual', 'Contract']

export default function EmployerJobPostingForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    commencementDate: '',
    roles: [],
    workType: 'Part Time',
    additionalInfo: '',
    file: null,
  })

  const [fileName, setFileName] = useState<string>('No file chosen')

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value)
    setFormData((prev) => ({
      ...prev,
      roles: selectedOptions,
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file,
      }))
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="w-full bg-white">
      {/* Header Section */}

      <div className="relative bg-gradient-to-r from-[#0a1a2e] to-[#0f2a47] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <line x1="0" y1="0" x2="200" y2="200" stroke="#d4af37" strokeWidth="3" />
            <line x1="200" y1="0" x2="0" y2="200" stroke="#d4af37" strokeWidth="3" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">POST YOUR JOB</h1>
          <p className="text-lg md:text-xl text-yellow-300">Sign Up - New Business Client</p>
        </div>
      </div>


      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Form Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Write the job information</h2>
          <p className="text-base md:text-lg text-blue-600 leading-relaxed">
            If you are an employer and would like to talk to us about your current recruitment needs, fill in the form below and one of our consultants will call you back.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Name - Full Width */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Your company name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Your company name"
              className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500"
              required
            />
          </div>

          {/* First Name and Last Name - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* Email - Full Width */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500"
              required
            />
          </div>

          {/* Phone Number and Commencement Date - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Proposed Commencement Date <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="commencementDate"
                value={formData.commencementDate}
                onChange={handleInputChange}
                placeholder="Proposed Commencement Date"
                className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* Roles - Full Width Multi-Select */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Role(s) that you require filling <span className="text-red-600">*</span>
            </label>
            <select
              multiple
              value={formData.roles}
              onChange={handleRoleChange}
              className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 bg-white"
              required
            >
              {JOB_ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-600 mt-2">Hold Ctrl (or Cmd on Mac) to select multiple roles</p>
          </div>

          {/* Work Type and File Upload - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Work Type <span className="text-red-600">*</span>
              </label>
              <select
                name="workType"
                value={formData.workType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 bg-white"
                required
              >
                {WORK_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Attach Position Description <span className="text-red-600">*</span>
              </label>
              <label className="w-full px-4 py-3 border border-gray-400 bg-white cursor-pointer hover:bg-gray-50 transition flex items-center gap-2">
                <span className="text-gray-900 font-medium">Choose Files</span>
                <span className="text-gray-600 text-sm">{fileName}</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
              </label>
            </div>
          </div>

          {/* Additional Information - Full Width */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Additional Information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Additional Information"
              className="w-full px-4 py-3 border border-gray-400 focus:outline-none focus:border-blue-600 text-gray-900 placeholder-gray-500 min-h-32 resize-none"
            />
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="flex items-center gap-3 p-4 border border-gray-400 bg-white">
            <input type="checkbox" className="w-6 h-6 cursor-pointer" required />
            <div>
              <p className="text-sm text-gray-900">I'm not a robot</p>
              <p className="text-xs text-gray-600">
                reCAPTCHA is changing its terms of service.{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Take action
                </a>
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
