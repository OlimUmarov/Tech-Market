import '../auth.css'
import { Submit } from "components/button/submit/Submit";
import { Schema, authType } from "../../../types/Auth";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singUp } from "../../../lib/schema";
import InputMask from "react-input-mask";
import authorization from "api/authApi";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { changeAlert, changeLoading, changeToken } from "../../../features/contentSlice";
import { nprogress } from "@mantine/nprogress";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../../lib/itemStorage";

export const SignUp: React.FC<authType> = ({ onClick, closeModel }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.contentSlice);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUp),
  });

  const onSubmit: SubmitHandler<object> = async (data) => {
    dispatch(changeLoading(true));
    nprogress.start();

    await authorization
      .register(data)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          authorization
            .login(data)
            .then((res) => {
              setItem("access_token", res.data.auth_token);
              if (res.status === 201 || res.status === 200) {
                dispatch(changeLoading(false));
                dispatch(
                  changeAlert({ message: res.statusText, color: "green" })
                );
                closeModel(true);
                nprogress.complete();
                navigate('/');
                dispatch(changeToken(true))
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
              nprogress.complete();
            });
        }
      })
      .catch((err) => {
        if (err.response.data.phone_number) {
          nprogress.complete();
          dispatch(changeLoading(false));
          dispatch(
            changeAlert({
              message: err.response.data.phone_number,
              color: "red",
            })
          );
        } else {
          dispatch(changeLoading(false));
          dispatch(
            changeAlert({
              message: err.response.data.password,
              color: "red",
            })
          );
          nprogress.complete();
        }
      });
  };

  return (
    <div className="h-86 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 pb-7">
          
          {/* Phone number */}
          <section className="auth_section">
            <label htmlFor="phone" className="font-medium">
              Telefon
            </label>
            <div className="relative">
              <div className="auth_icon">
                <AiOutlinePhone size={18} color="#A5B4CB" />
              </div>
              <InputMask
                mask="+\9\9\8(99) 999-99-99"
                maskChar="_"
                placeholder="+998(__) ___-__-__"
                autoComplete="off"
                {...register("phone_number", { required: true })}
                id="phone_number"
                type="tel"
                className="auth_input"
              />
            </div>
            <p className="text-sm text-red-400">
              {errors.phone_number?.message}
            </p>
          </section>

          {/*Password */}
          <section className="auth_section">
            <label htmlFor="password" className="font-medium">
              Parol
            </label>
            <div className="relative">
              <div className="auth_icon">
                <CiLock size={18} color="#A5B4CB" />
              </div>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="auth_input"
                placeholder="*****"
                required
              />
            </div>
            <p className="text-sm text-red-400">{errors.password?.message}</p>
          </section>

          {/*Confirm password */}
          <section className="auth_section">
            <label htmlFor="password" className="font-medium">
              Parolni takrorlang
            </label>
            <div className="relative">
              <div className="auth_icon">
                <CiLock size={18} color="#A5B4CB" />
              </div>
              <input
                type="password"
                id="confirm-password"
                {...register("confirmPassword")}
                className="auth_input"
                placeholder="*****"
                required
              />
            </div>
            <p className="text-sm text-red-400">
              {errors.confirmPassword?.message}
            </p>
          </section>
        </div>
        <Submit title="Ro'yxatdan o'tish" onClick={handleSubmit(onSubmit)} active={true}/>
      </form>

      {/* Already has Accoount */}
      <div className="auth_link">
        Akkauntingiz bormi?
        <button
          disabled={isLoading}
          className="text-blue-600 cursor-pointer"
          onClick={onClick}
        >
          Kirish
        </button>
      </div>
    </div>
  );
};
