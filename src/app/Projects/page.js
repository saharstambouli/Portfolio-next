// app/projects/page.js

import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (

    
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-gray-800">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </div>
  );
};

const ProjectsPage = () => {

  const projects = [
    { title: 'To do list', description: 'Manage your tasks efficiently.', imageUrl: '/images/commerce.jpg' },
    { title: 'Movie website', description: 'Browse and watch movies.', imageUrl: '/images/moviejpg.jpg' },
    { title: 'E-Commerce website', description: 'Shop your favorite products.', imageUrl: '/images/commerce.jpg' },
    { title: 'Portfolio website', description: 'Showcase your work.', imageUrl: '/images/portfoliojpg.jpg' },
    { title: 'Backend Project', description: 'APIs and database management.', imageUrl: '/images/wb1.png' },
    { title: 'Project 6', description: 'Description for project 6', imageUrl: '/images/wb1.png' },
    { title: 'Project 7', description: 'Description for project 7', imageUrl: '/images/wb1.png' },
    { title: 'Project 8', description: 'Description for project 8', imageUrl: '/images/wb1.png' },
    { title: 'Project 9', description: 'Description for project 9', imageUrl: '/images/wb1.png' },
  ];

  return (
  
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6 text-black">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
