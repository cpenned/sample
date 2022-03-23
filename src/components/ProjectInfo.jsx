import { useState } from 'react';
import '../styles/projectInfo.scss';

export default function ProjectInfo({ projectDetails }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProjectModal = () => {
    setIsOpen(!isOpen);
  };

  // TODO: Add keyboard handler for closing modal

  return (
    <>
      <div className="modal--info">
        <button
          aria-label="Open modal for more project info"
          className="btn"
          type="button"
          style={{
            backgroundColor: projectDetails.circleColor,
            order: 1,
          }}
          onClick={() => toggleProjectModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="btn--info"
            fill={projectDetails.iconColor}
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <circle
              cx="128"
              cy="128"
              r="96"
              fill="none"
              stroke={projectDetails.iconColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
            />
            <polyline
              points="120 120 128 120 128 176 136 176"
              fill="none"
              stroke={projectDetails.iconColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
            />
            <circle cx="126" cy="84" r="12" />
          </svg>
        </button>
        {isOpen && (
          <>
            <a
              aria-label="View the YouTube video"
              className="btn"
              href={projectDetails.youtube}
              target="_blank"
              rel="noreferrer"
              data-name="YouTube Video"
              style={{
                backgroundColor: projectDetails.circleColor,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill={projectDetails.iconColor}
                viewBox="0 0 256 256"
                className="btn--info"
              >
                <rect width="256" height="256" fill="none" />
                <polygon
                  points="160 128 112 96 112 160 160 128"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <path
                  d="M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
              </svg>
            </a>
            <a
              aria-label="View the source code"
              className="btn"
              data-name="Source Code"
              href={projectDetails.code}
              style={{
                backgroundColor: projectDetails.circleColor,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="btn--info"
                fill={projectDetails.iconColor}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  d="M84,240a23.9,23.9,0,0,0,24-24V168"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <path
                  d="M172,240a23.9,23.9,0,0,1-24-24V168"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <path
                  d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <path
                  d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <path
                  d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
              </svg>
            </a>
            <a
              aria-label="Return to the project page"
              className="btn"
              data-name="Other Projects"
              href="/projects/"
              style={{
                backgroundColor: projectDetails.circleColor,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="btn--info"
                fill={projectDetails.iconColor}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <line
                  x1="128"
                  y1="80"
                  x2="128"
                  y2="128"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <line
                  x1="169.6"
                  y1="152"
                  x2="128"
                  y2="128"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <polyline
                  points="71.8 99.7 31.8 99.7 31.8 59.7"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
                <path
                  d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
                  fill="none"
                  stroke={projectDetails.iconColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="20"
                />
              </svg>
            </a>
          </>
        )}
      </div>
      {isOpen && <div className="modal--info-container" role="none" onClick={() => toggleProjectModal()} />}
    </>
  );
}
