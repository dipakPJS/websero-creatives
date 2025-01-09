import WorkPageComponent from "@/components/WorkPage.component";
import FooterComponent from "@/components/Footer.component";

export default function WorkPage() {
  return (
    <div className="relative w-[100vw] overflow-x-hidden bg-black">
      {/* Work Page Content */}
      <WorkPageComponent />

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}
