import styled from "styled-components";
import image from "./image.webp";
import imgae2 from "./image2.webp";
import image3 from "./image3.webp";
import image4 from "./image4.webp";
import OIP from "./OIP.jpg";
import AirQuestionsDetail from "./AirQuestionDetail";
const Container = styled.div`
  & .container {
    margin: 0 auto;
    max-width: 1000px;
  }
`;
const Box1 = styled.div`
  & .container {    
    margin: 0 auto;
    max-width: 900px;
  }

  & .h1-box1 {
    font-size: 6em;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 300;
    /* padding: 30px; */
    text-align: center;
  }

  & .p1-box1 {
    font-size: 1.5em;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding-top: 2em;
    padding-bottom: 4em;
    text-align: center;
  }
`;

const Box2 = styled.div`
    margin: 0 auto;
    max-width: 1000px;
  & .grid-container {    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em;
  
    @media  (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
  
  }

  & .h1-box2 {
    font-size: 2.5em;
    font-weight: bold;
  }
  & .p1-box2 {
    padding-top: 2em;
    padding-bottom: 2em;
    font-size: 2em;
  }
  & .button-box2 {
    border: 1px solid black;
    font-size: 1.5em;
    /* padding: 10px; */
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
  }
  & img{

  }
`;

const Box3 = styled.div`
  & .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10em;
    /* background-color: rgb(247,247,247); */
    max-width: 1000px;
    margin: auto;

    @media  (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;

  & .gird-item1 {
    order: 2; /* Đảo ngược thứ tự của mục 1 */
  }
  & .gird-item2 {
    order: 1; /* Đảo ngược thứ tự của mục 1 */
  }
  }


  }

  & .div1-box3 {
    /* background-color: red; */
  }
  & .h1-box3 {
    font-size: 3em;
    font-weight: bolder;
  }
  & .p1-box3 {
    font-size: 1.5em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  }
  & .gird-column2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const Box4 = styled.div`
  & .div1-box4 {
    margin-top: 2em;

    background: linear-gradient(to bottom, white 40%, black 0%);
    height: 80vh;
    text-align: center;
    color: #fff;

    @media  (max-width: 700px) {
    padding-top: 30%;
      
  }
  }
  & img{
    max-width: 100%;
  }


