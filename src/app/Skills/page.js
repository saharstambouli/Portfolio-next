import React from 'react';

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center underline">Skills</h1>
      <p className="mb-6">
        As a skilled web developer, I possess a strong foundation in both front-end and back-end technologies, allowing me to create dynamic and responsive web applications. Proficient in HTML, CSS, and JavaScript, I utilize modern frameworks such as React and Next.js to build interactive user interfaces that enhance user experience. On the back end, I have experience with Node.js and Express, as well as database management using MongoDB and SQL. My familiarity with version control systems like Git ensures efficient collaboration in team environments. Additionally, I have a keen eye for design, leveraging tools like Tailwind CSS and Figma to create visually appealing layouts. With a commitment to continuous learning, I stay updated on the latest industry trends and best practices, enabling me to deliver high-quality solutions tailored to meet client needs.
      </p>

      <div className="grid grid-cols-3 gap-4  justify-ontent : center items-center mx-40	;">
        <img src="/images/Next.png" alt="Next.js" className="object-cover h-24" />
        <img src="/images/React.png" alt="React" className="object-cover h-24" />
        <img src="/images/express.png" alt="Express" className="object-cover h-24" />
        <img src="/images/node.png" alt="JavaScript" className="object-cover h-24" />
        <img src="/images/js.png" alt="CSS" className="object-cover h-24" />
        <img src="/images/html.png" alt="HTML" className="object-cover h-24" />
      </div>
    </div>
  );
};

export default Page;
