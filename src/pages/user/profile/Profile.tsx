import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hook";
import "./profile.css";
import InputMask from "react-input-mask";
import { DatesProvider, DatePickerInput } from "@mantine/dates";
import { Submit } from "components/button/submit/Submit";
import authorization from "api/authApi";
import { changeAlert, changeLoading } from "features/contentSlice";
import * as yup from "yup";
import { profile } from "types/Auth";
import { nprogress } from "@mantine/nprogress";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("erkak");
  const [birthday, setBirthday] = useState<Date>();
  const [gender, setGender] = useState<string>("erkak");
  const [phone, setPhone] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const dispatch = useAppDispatch();

  const getUserInfo = async () => {
    await authorization.getProfile().then((response) => {
      const res = response.data;
      if (response.status === 200) {
        setPhone(res.phone_number);
        setFirstName(res.first_name);
        setLastName(res.last_name);
        setEmail(res.email);
        setGender(res.gender);
        setBirthday(res.birthday);
      }
    });
  };

  const onSubmit = async () => {
    dispatch(changeLoading(true));
    nprogress.start();
    const newSchema: profile = {
      gender: gender,
      birthday: "",
      phone_number: phone,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      email: email,
      user_role: "C"
    };
    await authorization
      .editProfile(newSchema)
      .then((res) => {
        if (res.status === 200) {
          dispatch(changeAlert({ message: res.statusText, color: "green" }));
          dispatch(changeLoading(false));
          nprogress.complete();
        }
      })
      .catch((err) => {
        nprogress.complete();
        dispatch(changeLoading(false));
        dispatch(
          changeAlert({
            message: err.response.data.non_field_errors,
            color: "red",
          })
        );
      })
      .finally(() => {
        dispatch(changeLoading(false));
        nprogress.complete();
      });
  };

  function handleClick(data: string) {
    setActiveTab(data);
    setGender(data);
  }

  function handleBirthday(data: Date) {
    setBirthday(data);
  }

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneValue = event.target.value;
    setPhone(phoneValue);

    yup
      .string()
      .matches(
        /^\+998\(\d{2}\) \d{3}-\d{2}-\d{2}$/,
        "Telefon raqamni kiriting!"
      )
      .validate(phoneValue)
      .catch((error) => {
        setPhoneError(error.message);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <form onSubmit={onSubmit} className="content pt-10">
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
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
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
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
      </section>

      {/* Middle name */}
      <section className="profile_section">
        <div className="profile_group">
          <label htmlFor="middle_name" className="font-medium text-lg">
            Otasining ismi <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Otasini ismi"
            className="profile_input"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </div>

        <div className="w-full"></div>
      </section>
      <div className="h-[1px] bg-gray-200 w-full" />

      {/* Email & Phone */}
      <section className="profile_section mt-4">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Elektron pochta <span className="text-blue-600">*</span>
          </label>
          <input
            type="email"
            placeholder="example@gamil.com"
            className="profile_input"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
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
            value={phone}
            id="phone"
            type="tel"
            onChange={handlePhone}
            className="profile_input"
          />
          <p className="text-sm text-red-400">
            {phoneError && <p className="text-sm text-red-400">{phoneError}</p>}
          </p>
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
      <div className="h-[1px] bg-gray-200 w-full" />

      {/* Gender & Birthday */}
      <section className="profile_section mt-4">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Tug'ilgan sana <span className="text-blue-600">*</span>
          </label>
          <DatesProvider
            settings={{ locale: "uz", firstDayOfWeek: 0, weekendDays: [0] }}
          >
            <DatePickerInput
              size="lg"
              onChange={handleBirthday}
              value={birthday}
              placeholder="Sanani tanlang"
            />
          </DatesProvider>
        </div>
        <div className="w-full"></div>
      </section>

      <section className=" pt-10">
        <Submit
          title="Ma'lumotlarni yangilash"
          onClick={onSubmit}
          active={true}
        />
      </section>
    </form>
  );
};