`;

const Box5 = styled.div`
  & .container-box5 {
    max-width: 1200px;
    margin: auto;
    /* background-color: black;
    color: white; */
  }
  & .grid-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2em;


    @media  (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
      
  }
  }
  & .h1-box5{
    font-size: 2em;
    font-weight: bolder;
  }

  & .p1-box5{
    font-size: 1.5em;
    padding-top: 1em;
  }

  & .title-box5{
    font-size: 3em;
    max-width: 1200px;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  & .h2-box5{
    font-size: 2em;
    font-weight: bolder;
    text-align: left;
    width: 50%;
    margin-top: 3%;
    margin-bottom: 3%;
    @media  (max-width: 700px) {
    width: 100%;
    
  }
  };
`;

  const Box6 = styled.div`
    & .grid-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 3em;

    @media  (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
    }

    & .h1-box6{
      font-size: 2.2em;      
    }

    & .p1-box6{
      font-size: 1.5em;
      padding-top: 1.5em;
    }
    & .container{
      padding-top: 3em;
      max-width: 1200px;
      margin: auto;
    }
    & .grid-item{
      
    }

  `

function Accessibility() {
  return (
    <Container>

      <Box1>
        <div className="container">
          <h1 className="h1-box1">Accessibility at Airbnb</h1>
          <p className="p1-box1">
            Here’s how we’re making it easier to travel with us.
          </p>
        </div>
      </Box1>
      <Box2>
        <div className="grid-container">
          <div className="div1-box2">
            <h1 className="h1-box2">The Adapted Category</h1>
            <p className="p1-box2">
              Discover unique homes with verified accessibility features  including step-free paths into the home, bedroom and bathroom.
              Each home in this category receives a detailed 3D scan to confirm its accessibility features and display key details like  doorway widths.
            </p>
            <button className="button-box2">Start Exploring</button>
          </div>
          <div className="div1-box2">
            <img src={image} />
          </div>
        </div>
      </Box2>

      <Box3>
        <div className="background-color"
          style={
            { backgroundColor: "rgb(247,247,247)" }
          }>
          <div className="grid-container">
            <div className="gird-item1">
              <img src={imgae2} />
            </div>
            <div className="gird-item2">
              <h1 className="h1-box3">Enhanced search filters</h1>
              <p className="p1-box3">
                We’ve simplified our accessibility filters to provide an even
                better search experience.
              </p>
            </div>
          </div>
        </div>
      </Box3>
      <Box2>
        <div className="grid-container">
          <div className="div1-box2">
            <h1 className="h1-box2">Accessibility review</h1>
            <p className="p1-box2">
              We review every accessibility feature submitted by stays Hosts for accuracy.  </p>
            <button className="button-box2">Start Exploring</button>
          </div>
          <div className="div1-box2">
            <img src={image3} />
          </div>
        </div>
      </Box2>
      <Box3>
        <div className="background-color"
          style={
            { backgroundColor: "rgb(247,247,247)" }
          }>
          <div className="grid-container">
            <div className="gird-item1">
              <img src={imgae2} />
            </div>
            <div className="gird-item2">
              <h1 className="h1-box3">1:1 messaging with Hosts</h1>
              <p className="p1-box3">
                Chat directly with Hosts for more information about the accessibility features of their stay or Experience.
                better search experience.
              </p>
            </div>
          </div>
        </div>
      </Box3>

      <Box4>
        <div className="div1-box4">
          <img src={image4} />
        </div>
      </Box4>
      <Box5>
        <div style={
          {
            backgroundColor: "black",
            color: "white"
          }
        }>
          <div className="container-box5">
            <h1 className="title-box5">How we’re making Airbnb more accessible</h1>
            <div className="grid-container">
              <div className="grid-item">
                <h1 className="h1-box5">Dedicated teams</h1>
                <p className="p1-box5">
                  Airbnb has teams focused on building products that everyone can
                  use. These teams work with engineers, designers, and others
                  across the compazzzzz
                </p>
              </div>
              <div className="grid-item">
                <h1 className="h1-box5">Research and advocacy</h1>
                <p className="p1-box5">
                  We conduct research with people who have accessibility needs, and work with experts in the community. If you’re interested in participating in a session about accessibility at Airbnb, fill out our accessibility research form.
                </p>
              </div>
              <div className="grid-item">
                <h1 className="h1-box5">Dedicated teams</h1>
                <p className="p1-box5">
                  Airbnb has teams focused on building products that everyone can
                  use. These teams work with engineers, designers, and others
                  across the compazzzzz
                </p>
              </div>
            </div>

            <h1 className="h2-box5">Here are some of the organizations that we partner with</h1>
            <img src={OIP} />

          </div>
        </div>
      </Box5>

      <Box6>
        <div className="container">
        <div className="grid-container">
          <div className="grid-item">
              <h1 className="h1-box6">We’re here to help</h1>
              <p className="p1-box6">Visit our Help Center for more information</p>
          </div>
          <div className="grid-item">
            <AirQuestionsDetail question={"How are the accessibility features in the Adapted Category verified?"} answer={"Specially-designed cameras are used to create a 3D model of every home in the category. These models are then analyzed to confirm the accessibility features listed."}/>
            <AirQuestionsDetail question={"How do I use search filters?"} answer={"It’s easy to use our search filters to only show the listings that have the accessibility features you need. Learn more about searching for stays with accessibility features or searching for Experiences with accessibility features."}/>
            <AirQuestionsDetail question={"How does Airbnb review accessibility features?"} answer={"Stays Hosts are required to submit photos of their accessible features, and Hosts of Experiences provide a written description. These are then manually reviewed by a specialized team of Airbnb agents for photo accuracy and description quality, respectively."}/>
            <AirQuestionsDetail question={"Can I bring my access provider or the person who supports me on an Experience?"} answer={"Hosts of Experiences can choose to allow access providers to join the guests they’re assisting at no additional cost. On Airbnb, we consider access providers to be anyone over the age of 18 who regularly assists a person with a disability, mental illness, or a long-term illness with daily activities. Learn more about our access providers and our related Experiences policies for guests and Hosts."}/>
            <AirQuestionsDetail question={"Can I bring my service animal with me?"} answer={"We understand that service animals serve a crucial function for their owner. That’s why guests don’t have to disclose the presence of a service animal before booking, although we always encourage transparent communication to ensure a smooth experience for all. Learn more about service animal policies for guests and Hosts"}/>
            <AirQuestionsDetail question={"How can Hosts support guests with accessibility needs?"} answer={"What makes a listing accessible varies depending on the guest. That’s why we give guidance to our Hosts on how to provide clear, accurate information about their listings, and encourage them to communicate with their guests. Learn more about hosting guests with accessibility needs. Learn more about welcoming guests with accessibility needs."}/>
            <AirQuestionsDetail question={"How can Hosts add accessibility features to listings?"} answer={"A Host’s space may be more accessible than they think. They can edit their listing by room, and confirm each accessibility feature with at least one clear photo. Learn more about adding accessibility features to listings for stays. Learn more about adding accessibility features to listings for Experiences."}/>


          </div>
        </div>
        </div>
      </Box6>
    </Container>
  );
}

export default Accessibility;
