import React from "react";
import SideBar from "../components/organisms/SideBar";
import MainHeader from "../components/organisms/MainHeader";

export default function MainPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="relative flex h-[calc(100vh-5rem)] flex-1">
        <SideBar />
        <section className="flex-1 overflow-y-auto bg-[#F9F9FA]">
          {children}
        </section>
      </main>
    </div>
  );
}