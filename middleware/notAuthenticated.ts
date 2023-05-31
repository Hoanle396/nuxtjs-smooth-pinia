import { useAuth } from "~/stores/auth";

export default function ({ store, redirect }:any) {
  const { getAuth } = useAuth();  
  if (getAuth) {
    return redirect('/')
  }
}