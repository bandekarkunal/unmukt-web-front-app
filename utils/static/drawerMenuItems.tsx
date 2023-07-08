import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import StorageIcon from "@mui/icons-material/Storage";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import SchoolIcon from "@mui/icons-material/School";

export const sidebarData = [
  {
    label: "Home",
    link: "/home",
    icon: <DashboardIcon />,
    activeIcon: <DashboardIcon sx={{ color: "secondary.main" }} />,
  },
  {
    label: "User Management",
    icon: <GroupIcon />,
    roles: [
      "role-admin",
      "role-program-manager",
      "role-block-coordinator",
      "role-trainer",
    ],
    nestedItems: [
      {
        label: "All users",
        link: "/user-management/all-users",
        icon: <GroupIcon />,
        activeIcon: <GroupIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-admin"],
      },

      {
        label: "Program Managers",
        link: "/user-management/program-managers",
        icon: <ManageAccountsIcon />,
        activeIcon: <ManageAccountsIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin"],
      },
      {
        label: "Block-Coordinators",
        link: "/user-management/block-coordinators",
        icon: <CompareArrowsIcon />,
        activeIcon: <CompareArrowsIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-program-manager"],
      },
      {
        label: "Trainers",
        link: "/user-management/trainers",
        icon: <AutoFixNormalIcon />,
        activeIcon: <AutoFixNormalIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-program-manager", "role-block-coordinator"],
      },
      {
        label: "Students",
        link: "/user-management/students",
        icon: <SchoolIcon />,
        activeIcon: <SchoolIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-program-manager",
          "role-block-coordinator",
          "role-trainer",
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
      "role-program-manager",
      "role-block-coordinator",
      "role-trainer",
    ],
  },
  {
    label: "Meetings",
    link: "/meetings",
    icon: <MonitorRoundedIcon />,
    activeIcon: <MonitorRoundedIcon sx={{ color: "secondary.main" }} />,
    roles: [
      "role-admin",
      "role-program-manager",
      "role-block-coordinator",
      "role-trainer",
    ],
  },
];
