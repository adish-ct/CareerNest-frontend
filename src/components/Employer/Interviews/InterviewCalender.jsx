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
                    <div className="p-5 bg-white shadow-sm border rounded">
                        <h1 class="text-2xl my-auto mx-auto font-extrabold text-center">
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
