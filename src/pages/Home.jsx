import Background from "../components/designs/Background";
import imgw from "../assets/gifs/Cloud-Computing.png";
function Home() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Background data="home" />
        <section
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <h1 style={{ fontSize: "12rem" }}>Cloud User Group</h1>
          </div>
          <div>
            <img
              src={imgw}
              alt="Cloud User Group "
              style={{ maxWidth: "50%", height: "50%", borderRadius: "50%" }}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
