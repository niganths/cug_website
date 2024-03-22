import React from 'react';
import Background from "../components/designs/Background";
import aws from "../assets/images/pexels-pixabay-531767.jpg";

const eventsData = [
  {
    date: "Jan 13, 7 pm",
    title: "2020 National Championship",
    description: "The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.",
    location: "Mercedes-Benz Superdome",
    image: aws,
    registrationLink: "https://example.com/register"
  },
  {
    date: "Jan 13, 7 pm",
    title: "2020 National Championship",
    description: "The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.",
    location: "Mercedes-Benz Superdome",
    image: aws,
    registrationLink: "https://example.com/register"
  },
];

function Events() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Background data="event" />
      <div style={{ position: "absolute", justifyContent: 'center', width: '100%' }}>
        <h3 className="animate-charcter" style={{ display: "flex", justifyContent: 'center' }}> EVENTS</h3>
        <section>
          {eventsData.map((event, index) => (
            <div key={index} className="mx-auto my-600  flex items-center justify-center py-8 ">
              <div className="flex flex-col w-full bg-white bg-opacity-20 rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
                <div className="w-full h-64 bg-top bg-cover rounded-t" style={{ backgroundImage: `url(${event.image})` }}></div>
                <div className="flex flex-col w-full md:flex-row">
                  <div className="flex flex-row justify-around p-4 font-bold leading-none text-black uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                    <div className="md:text-3xl">{event.date}</div>
                  </div>
                  <div className="p-4 font-normal text-gray-800 md:w-3/4">
                    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-zinc-50 text-center ">{event.title}</h1>
                    <p className="leading-normal text-emerald-200 text-x2 text-justify font-bold font-serif">{event.description}</p>
                    <div className="flex flex-row items-center mt-4 text-gray-700">
                      <div className="w-1/2 text-white text-x1" >{event.location}</div>
                      <div className="w-1/2 flex justify-end">
                        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Register</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Events;
