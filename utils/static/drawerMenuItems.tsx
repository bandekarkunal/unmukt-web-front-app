import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import PublicIcon from "@mui/icons-material/Public";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import TableViewIcon from "@mui/icons-material/TableView";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import GirlIcon from "@mui/icons-material/Girl";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MonitorIcon from "@mui/icons-material/Monitor";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ArticleIcon from "@mui/icons-material/Article";
import PollIcon from "@mui/icons-material/Poll";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PieChartIcon from "@mui/icons-material/PieChart";

export const sidebarData = [
  {
    label: "Home",
    link: "/home",
    icon: <DashboardIcon />,
    activeIcon: <DashboardIcon sx={{ color: "secondary.main" }} />,
  },
  {
    label: "User management",
    icon: <GroupIcon />,
    roles: [
      "role-admin",
      "role-hr",
      "role-tnd",
      "role-program-head",
      "role-state-admin",
      "role-program-manager",
      "role-program-coordinator",
    ],
    nestedItems: [
      {
        label: "All users",
        link: "/user-management/all-users",
        icon: <GroupIcon />,
        activeIcon: <GroupIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-state-admin",
          "role-program-head",
          "role-director",
        ],
      },

      {
        label: "Program Managers",
        link: "/user-management/program-managers",
        icon: <ManageAccountsIcon />,
        activeIcon: <ManageAccountsIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-program-head", "role-state-admin"],
      },
      {
        label: "Block-Coordinators",
        link: "/user-management/block-coordinators",
        icon: <CompareArrowsIcon />,
        activeIcon: <CompareArrowsIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
        ],
      },
      {
        label: "Trainers",
        link: "/user-management/trainers",
        icon: <AutoFixNormalIcon />,
        activeIcon: <AutoFixNormalIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
        ],
      },
      {
        label: "Students",
        link: "/user-management/students",
        icon: <SchoolIcon />,
        activeIcon: <SchoolIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
        ],
      },
    ],
  },
  {
    label: "Curriculum",
    link: "/curriculum",
    icon: <StorageIcon />,
    activeIcon: <StorageIcon sx={{ color: "secondary.main" }} />,
    roles: [
      "role-admin",
      "role-state-admin",
      "role-program-head",
      "role-director",
    ],
  },
  {
    label: "Meetings",
    link: "/meetings",
    icon: <MonitorRoundedIcon />,
    activeIcon: <MonitorRoundedIcon sx={{ color: "secondary.main" }} />,
    roles: ["role-admin", "role-tnd", "role-program-head", "role-director"],
  },
];
