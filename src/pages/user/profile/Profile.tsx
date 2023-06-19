import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../app/hook";
import { editProfile } from "../../../lib/schema";
import "./profile.css";
import InputMask from "react-input-mask";
import { DatesProvider, DatePickerInput } from "@mantine/dates";
import { useForm } from "react-hook-form";
import { Submit } from "components/button/submit/Submit";
import authorization from "api/authApi";
import { changeAlert } from "features/contentSlice";
import * as yup from "yup";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("erkak");
  const [birthday, setBirthday] = useState<Date>(new Date());
  const [gender, setGender] = useState<string>("erkak");
  const [userId, setUserId] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfile),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      middle_name: "",
    },
  });

  const getUserInfo = async () => {
    await authorization.getProfile().then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setUserId(res.data.id);
        setPhone(res.data.phone_number);
      }
    });
  };

  const onSubmit = async (data: object) => {
    const newSchema = {
      id: userId,
      ...data,
      gender: gender,
      birthday: birthday,
      phone_numver: phone,
    };
    console.log("data ", data);
    console.log("newSchema ", newSchema);
    await authorization.editProfile(newSchema).then((res) => {
      if (res.status === 200) {
        dispatch(changeAlert({ message: res.statusText, color: "green" }));
      }
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
    <form onSubmit={handleSubmit(onSubmit)} className="content pt-10">
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
            {...register("last_name")}
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
            {...register("first_name")}
          />
        </div>
      </section>

      {/* Middle name */}
      <section className="profile_section">
        <div className="profile_group">
          <label htmlFor="last_name" className="font-medium text-lg">
            Otasining ismi <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Otasining ismi"
            className="profile_input"
            {...register("middle_name")}
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
            {...register("email")}
          />
          <p className="text-sm text-red-400">{errors.email?.message}</p>
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
          onClick={handleSubmit(onSubmit)}
          active={true}
        />
      </section>
    </form>
  );
};
