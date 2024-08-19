import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4  border-[#3D9239]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Satyam Kumar. Thank you for taking time out to visit my
              portfolio.
            </p>
          </div>
          <div className="text-start">
            <p>
              I am a fullstack web developer . I have done Pg-Diploma in Mobile Computing from 
              Centre for Development of Advanced Computing, India in 2024.
            </p>
            <p>
              I developed an interest in Web Development. To
              further enhance my skills and build real-world projects, I am Fresher.
              I have skilled in front-end technologies like HTML, CSS, JavaScript, React as
              well as back-end technologies like Node.js and MongoDB, MySql. I'm always
              keen to learn and implement new technologies to create efficient
              and elegant web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
