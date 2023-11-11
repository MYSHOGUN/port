import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">King Mongkut's University of Technology North Bangkok</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Engineering and Electronic Technology branch Computer
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • May 2019 - Current
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">KTN Bussiness Solution Company Limited</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Ladprao - Bangkok, Thailand{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Nov 2023 - Mar 2024</code>
            <br />
            <code className="text-sm">
              <br />• Become an intern for work experience.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Coding Python
              <br />• Coding Java
              <br />• Coding JavaScript
              <br />• Coding Github
              <br />• Using NodeJS
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
