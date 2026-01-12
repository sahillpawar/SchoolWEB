import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="overlay"></div>

      <div className="home-content">
        <h1>Ignite the Passion for Electronics in your child!</h1>
        <p>
          Educating and Motivating Young Minds 
        </p>

        <div className="home-buttons">
          <a href="#programs" className="btn primary">
            View Our Programs
          </a>
          <a href="#project-kits" className="btn secondary">
            Project Kits
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
