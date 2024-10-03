import "../globals.css";

const page = () => {
  return (
    <div> 
      <h1 className="text-2xl font-bold mb-4 text-center py-4 ">About Me</h1>
      
      <div className="flex flex-row items-center justify-between space-x-1">
        <div className="flex-1">
          <p className="text-lg px-5 ml-4">
            I am a web developer with experience in building dynamic and interactive applications using modern technologies like React, Redux, and Next.js. My expertise extends to front-end development,
            where you excel in creating responsive user interfaces with frameworks like Tailwind CSS. You are skilled in managing state and data flow, as seen in your work with Redux for handling tasks like to-do list management. You focus on crafting intuitive user experiences, integrating features like filtering and editing, while also paying attention to aesthetic details,
            such as adding decorative elements like calendars. Additionally, I have experience handling local storage, ensuring data persistence, and using UUIDs for unique task identification in my projects.
          </p>
        </div>
        
        <div>
          <img src="/images/maphoto.jpg" width="400px" height="400px" alt="My photo" className="rounded-lg shadow-md mr-10" />
        </div>
      </div>
    </div>
  );
};

export default page;