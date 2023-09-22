import Hero from "../components/Hero";
function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1401019613/photo/movie-tickets-online-booking-app.jpg?s=2048x2048&w=is&k=20&c=lU8HyI6cLtFrKan30684GXIOJ-7qzWRkkgvDslE7ru4="
        title="Movie tickets online booking app on smartphon"
        text="Choose Your Favourite Movies"
        buttonText="Book Now!"
        url="/"
        btnClass="Show"
      />
    </>
  );
}

export default Home;
