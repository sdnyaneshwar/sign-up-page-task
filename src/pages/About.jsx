function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl mt-20">
      <div className="bg-white shadow-2xl rounded-xl p-8 border border-pink-100">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">About Me</h2>
        <div className="space-y-8 text-gray-600">
          <p className="text-lg">
            Hi, I'm <span className="font-semibold text-pink-600">Dnyaneshwar Suwarnkar</span>, an aspiring full-stack developer passionate about building innovative, user-friendly web applications. I specialize in creating seamless, responsive, and accessible digital experiences using modern technologies.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
            <p className="text-lg">
              B.E in Electronics & Telecommunication, Zeal College of Engineering and Research, Pune
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                React.js & JavaScript
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Node.js & Express
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Python
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                AWS & Docker
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Ansible & Jenkins
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                SQL & MongoDB
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-pink-600">Threads Clone</h4>
                <p className="text-base">
                  A social media platform built with React.js, Node.js, and MongoDB, featuring real-time messaging and responsive design. Deployed on AWS for scalability.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-pink-600">YouTube Clone</h4>
                <p className="text-base">
                  A video streaming application developed using MERN stack, with features like video uploads and user authentication. Hosted on AWS with Docker for containerization.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="mailto:dnyaneshwar.suwarnkar@example.com"
              className="inline-block bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 transition font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;