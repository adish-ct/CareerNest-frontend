import React from "react";
import ApplicantProfile from "../ApplicantDashboard/ApplicantProfile";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Resume from "../ApplicantDashboard/Resume";
import HiringProcess from "../ApplicantDashboard/HiringProcess";
import InterviewSchedule from "../ApplicantDashboard/InterviewSchedule";

export function ApplicantDashboard() {
  const [activeTab, setActiveTab] = React.useState("Applicant Profile");
  const data = [
    {
      label: "Applicant Profile",
      value: "Applicant Profile",
      desc: <ApplicantProfile />,
    },
    {
      label: "Resume",
      value: "Resume",
      desc: <Resume />,
    },
    {
      label: "Hiring Process",
      value: "Hiring Process",
      desc: <HiringProcess />,
    },
    {
      label: "Interview Schedule",
      value: "Interview Schedule",
      desc: <InterviewSchedule />,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 "
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${
              activeTab === value
                ? "text-gray-900 font-bold font-serif hover:shadow-lg"
                : ""
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="font-serif">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
