import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: <Palette className="h-8 w-8 text-secondary" />,
      title: "Creative Design",
      description: "Combining aesthetics with functionality to create visually appealing user experiences."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer from Nepal with a love for creating 
            innovative web solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              With several years of experience in web development, I've worked with a diverse 
              range of technologies and frameworks. My passion lies in building user-centric 
              applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-4">
              I believe in continuous learning and staying updated with the latest trends 
              in technology. Whether it's frontend frameworks, backend architecture, or 
              emerging technologies, I'm always eager to explore and master new skills.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring the beautiful landscapes of Nepal, 
              reading tech blogs, or contributing to open-source projects.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-secondary rounded-lg p-8 shadow-elegant">
              <h4 className="text-xl font-semibold text-secondary-foreground mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-secondary-foreground">
                <li>🇳🇵 Based in Nepal</li>
                <li>💻 5+ Years of Experience</li>
                <li>🚀 50+ Projects Completed</li>
                <li>🌟 Always Learning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;