
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function VishalPortfolio() {
  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-white to-slate-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="text-center mb-8">
        <motion.h1 className="text-4xl font-bold mb-2 text-blue-700 dark:text-blue-300" whileHover={{ scale: 1.05 }}>Vishal Singh</motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Data Analyst</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://linkedin.com/in/vishal3432" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-300 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/vishal3432" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-800 dark:text-white hover:scale-110 transition-transform" />
          </a>
        </div>
        <p className="mt-2 text-gray-500 dark:text-gray-400">📧 vishals.analyst@gmail.com | 📞 +91 7999081875</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">Education</h2>
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <p className="font-semibold">Samrat Ashok Technological Institute, Vidisha, India</p>
            <p>B.Tech, Internet of Things (IoT), Graduated: May 2025</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">Skills</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>Analytical Tools:</strong> Power BI, Advanced Excel</li>
          <li><strong>Programming Languages:</strong> Python, SQL</li>
          <li><strong>Databases:</strong> PostgreSQL</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">Certifications</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Data Analysis Bootcamp</li>
          <li>Power DAX</li>
          <li>Data Analysis Toolbox</li>
          <li>SQL for Data Analytics</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">Projects</h2>
        <div className="space-y-4">
          {[{
            title: "BlinkIT Descriptive Analysis",
            tech: "Power BI | Excel",
            description: "Performed exploratory and statistical analysis on BlinkIT sales data. Designed visualizations and derived actionable insights to optimize supply chain.",
            link: "https://github.com/vishal3432/Descriptive-Analysis-BlinkIT"
          }, {
            title: "Text Data Analysis",
            tech: "Python | NLP | Jupyter",
            description: "Conducted sentiment analysis and built NLP models to extract product review insights. Created word clouds and frequency distributions for text analytics.",
            link: "https://github.com/vishal3432/Text-Data-Analysis"
          }, {
            title: "Stock Price Forecasting Dashboard",
            tech: "Streamlit | Prophet | Python",
            description: "Created an interactive dashboard using Streamlit for forecasting stock prices. Implemented Prophet for 90-day predictions with trend and seasonality insights.",
            link: "http://172.27.194.146:8501"
          }].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-gray-100 dark:bg-gray-800">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.tech}</p>
                  <p className="mb-2 text-gray-700 dark:text-gray-200">{project.description}</p>
                  <a href={project.link} className="text-blue-600 hover:underline" target="_blank">{project.link.includes('http') ? 'Live Demo / GitHub Repo' : 'GitHub Repo'}</a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
