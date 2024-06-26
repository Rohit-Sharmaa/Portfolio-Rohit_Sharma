import "./services.css";
import data from "./data";
import Card from "../../components/Card";
import { useTheme } from "../../components/ThemeContext";
const Services = () => {
  const { theme } = useTheme();
  return (
    <section className={`${theme}`}>
      <h2>Skills</h2>
      <p>Here are my skills below</p>

      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className={`service light ${theme}`}>
            <div className="service__icon">{item.icon}</div>

            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
