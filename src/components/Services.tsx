import { 
  GraduationCap, 
  FileText, 
  Phone, 
  MapPin, 
  DollarSign, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "College Selection",
    description: "Personalized recommendations based on your academic profile, interests, and career goals.",
  },
  {
    icon: FileText,
    title: "Course Details",
    description: "Complete information about courses, eligibility, duration, and career prospects.",
  },
  {
    icon: DollarSign,
    title: "Fee Structure",
    description: "Transparent fee breakdown including tuition, hostel, and other expenses.",
  },
  {
    icon: MapPin,
    title: "Campus Visits",
    description: "Organize campus tours to help you experience the college environment firsthand.",
  },
  {
    icon: Phone,
    title: "Application Support",
    description: "End-to-end assistance with application forms, documentation, and deadlines.",
  },
  {
    icon: Users,
    title: "Counseling Sessions",
    description: "One-on-one sessions to address your concerns and guide your decision-making.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            Comprehensive support to help you navigate the college admissions process with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
