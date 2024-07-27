import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
   

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt="hi"
        src="https://authenticjobs.com/wp-content/uploads/2023/08/futuristic-modern_3AW1VXWVFT.jpeg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        
        <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-dark-image.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
  <div className="relative container mx-auto px-4 py-16 text-center">
    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl mb-4">
      Welcome to InterviewPrepPro
    </h2>
    <p className="text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
    Unlock Your Potential Skills with AI-Powered Interview Practice 
    </p>
  </div>
</section>
      </div>
    </section>

       
       
    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      
      <div className="max-w-xl lg:max-w-3xl">
        
       <SignIn/>
      </div>
    </main>
  </div>
</section>
  );
}