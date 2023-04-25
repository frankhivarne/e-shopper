import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { useSelector } from "react-redux";
import { adminSelector } from "../../redux/reducers/admin";
import { useRouter } from "next/router";

const Settings = () => {
  const { isAuthenticated } = useSelector(adminSelector);
  const Navigate = useRouter();
  if (!isAuthenticated) {
    Navigate.push("/login");
  }
  return (
    <DashboardLayout>
      <h1>Settings</h1>
    </DashboardLayout>
  );
};

export default Settings;
