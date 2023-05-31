import { useAuth } from "~/stores/auth";

export default function ({ redirect, route }: any) {
  const { auth } = useAuth();
  if (!auth) {
    const path = encodeURIComponent(route.path);
    return redirect(`/login?r=${path}`);
  }
}
