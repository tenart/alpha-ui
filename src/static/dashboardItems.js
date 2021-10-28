import { HiHome } from "react-icons/hi";
import { FaPen, FaClipboardList } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";

const dashboardItems = [
    {
        title: "Home",
        path: "/home",
        icon: HiHome
    },
    {
        title: "Enter Data",
        path: "/enter",
        icon: FaPen
    },
    {
        title: "Manage Templates",
        path: "/manage/templates",
        icon: AiFillProfile
    },
    {
        title: "Reports",
        path: "/reports",
        icon: FaClipboardList
    }
]

export default dashboardItems;