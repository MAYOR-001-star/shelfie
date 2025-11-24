import { useRouter } from "expo-router";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked) {
      if (!user) {
        router.replace("/login");
      }
    }
  }, [authChecked, user]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }

  return children;
};

export default UserOnly;
