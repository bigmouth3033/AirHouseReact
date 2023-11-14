import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faEarthAsia,
  faEye,
  faHouseUser,
  faPeopleArrows,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import image1 from "./image1.jpg";
import OIP from "./OIP.jpg";
const Container = styled.div`
& *{
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
}
  & div {
    width: 1000px;
    margin: auto;
  }

  & .title {
    font-size: 4em;
    font-weight: bolder;
    /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
  }

  & .title2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  & .container {
    display: grid;
    grid-column-gap: 50px;
    /* grid-template-columns: 300px 300px 300px; */
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 50px;
  }

  & .title3 {
    font-weight: bold;
    font-size: 2em;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  & .opacity-text {
    opacity: 0.5;
    font-size: 1.5em;
  }
  & .icon{
    font-size: 2em;

  }
`;

const StyledBox1 = styled.div`
  & .h2 {
    font-size: 2.5em;
    font-weight: bold;

  }
  & .title3 {
    font-weight: bold;
  }

  & .opacity-text {
    opacity: 0.5;
  }
  & .container {
    display: grid;
    grid-column-gap: 100px;
    /* grid-template-columns: 400px 400px; */
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows:  200px 200px 200px 200px; */
  }
`;

const StyledBox2 = styled.div`
  & .title3 {
    font-weight: bold;
  }

  & .opacity-text {
    opacity: 0.5;
  }

  & .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  & .title1 {
    font-weight: bold;
    font-size: 2.5em;
  }

  & p {
    font-size: 1.5em;
  }

  & .box2{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function AgainstDiscrimination() {
  return (
    <Container>
      <div>
        <h3 style={{ fontWeight: "bold", fontSize: "1.2em" }}>2022 Update</h3>
        <br />
        <b className="title">Fighting discrimination and building inclusion</b>
        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />
        <p className="title2" style={{ marginBottom: "20px", fontSize: "2em" }}>
          Project Lighthouse
        </p>
        <p style={{ fontSize: "1.5em" }}>
          Launched in 2020, Project Lighthouse helps uncover and address
          disparities in how people of color experience Airbnb. We developed the
          initiative in partnership with Color Of Change—and with guidance from
          a number of civil rights and privacy organizations. Learn more
        </p>
        <br />
        <div className="container" style={{ marginTop: "30px" }}>
          <span>
            <FontAwesomeIcon icon={faPeopleArrows} className="icon" />

            <p className="title3">Using real data</p>
            <p className="opacity-text">
              We examine how guests and Hosts use our platform. Statistical
              analyses help us find opportunities to build more equitable
              experiences in our community.
            </p>
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} className="icon" />

            <p className="title3">Protecting privacy</p>
            <p className="opacity-text">
              We analyze trends in bulk and don’t associate perceived race
              information with specific people or accounts.
            </p>
          </span>
          <span>
            <FontAwesomeIcon icon={faLayerGroup} className="icon"/>

            <p className="title3">Constantly improving</p>
            <p className="opacity-text">
              Our team is continuing to identify new ways to make Airbnb fairer,
              more equitable, and more inclusive.
            </p>
          </span>
        </div>

        <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
        <StyledBox1>
          <p className="h2">What we’ve changed</p>
          <br />
          <div className="container">
            <span>
              <FontAwesomeIcon icon={faUser} className="icon"/>

              <p className="title3">
                Eliminating guest profile photos prior to booking
              </p>
              <p className="opacity-text">
                In 2018, we implemented changes to ensure Hosts will see a
                guest’s photo in the booking process only after they’ve accepted
                a booking request. Analysis found that this change slightly
                increased the Booking Success Rate—the rate at which guests in
                the United States from different perceived racial groups
                successfully book an Airbnb listing—for guests who are perceived
                to be Black..
              </p>
            </span>

            <span>
              <FontAwesomeIcon icon={faStar} className="icon"/>

              <p className="title3">More reviews for more guests</p>
              <p className="opacity-text">
                Guests with reviews have a higher Booking Success Rate. But our
                analysis found that guests perceived to be Black or
                Latino/Hispanic have fewer reviews than guests perceived to be
                white or Asian. We are implementing changes that will make it
                easier for all guests to receive a review when they travel.
              </p>
            </span>
            <span>
              <FontAwesomeIcon icon={faBold} className="icon"/>

              <p className="title3">
                Making more people eligible for Instant Book
              </p>
              <p className="opacity-text">
                Instant Book lets a guest book a listing without requiring a
                Host’s approval. It’s an effective tool to reduce discrimination
                because it creates more objective bookings. We’ve introduced
                changes to make it easier for 5 million more people to use
                Instant Book
              </p>
            </span>
            <span>
              <FontAwesomeIcon icon={faEarthAsia} className="icon" />

              <p className="title3">
                Building a more inclusive travel community
              </p>
              <p className="opacity-text">
                Travel beyond traditional tourist hubs can bring economic
                opportunity to communities that haven’t historically benefited
                from tourism. In the next year, we’ll continue to develop and
                scale global programs like the Airbnb Entrepreneurship Academy
                to ensure broader access to the benefits of hosting on Airbnb.
                Our efforts include expanding programs that help recruit more
                Hosts who are people of color.
              </p>
            </span>
            <span>
              <FontAwesomeIcon icon={faHouseUser} className="icon" />

              <p className="title3">Expanding education for Hosts</p>
              <p className="opacity-text">
                Our Host community plays an important role in creating an
                equitable and welcoming experience. This year, we launched a
                Guide to Inclusive Hosting with educational articles and videos
                to help Hosts welcome guests from all abilities, genders, and
                backgrounds—especially those from historically marginalized
                communities. We expect to roll out more educational programs and
                product features to build inclusion.
              </p>
            </span>
            <span>
              <FontAwesomeIcon icon={faEye} className="icon"/>

              <p className="title3">
                Auditing reservation rejections to remove opportunities for bias
              </p>
              <p className="opacity-text">
                We know that there are legitimate reasons why a reservation may
                not work: the Host's calendar may have changed, or the guest may
                have a need—like early check-in, or bringing extra guests—that
                the Host can’t accommodate. We are expanding our ability to
                analyze reservation rejections to help improve our policies and
                products and fight discrimination.
              </p>
            </span>
          </div>
        </StyledBox1>
        <hr />
        <StyledBox2>
          <div className="container">
            <span className="box2">
              <p className="title1">The Airbnb Community Commitment</p>
              <p>
                Since 2016, we’ve asked everyone who uses Airbnb to commit to
                treating others with respect and without judgment or bias by
                agreeing to the Airbnb Community Commitment. Anyone who doesn’t
                agree is removed from our platform—as of 2022, that’s 2.5
                million people.
              </p>
            </span>

            <span>
              <img src={image1} style={{ width: "300px" }} />
            </span>
          </div>
        </StyledBox2>
        <hr />
        <StyledBox2>
          <p className="title1">Meet out partners</p>
          <p>
            Since 2016, we’ve consulted and collaborated with leading civil
            rights groups, racial experts, and privacy organizations.
          </p>
          <img src={OIP} style={{ width: "300px" }} />
        </StyledBox2>
      </div>
    </Container>
  );
}
export default AgainstDiscrimination;
