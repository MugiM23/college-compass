import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Direct partnerships with 50+ reputed colleges",
  "Transparent fee structures with no hidden costs",
  "Personalized guidance based on your profile",
  "End-to-end support from selection to admission",
  "Regular updates on application status",
  "Post-admission assistance and support",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              With years of experience in educational consulting, we understand the challenges 
              students face during college admissions. Our dedicated team ensures you make 
              informed decisions for your future.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 opacity-0 animate-slide-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative background */}
              <div className="absolute inset-0 gradient-hero rounded-3xl opacity-10" />
              <div className="absolute inset-4 bg-card rounded-2xl shadow-elevated overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mb-6 animate-float">
                    <span className="font-display text-3xl font-bold text-foreground">🎓</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    500+ Students
                  </h3>
                  <p className="text-muted-foreground">
                    Successfully placed in their dream colleges
                  </p>
                  <div className="mt-6 flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full gradient-hero border-2 border-card flex items-center justify-center text-primary-foreground text-xs font-semibold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
