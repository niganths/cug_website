import Background from "../components/designs/Background";
import RotatingImageGallery from '../components/designs/RotatingImageGallery';
import Members from "../components/profiles/Members";
import "../css/about.css"
function About() {
  return (
    <div style={{ position: "relative",width:"100%" }}>
      <Background data="about"/>
      <div style={{position:"absolute",justifyContent:'center',width:'100%'}}>
        <h3 class="animate-charcter" style={{display:"flex",justifyContent:'center'}}> ABOUT CUG 🌩️</h3>
        <section className="section-container">
  <p>
    The Cloud Users Club at Kongu Engineering College is a dynamic hub for students passionate about cloud computing. It fosters learning, collaboration, and innovation, providing a platform to explore the latest trends. Through workshops, seminars, and competitions, members enhance their skills in AWS, Azure, and GCP. The club promotes a supportive community, facilitating group projects and networking with industry experts. It prepares students for cloud computing careers with resources and certification programs, offering mentorship and internship opportunities. Overall, it nurtures talent, fosters innovation, and empowers students to excel in cloud technology, contributing to technological advancement.
  </p>
</section>


        <h1 class="animate-charcter" style={{fontSize:"50px",display:"flex",justifyContent:"center",marginTop:"100px"}}>GALLERY</h1>
        <section style={{marginTop:"150px"}}>
        
          <div style={{display:"flex",justifyContent:"center"}}>
        <RotatingImageGallery/>
        </div>
      </section>
      <h1  class="animate-charcter" style={{fontSize:"50px",display:"flex",justifyContent:"center",marginTop:"100px"}}>Our Team </h1>

      <section style={{marginTop:"150px"}}>
          <div style={{display:"flex",justifyContent:"center"}}>
            
        <Members/>
        </div>
      </section>
      </div>
     
    </div>
  );
}
export default About;
