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
    label: "Identify Phase",
    icon: <AppRegistrationIcon />,
    roles: [
      "role-admin",
      "role-hr",
      "role-mne",
      "role-program-head",
      "role-state-admin",
      "role-program-manager",
      "role-program-coordinator",
      "role-volunteer",
      "role-sahyogi",
    ],
    nestedItems: [
      {
        label: "All Applications",
        link: "/identify-phase/all-applications",
        icon: <FormatListBulletedIcon />,
        activeIcon: <FormatListBulletedIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-admin"],
      },
      {
        label: "Video assessment",
        link: "/identify-phase/video-assessment",
        icon: <VideoCameraFrontIcon />,
        activeIcon: <VideoCameraFrontIcon sx={{ color: "secondary.main" }} />,
        permissions: ["is_assessor"],
        role_specific: [
          "role-mne",
          "role-admin",
          "role-state-admin",
          "role-program-head",
          "role-program-manager",
        ],
      },
      {
        label: "VSC Process",
        link: "/identify-phase/vsc-process",
        icon: <CorporateFareIcon />,
        activeIcon: <CorporateFareIcon sx={{ color: "secondary.main" }} />,
        permissions: ["is_trial_lead", "is_lead"],
        role_specific: [
          "role-mne",
          "role-admin",
          "role-state-admin",
          "role-program-head",
          "role-program-manager",
        ],
      },
      {
        label: "Personal Interview",
        link: "/identify-phase/personal-interview",
        icon: <HeadsetMicIcon />,
        activeIcon: <HeadsetMicIcon sx={{ color: "secondary.main" }} />,
        permissions: ["is_interviewer"],
        role_specific: [
          "role-mne",
          "role-admin",
          "role-state-admin",
          "role-program-head",
          "role-program-manager",
        ],
      },
      {
        label: "Merit List",
        link: "/identify-phase/merit-list",
        icon: <MilitaryTechIcon />,
        activeIcon: <MilitaryTechIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-mne",
          "role-admin",
          "role-state-admin",
          "role-program-head",
          "role-program-manager",
        ],
      },
      {
        label: "Final Process",
        link: "/identify-phase/final-process",
        icon: <VideoCameraFrontIcon />,
        activeIcon: <VideoCameraFrontIcon sx={{ color: "secondary.main" }} />,
        permissions: ["is_interviewer"],
        role_specific: [
          "role-mne",
          "role-admin",
          "role-state-admin",
          "role-program-head",
          "role-program-manager",
        ],
      },
      {
        type: "separator",
      },
      {
        label: "VSC Call Support",
        link: "/identify-phase/vsc-call-support",
        icon: <AddIcCallIcon />,
        activeIcon: <AddIcCallIcon sx={{ color: "secondary.main" }} />,
        permissions: ["is_supporter"],
        role_specific: [
          "role-mne",
          "role-admin",
          "role-state-admin",
          "role-program-head",
          "role-program-manager",
        ],
      },
    ],
  },
  {
    label: "Nurture Phase",
    icon: <AccessibilityNewIcon />,
    roles: [
      "role-admin",
      "role-mne",
      "role-tnd",
      "role-program-head",
      "role-director",
      "role-state-admin",
      "role-program-manager",
      "role-sahyogi",
      "role-program-coordinator",
      "role-facilitator",
    ],
    nestedItems: [
      {
        label: "Home",
        link: "/nurture-phase/dashboard",
        icon: <HomeOutlinedIcon />,
        activeIcon: <HomeOutlinedIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-admin", "role-mne", "role-program-coordinator"],
      },
      {
        label: "Baseline forms",
        link: "/nurture-phase/form-builder",
        icon: <ArticleIcon />,
        activeIcon: <ArticleIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-mne",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-program-coordinator",
          "role-sahyogi",
        ],
      },

      {
        label: "Peer management",
        link: "/nurture-phase/peer-management",
        icon: <GroupIcon />,
        activeIcon: <GroupIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-mne",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-sahyogi",
          "role-program-coordinator",
        ],
      },
      {
        type: "separator",
      },
      { type: "heading", title: "Assessment Forms" },
      {
        label: "Dashboard",
        link: "/nurture-phase/assessment-forms/dashboard",
        icon: <PieChartIcon />,
        activeIcon: <PieChartIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-mne",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-tnd",
          "role-program-coordinator",
          "role-sahyogi",
        ],
      },
      {
        label: "Pre & Post forms",
        link: "/nurture-phase/assessment-forms",
        icon: <PollIcon />,
        activeIcon: <PollIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-mne",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-tnd",
          "role-program-coordinator",
          "role-sahyogi",
        ],
      },
      {
        type: "separator",
      },
      { type: "heading", title: "Training" },
      {
        label: "Dashboard",
        link: "/nurture-phase/training/dashboard",
        icon: <DashboardRoundedIcon />,
        activeIcon: <DashboardRoundedIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-mne",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-tnd",
          "role-program-coordinator",
          "role-sahyogi",
          "role-facilitator",
        ],
      },
      {
        label: "Curriculum",
        link: "/nurture-phase/training/curriculum",
        icon: <AssignmentRoundedIcon />,
        activeIcon: <AssignmentRoundedIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-admin", "role-tnd", "role-facilitator"],
      },
      {
        label: "Training groups",
        link: "/nurture-phase/training/training-groups",
        icon: <GroupsRoundedIcon />,
        activeIcon: <GroupsRoundedIcon sx={{ color: "secondary.main" }} />,
      },
      {
        label: "Trainers",
        link: "/nurture-phase/training/trainers",
        icon: <SupervisorAccountOutlinedIcon />,
        activeIcon: (
          <SupervisorAccountOutlinedIcon sx={{ color: "secondary.main" }} />
        ),
        roles: ["role-admin", "role-tnd"],
      },
      {
        type: "separator",
      },
      { type: "heading", title: "Peer Members" },
      {
        label: "Dashboard",
        link: "/nurture-phase/training/peer-member-training/dashboard",
        icon: <DashboardRoundedIcon />,
        activeIcon: <DashboardRoundedIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-mne",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-tnd",
          "role-program-coordinator",
          "role-sahyogi",
          "role-facilitator",
        ],
      },

      {
        label: "Curriculum List",
        link: "/nurture-phase/training/peer-member-training/curriculum",
        icon: <AssignmentRoundedIcon />,
        activeIcon: <AssignmentRoundedIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-tnd",
          "role-program-manager",
          "role-program-coordinator",
          "role-sahyogi",
        ],
      },
      {
        label: "Girl Icon",
        link: "/nurture-phase/training/peer-member-training/girl-icon",
        icon: <GirlIcon />,
        activeIcon: <GirlIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-admin",
          "role-tnd",
          "role-program-manager",
          "role-program-coordinator",
          "role-sahyogi",
        ],
      },
    ],
  },
  {
    label: "Social Action Project",
    icon: <GirlIcon />,
    activeIcon: <GirlIcon sx={{ color: "secondary.main" }} />,
    roles: ["role-sahyogi", "role-program-coordinator", "role-program-manager"],
    nestedItems: [
      {
        label: "Applications",
        link: "/user-management/social-action-project",
        icon: <AssignmentRoundedIcon />,
        activeIcon: <AssignmentRoundedIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-sahyogi"],
      },
      {
        label: "Applications",
        link: "/user-management/social-action-project/sap-applications",
        icon: <AssignmentRoundedIcon />,
        activeIcon: <AssignmentRoundedIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-program-coordinator", "role-program-manager"],
      },
      {
        label: "Projects",
        link: "/user-management/social-action-project/projects",
        icon: <CorporateFareIcon />,
        activeIcon: <CorporateFareIcon sx={{ color: "secondary.main" }} />,
        roles: [
          "role-program-coordinator",
          "role-program-manager",
          "role-sahyogi",
        ],
      },
    ],
  },
  {
    label: "Girl Icon",
    link: "/user-management/girl-icon",
    icon: <GirlIcon />,
    activeIcon: <GirlIcon sx={{ color: "secondary.main" }} />,
    roles: ["role-sahyogi"],
  },
  {
    type: "separator",
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
        label: "Director",
        link: "/user-management/director",
        icon: <StoreMallDirectoryIcon />,
        activeIcon: <StoreMallDirectoryIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-admin"],
      },
      {
        label: "Program Head",
        link: "/user-management/program-head",
        icon: <PsychologyRoundedIcon />,
        activeIcon: <PsychologyRoundedIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-admin"],
      },
      {
        label: "Training and Design",
        link: "/user-management/tnd",
        icon: <DesignServicesRoundedIcon />,
        activeIcon: (
          <DesignServicesRoundedIcon sx={{ color: "secondary.main" }} />
        ),
        roles: ["role-admin"],
      },
      {
        label: "Monitoring and Evaluation",
        link: "/user-management/mne",
        icon: <MonitorRoundedIcon />,
        activeIcon: <MonitorRoundedIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin"],
      },
      {
        label: "State heads",
        link: "/user-management/state-head",
        icon: <PublicIcon />,
        activeIcon: <PublicIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-program-head"],
      },
      {
        label: "Program managers",
        link: "/user-management/program-managers",
        icon: <ManageAccountsIcon />,
        activeIcon: <ManageAccountsIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-program-head", "role-state-admin"],
      },
      {
        label: "Coordinators",
        link: "/user-management/coordinators",
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
        label: "Facilitators",
        link: "/user-management/facilitators",
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
        label: "Sahyogis",
        link: "/user-management/sahyogis",
        icon: <ContentPasteIcon />,
        activeIcon: <ContentPasteIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-program-coordinator",
        ],
      },
      {
        label: "Volunteer",
        link: "/user-management/volunteer",
        icon: <VolunteerActivismIcon />,
        activeIcon: <VolunteerActivismIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-program-coordinator",
        ],
      },
      {
        label: "Girl Icon",
        link: "/user-management/girl-icon",
        icon: <GirlIcon />,
        activeIcon: <GirlIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-program-coordinator",
          "role-sahyogi",
        ],
      },
      {
        label: "Peer Members",
        link: "/user-management/peer-members",
        icon: <EmojiPeopleIcon />,
        activeIcon: <EmojiPeopleIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-hr",
          "role-tnd",
          "role-program-head",
          "role-state-admin",
          "role-program-manager",
          "role-program-coordinator",
        ],
      },
      {
        type: "separator",
      },
      {
        label: "Assessors",
        link: "/user-management/assessors",
        icon: <PlaylistAddCheckIcon />,
        activeIcon: <PlaylistAddCheckIcon sx={{ color: "secondary.main" }} />,

        roles: [
          "role-admin",
          "role-state-admin",
          "role-program-manager",
          "role-tnd",
          "role-program-head",
        ],
      },
      {
        label: "VSC Leads",
        link: "/user-management/vsc-leads",
        icon: <LeaderboardIcon />,
        activeIcon: <LeaderboardIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-state-admin", "role-tnd"],
      },
      {
        label: "Orientation Leads",
        link: "/user-management/orientation-leads",
        icon: <SchoolIcon />,
        activeIcon: <SchoolIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-state-admin", "role-tnd"],
      },
      {
        label: "VSC Call Support",
        link: "/user-management/vsc-call-support",
        icon: <SupportAgentIcon />,
        activeIcon: <SupportAgentIcon sx={{ color: "secondary.main" }} />,

        roles: ["role-admin", "role-state-admin", "role-tnd"],
      },
      {
        label: "Interviewers",
        link: "/user-management/interviewers",
        icon: <AssessmentIcon />,
        activeIcon: <AssessmentIcon sx={{ color: "secondary.main" }} />,
        roles: ["role-admin", "role-state-admin", "role-tnd"],
      },
    ],
  },
  {
    label: "Application Cycle",
    link: "/application-cycle",
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
    label: "Settings",
    icon: <SettingsIcon />,
    roles: ["role-admin", "role-tnd", "role-program-head", "role-director"],
    nestedItems: [
      {
        label: "Vulnerability Metrics",
        link: "/settings/vulnerability-metrics",
        icon: <TableViewIcon />,
        activeIcon: <TableViewIcon sx={{ color: "secondary.main" }} />,
      },
      {
        label: "Video Assessment Metrics",
        link: "/settings/video-assessment",
        icon: <VideoSettingsIcon />,
        activeIcon: <VideoSettingsIcon sx={{ color: "secondary.main" }} />,
      },
      {
        label: "VSC Metrics",
        link: "/settings/vsc-metrics",
        icon: <PeopleAltIcon />,
        activeIcon: <PeopleAltIcon sx={{ color: "secondary.main" }} />,
      },
      {
        label: "Interview Metric",
        link: "/settings/interview-metric",
        icon: <ContactPhoneIcon />,
        activeIcon: <ContactPhoneIcon sx={{ color: "secondary.main" }} />,
      },
      {
        label: "MNE Metric",
        link: "/settings/mne-metrics",
        icon: <MonitorIcon />,
        activeIcon: <MonitorIcon sx={{ color: "secondary.main" }} />,
      },
    ],
  },
];
