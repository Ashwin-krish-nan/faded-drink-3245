import React from "react";
import SecFiveLawyerCard from "./SecFiveLawyerCard";
import "./Section5.css";
const Section5 = () => {
  return (
    <section className="SecFiveParent">
      <br />

      <h1 className="SectionHeads">Meet Our Top Ranked Lawyers</h1>
      <br />

      <div className="Sec5Parent">
        <SecFiveLawyerCard
          Name="Sophie Devine"
          photo="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=826&t=st=1683291999~exp=1683292599~hmac=71239751fb128dc5119c343a24ca72fe87914397324b12acc8b1fedabc494e1e"
          delay="50"
        />
        <SecFiveLawyerCard
          Name="Jane Suzie"
          photo="Images/IndexPageImages/Section5/lawyer2.jpg"
          delay="100"
        />
        <SecFiveLawyerCard
          Name="Hoffman Davidson"
          photo="https://img.freepik.com/free-photo/modern-trader_1098-13889.jpg?w=996&t=st=1683291896~exp=1683292496~hmac=643feadcffc9b3f6a74922263fbf97a1e6e5e97cb027dd294652a3238065b662"
          delay="150"
        />
        <SecFiveLawyerCard
          Name="Jesse Pinkman"
          photo="https://img.freepik.com/free-photo/smiling-business-man-holding-tablet-documents_1262-5626.jpg?w=996&t=st=1683291959~exp=1683292559~hmac=78c0a907105e4a7780af54ee3778f33e3ec5027b66d211e5b0b7d3a310ac8287"
          delay="200"
        />
      </div>
    </section>
  );
};

export default Section5;
