import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CollegeGuide - Find Your Perfect College Match</title>
        <meta
          name="description"
          content="Expert college admissions guidance. We connect students with the right colleges, provide complete fee structures, and support you through every step of your educational journey."
        />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Hero />
          <Services />
          <WhyChooseUs />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
