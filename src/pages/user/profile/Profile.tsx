import { useState } from "react";
import "./profile.css";
import InputMask from "react-input-mask";
import { DatesProvider, DatePickerInput } from "@mantine/dates";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("erkak");
  const [gender, setGender] = useState("");

  function handleClick(data: string) {
    setActiveTab(data);
    setGender(data);
  }

  return (
    <div className="content">
      <h1 className="text-2xl font-medium mb-4">Ma'lumotlarim</h1>

      {/* First & Last Names */}
      <section className="profile_section">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Familiya <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Familiyangizni kiriting"
            className="profile_input"
          />
        </div>

        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Ism <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Ismingizni kiriting"
            className="profile_input"
          />
        </div>
      </section>

      {/* Middle name & Phone */}
      <section className="profile_section">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Otasining ismi <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Otasining ismi"
            className="profile_input"
          />
        </div>

        <div className="w-full"></div>
      </section>

      {/* Email & Phone */}
      <section className="profile_section">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Elektron pochta <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            placeholder="example@gamil.com"
            className="profile_input"
          />
        </div>
      </section>

      {/* Email & Phone */}
      <section className="profile_section">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Telefon raqami <span className="text-blue-600">*</span>
          </label>
          <InputMask
            mask="+\9\9\8(99) 999-99-99"
            maskChar="_"
            placeholder="+998(__) ___-__-__"
            autoComplete="off"
            id="phone_number"
            type="tel"
            className="profile_input"
          />
        </div>

        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Jins <span className="text-blue-600">*</span>
          </label>
          <ul className="w-42 relative cursor-pointer flex rounded-md">
            <li
              onClick={() => handleClick("erkak")}
              className={`profile_gender ${
                activeTab === "erkak"
                  ? "border border-blue-500 "
                  : "border-gray-300"
              }`}
            >
              Erkak
            </li>
            <li
              onClick={() => handleClick("ayol")}
              className={`profile_gender ${
                activeTab === "ayol"
                  ? "border border-blue-500 "
                  : "border-gray-300"
              }`}
            >
              Ayol
            </li>
          </ul>
        </div>
      </section>

      {/* Gender & Birthday */}
      <section className="profile_section">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Tug'ilgan sana <span className="text-blue-600">*</span>
          </label>
          <DatesProvider
            settings={{ locale: "uz", firstDayOfWeek: 0, weekendDays: [0] }}
          >
            <DatePickerInput size="lg" placeholder="Sanani tanlang" />
          </DatesProvider>
        </div>
        <div className="w-full"></div>
      </section>
    </div>
  );
};
