import { useEffect } from "react";
import { useUserStore } from "../../store/UserStore";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const updateName = useUserStore((state) => state.updateName);
  const updateAddress = useUserStore((state) => state.updateAddress);
  const updateRole = useUserStore((state) => state.updateRole);
  const updateDob = useUserStore((state) => state.updateDob);
  const updateSkills = useUserStore((state) => state.updateSkills);
  const updatePhonenumber = useUserStore((state) => state.updatePhonenumber);
  const updateId = useUserStore((state) => state.updateId);
  const updateAvailability = useUserStore((state) => state.updateAvailability);
  const updateGender = useUserStore((state) => state.updateGender);
  const updateHours = useUserStore((state) => state.updateHours);
  const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();

    updateName("");
    updateAddress("");
    updateRole("");
    updateDob("");
    updateSkills("");
    updatePhonenumber("");
    updateId("");
    updateAvailability("");
    updateGender("");
    updateHours("");
    updateIsLoggedIn(false);

    navigate("/login");
    console.log("Logged out");
  }, []);

  return <></>;
};

export default LogoutPage;
