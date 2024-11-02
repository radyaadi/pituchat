import { Outlet } from "react-router-dom";
import MainLayout from "../components/templates/MainLayout";

export default function MainPage() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
