import React, { useState, type ChangeEvent, type FormEvent } from "react";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import consult from "../../assets/images/hero.jpg"
import CustomInput from "../../components/input";
import CustomSelect from "../../components/selectTag";
import Button from "../../components/button";


interface FormData {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  service: string;
  date: string;
  message: string;
}

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    service: "",
    date: "",
    message: "",
  });
  const [service, setService] = useState("");
  const [country, setCountry] = useState("");

  const serviceOptions = [
    { value: "insurance", label: "Insurance Protection" },
    { value: "debt", label: "Debt Management" },
    { value: "retirement", label: "Retirement Planning" },
  ];
  const countryOptions = [
    { value: "United State", label: "United State" },
    { value: "Nigeria", label: "Nigeria" },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <Navbar
        bgColor="bg-white"
        className="shadow-xl"
        enableScrollEffect={true}
      />
      <Banner
        sectionName="Book a free Consultation"
        breadcrumbPath="consultation"
      />

      <section className="bg-[#eef3f2]/30 py-16 md:px-6 xl:px-10 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-(--primary) font-bold text-xl uppercase tracking-wider mb-2">
            Fill the form below
          </h3>

          <p className="text-gray-900 font-[300] text-lg max-w-2xl mx-auto">
            Ready to achieve more? Schedule Your Free Consultation Now and start
            building a brighter financial future!
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE IMAGE */}
          <div className="rounded-sm overflow-hidden shadow-md">
            <img
              src={consult}
              alt="Consultation"
              className="w-full h-full lg:h-[600px] object-cover"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {/* Full Name */}
              <div className="flex flex-col">
                <CustomInput
                  label="Full name"
                  placeholder="Enter your Full Name"
                  required={true}
                />
              </div>
              {/* Email */}
              <div>
                <CustomInput
                  label="Email"
                  placeholder="Enter your Email Address"
                  required={true}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {/* phone */}
              <div className="flex flex-col">
                <CustomInput
                  label="Phone Number"
                  placeholder="Enter your Phone Number"
                  required={true}
                />
              </div>
              {/* Street Address */}
              <div>
                <CustomInput
                  label="Street Address"
                  placeholder="Enter your Street Address"
                  required={true}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {/* city */}
              <div className="flex flex-col">
                <CustomInput
                  label="City"
                  placeholder="Enter your City"
                  required={true}
                />
              </div>
              {/* Street/Province */}
              <div>
                <CustomInput
                  label="State/Province"
                  placeholder="Enter your State/Province"
                  required={true}
                />
              </div>
            </div>

            {/* Country */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <CustomSelect
                  label="Select Country"
                  value={country}
                  options={countryOptions}
                  onChange={(val) => setCountry(val)}
                  required={true}
                />
              </div>

              {/* Service */}
              <div>
                <CustomSelect
                  label="Select Service"
                  value={service}
                  options={serviceOptions}
                  onChange={(val) => setService(val)}
                  required={true}
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <CustomInput label="Pick a Date" type="date" required={true} />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-[12px] font-semibold text-gray-900 mb-1">
                Your Message
              </label>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="focus:border-[2px] border-[1px] border-[#d8dadc] p-2 focus:border-(--primary) outline-none resize-none rounded-[8px] hover:border-(--primary)"
              />
            </div>

            {/* Submit */}
            <div className="mt-8">
              <Button
                text="Submit Request"
                spanBgColor="bg-white"
                iconColor="text-(--primary)"
                bgColor="bg-(--primary)"
                className="text-white w-full"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Consultation;
