import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Controller, useForm } from "react-hook-form";
import { useSendRequestContext } from "../../../Context/SendRequestContext";

const FormSection = () => {
  const { addTicket } = useSendRequestContext();
  const schema = object().shape({
    userName: string()
      .min(5)
      .matches(/^[a-zA-Z]+$/)
      .required(),
    userEmail: string()
      .email()
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
      .required(),
    subject: string().min(15).required(),
    description: string().min(30).required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      subject: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => addTicket?.(data))}>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 w-full">
            <div className="w-[50%]">
              <Controller
                control={control}
                name="userName"
                render={({ field }) => (
                  <TextField
                    className="w-full"
                    placeholder="Your Name"
                    error={!!errors.userName}
                    helperText={errors.userName ? errors.userName.message : ""}
                    {...field}
                    {...register}
                  />
                )}
              />
            </div>
            <div className="w-[50%]">
              <Controller
                control={control}
                name="userEmail"
                render={({ field }) => (
                  <TextField
                    className="w-full"
                    placeholder="Your Email"
                    error={!!errors.userEmail}
                    helperText={
                      errors.userEmail ? errors.userEmail.message : ""
                    }
                    {...field}
                    {...register}
                  />
                )}
              />
            </div>
          </div>
          <div className="">
            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <TextField
                  className="w-full"
                  placeholder="Subject"
                  error={!!errors.subject}
                  helperText={errors.subject ? errors.subject.message : ""}
                  {...field}
                  {...register}
                />
              )}
            />
          </div>
          <div className="">
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <TextField
                  className="w-full h-full"
                  placeholder="Message"
                  rows={5}
                  multiline={true}
                  error={!!errors.description}
                  helperText={
                    errors.description ? errors.description.message : ""
                  }
                  {...field}
                  {...register}
                />
              )}
            />
          </div>
          <div className="">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
