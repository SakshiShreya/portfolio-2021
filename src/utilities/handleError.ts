import { AxiosError } from "axios";
import { IError, IErrorJSON, IErrorType } from "../types/genericTypes";

type TSetError = (value: React.SetStateAction<IErrorType | null>) => void;

export default function handleError(err: AxiosError<IError>, setError: TSetError) {
  if (err.response?.data?.message) {
    setError({ msg: err.response.data.message, reload: true });
  } else if ((err.toJSON() as IErrorJSON).status === null) {
    setError({ msg: "Not able to fetch data properly. Could you please try again.", reload: true });
  } else {
    setError({ msg: err.message, reload: true });
  }
}