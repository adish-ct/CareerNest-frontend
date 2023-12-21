import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

function InterviewCalender() {
    const localizer = momentLocalizer(moment);

    return (
        <>
            <div className="w-full bg-[#f0efef] p-2 rounded-md">
                <div className="w-full rounded-md">
                    <div className="p-2 bg-white shadow-sm border rounded">
                        <h1 className="text-2xl my-4 mx-auto font-extrabold text-center sm:text-2xl lg:text-3xl">
                            INTERVIEWS TIMELINE
                        </h1>
                    </div>
                    <div className="w-full pt-12">
                        <Calendar
                            localizer={localizer}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 565, backgroundColor: "#ffffff" }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default InterviewCalender;
