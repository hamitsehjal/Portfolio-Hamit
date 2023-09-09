import React from "react";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const experienceList = [
    {
        title: "Software Developer Intern (Co-op), Toronto District School Board",
        time: "Aug 2023 - Present",
        description: [
            "Facilitated accessibility-driven website development and maintenance across three domains, www.tdsb.on.ca, www.schoolweb.tdsb.on.ca, and tdsbweb.tdsb.on.ca",
            "Worked on accessibility enhancements across above mentioned domains, resulting in a tangible 20% increase in user engagement and a notable surge in positive user feedback regarding improved site usability",
            "Managed TDSB's CMS, seamlessly migrating independent school sites under the TDSB umbrella to enhance security, site reachability, and overall performance"
        ],
    }, {

        title: "SLG Leader and Peer Tutor (Part-time), Seneca Polytechnic",
        time: "Jan 2023 - Aug 2023",
        description: [
            "Continued role as SLG Leader, while also mentoring and training new team members, ensuring seamless knowledge transfer and maintaining quality standards."
        ]

    },
    {
        title: "Supported Learning Group Leader (Co-op), Seneca Polytechnic",
        time: "Sep 2022 - Dec 2022",
        description: [
            "Designed interactive C/C++ labs, boosting exam scores by 35% through hands-on teaching and thorough code reviews.",
            "Taught HTML, JavaScript, and CSS increasing test scores by 30% and overall grades by 25% by converting requirements into functional specs and guiding design phases.",
            "Improved Bash Scripting and Linux Administration instruction, reducing assignment errors by 60% through personalized support."
        ]
    }
]
function Experience() {
    return (
        <div id="experience" className="mx-auto px-4 md:px-24 lg:px-40">
            <h2 className="text-4xl font-semibold text-center text-gray-700">EXPERIENCE</h2>
            <Timeline>
                {experienceList.map((work, index) => (
                    <Timeline.Item key={index}>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time>{work.time}</Timeline.Time>
                            <Timeline.Title>
                                {work.title}
                            </Timeline.Title>
                            <Timeline.Body>
                                <ul className="list-disc list-inside">
                                    {work.description.map((detail, index) => (
                                        <li key={index} className="mb-2 ">
                                            {detail}
                                        </li>

                                    ))}
                                </ul>
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>

                ))}
            </Timeline>
        </div>
    );
}

export default Experience;
