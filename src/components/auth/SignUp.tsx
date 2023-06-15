import { Submit } from "components/button/Submit";
import { Schema, authType } from "../../types/Auth";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { singUp } from "../../lib/schema";
import InputMask from "react-input-mask";
import authorization from "api/authApi";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch,useAppSelector } from "../../app/hook";
import { changeAlert, changeLoading } from "../../features/contentSlice";
import { nprogress } from '@mantine/nprogress';

export const SignUp: React.FC<authType> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector((state) => state.contentSlice)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUp),
  });

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    dispatch(changeLoading(true))
    nprogress.start()
    await authorization
      .register(data)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          dispatch(changeAlert({ message: res.statusText, color: "green" }));
          dispatch(changeLoading(false))
          nprogress.complete()
        }
      })
      .catch((err) => {
        if (err.response.data.phone_number) {
          nprogress.complete()
          dispatch(changeLoading(false))
          dispatch(
            changeAlert({
              message: err.response.data.phone_number,
              color: "red",
            })
          );
        } else {
          dispatch(changeLoading(false))
          dispatch(
            changeAlert({
              message: err.response.data.password,
              color: "red",
            })
          );
          nprogress.complete()
        }
      }).finally(()=> {
        nprogress.complete()
      })
  };

  return (
    <div className="h-86 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 pb-7">
          {/* Phone number */}
          <section className="flex flex-col gap-1 h-24 mb-1">
            <label htmlFor="phone" className="font-medium">
              Telefon
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                className="block w-full p-4 pl-10 text-sm text-gray-900 placeholder-[#A5B4CB] border border-none rounded-lg bg-slate-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <p className="text-sm text-red-400">
              {errors.phone_number?.message}
            </p>
          </section>

          {/*Password */}
          <section className="flex flex-col gap-1 h-24 mb-1">
            <label htmlFor="password" className="font-medium">
              Parol
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiLock size={18} color="#A5B4CB" />
              </div>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="block  w-full p-4 pl-10 text-sm text-gray-900 border placeholder-[#A5B4CB] border-none rounded-lg bg-slate-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="*****"
                required
              />
            </div>
            <p className="text-sm text-red-400">{errors.password?.message}</p>
          </section>

          {/*Confirm password */}
          <section className="flex flex-col gap-1 h-24 mb-1">
            <label htmlFor="password" className="font-medium">
              Parolni takrorlang
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiLock size={18} color="#A5B4CB" />
              </div>
              <input
                type="password"
                id="confirm-password"
                {...register("confirmPassword")}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border placeholder-[#A5B4CB] border-none rounded-lg bg-slate-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="*****"
                required
              />
            </div>
            <p className="text-sm text-red-400">
              {errors.confirmPassword?.message}
            </p>
          </section>
        </div>
        <Submit title="Ro'yxatdan o'tish" onClick={handleSubmit(onSubmit)} />
      </form>

      {/* Already has Accoount */}
      <div className="font-medium text-md mt-6 w-full flex-center gap-1">
        Akkauntingiz bormi?
        <button disabled={isLoading} className="text-blue-600 cursor-pointer" onClick={onClick}>
          Kirish
        </button>
      </div>
    </div>
  );
};
