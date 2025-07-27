import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with real-time data, forecasts, and beautiful visualizations using weather APIs.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Blog CMS",
      description: "A content management system for bloggers with rich text editing, SEO optimization, and analytics integration.",
      technologies: ["React", "Express", "MongoDB", "JWT", "Cloudinary"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and financial insights.",
      technologies: ["React Native", "Firebase", "Redux", "Biometric Auth"],
      githubUrl: "#",
      liveUrl: "#",
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className={`h-2 w-full ${project.gradient} rounded-t-lg mb-4`}></div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                  <Button 
                    size="sm"
                    className={`flex items-center space-x-2 ${project.gradient} hover:shadow-glow transition-all`}
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;