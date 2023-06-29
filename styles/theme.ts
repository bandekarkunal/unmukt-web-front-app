import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    secondaryLight: Palette["primary"];
    va_required: Palette["primary"];
    vsc_required: Palette["primary"];
    va_passed: Palette["primary"];
    va_failed: Palette["primary"];
    draft: Palette["primary"];
    seen: Palette["primary"];
    published: Palette["primary"];
    unpublished: Palette["primary"];
    submitted: Palette["primary"];
    peer_submitted: Palette["primary"];
    orientation_scheduled: Palette["primary"];
    vsc_passed: Palette["primary"];
    vsc_failed: Palette["primary"];
    interview_scheduled: Palette["primary"];
    interview_passed: Palette["primary"];
    interview_failed: Palette["primary"];
    selected: Palette["primary"];
    reserve_list: Palette["primary"];
    enrolled: Palette["primary"];
    congratulatory_scheduled: Palette["primary"];
    active: Palette["primary"];
    initiated: Palette["primary"];
    agent_connected: Palette["primary"];
    connecting: Palette["primary"];
    connected: Palette["primary"];
    in_progress: Palette["primary"];
    completed: Palette["primary"];
    agent_disconnected: Palette["primary"];
    not_connected: PaletteOptions["primary"];
    agent_no_answer: PaletteOptions["primary"];
    baseline: Palette["primary"];
    endline: Palette["primary"];
    session_completed: Palette["primary"];
    session_pending: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    secondaryLight?: PaletteOptions["primary"];
    va_required: PaletteOptions["primary"];
    vsc_required: PaletteOptions["primary"];
    va_passed: PaletteOptions["primary"];
    va_failed: PaletteOptions["primary"];
    draft: PaletteOptions["primary"];
    seen: PaletteOptions["primary"];
    published: PaletteOptions["primary"];
    unpublished: PaletteOptions["primary"];
    submitted: PaletteOptions["primary"];
    peer_submitted: PaletteOptions["primary"];
    orientation_scheduled: PaletteOptions["primary"];
    vsc_passed: PaletteOptions["primary"];
    vsc_failed: PaletteOptions["primary"];
    interview_scheduled: PaletteOptions["primary"];
    interview_passed: PaletteOptions["primary"];
    interview_failed: PaletteOptions["primary"];
    selected: PaletteOptions["primary"];
    reserve_list: PaletteOptions["primary"];
    enrolled: PaletteOptions["primary"];
    congratulatory_scheduled: PaletteOptions["primary"];
    active: PaletteOptions["primary"];
    initiated: PaletteOptions["primary"];
    agent_connected: PaletteOptions["primary"];
    connecting: PaletteOptions["primary"];
    connected: PaletteOptions["primary"];
    in_progress: PaletteOptions["primary"];
    completed: PaletteOptions["primary"];
    agent_disconnected: PaletteOptions["primary"];
    not_connected: PaletteOptions["primary"];
    agent_no_answer: PaletteOptions["primary"];
    sy_approved: PaletteOptions["primary"];
    pc_rejected: PaletteOptions["primary"];
    pc_approved: PaletteOptions["primary"];
    pending: PaletteOptions["primary"];
    baseline: PaletteOptions["primary"];
    endline: PaletteOptions["primary"];
    session_completed: PaletteOptions["primary"];
    session_pending: PaletteOptions["primary"];
  }

  interface Theme {
    custom: {
      pending: {
        dark: string;
        light: string;
        main?: string;
        contrastText?: string;
      };
      va_failed: {
        main: string;
        contrastText: string;
      };
      va_required: {
        main: string;
        contrastText: string;
      };
      vsc_required: {
        main: string;
        contrastText: string;
      };
      va_passed: {
        main: string;
        contrastText: string;
      };
      draft: {
        main: string;
        contrastText: string;
      };
      seen: {
        main: string;
        contrastText: string;
      };
      published: {
        main: string;
        contrastText: string;
      };
      unpublished: {
        main: string;
        contrastText: string;
      };
      peer_submitted: {
        main: string;
        contrastText: string;
      };
      submitted: {
        main: string;
        contrastText: string;
      };
      orientation_scheduled: {
        main: string;
        contrastText: string;
      };
      vsc_passed: {
        main: string;
        contrastText: string;
      };
      vsc_failed: {
        main: string;
        contrastText: string;
      };
      interview_scheduled: {
        main: string;
        contrastText: string;
      };
      interview_passed: {
        main: string;
        contrastText: string;
      };
      interview_failed: {
        main: string;
        contrastText: string;
      };
      selected: {
        main: string;
        contrastText: string;
      };
      reserve_list: {
        main: string;
        contrastText: string;
      };
      enrolled: {
        main: string;
        contrastText: string;
      };
      congratulatory_scheduled: {
        main: string;
        contrastText: string;
      };
      active: {
        main: string;
        contrastText?: string;
      };
      initiated: {
        main: string;
      };
      agent_connected: {
        main: string;
      };
      connecting: {
        main: string;
      };

      in_progress: {
        main: string;
      };
      completed: {
        main: string;
      };
      agent_disconnected: {
        main: string;
        contrastText: string;
      };
      connected: {
        main: string;
        contrastText: string;
      };
      not_connected: {
        main: string;
        contrastText: string;
      };
      agent_no_answer: {
        main: string;
      };
      sy_approved: {
        main: string;
        contrastText: string;
      };
      pc_rejected: {
        main: string;
        contrastText: string;
      };
      pc_approved: {
        main: string;
        contrastText: string;
      };
      reject_application: {
        main: string;
        contrastText: string;
      };
      accept_application: {
        main: string;
        contrastText: string;
      };
      baseline: {
        main: string;
        contrastText: string;
      };
      endline: {
        main: string;
        contrastText: string;
      };
      session_completed: {
        main: string;
        contrastText: string;
      };
      session_pending: {
        main: string;
        contrastText: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      pending: {
        dark?: string;
        light?: string;
        main?: string;
        contrastText?: string;
      };
      va_failed: {
        main: string;
        contrastText: string;
      };
      va_required: {
        main: string;
        contrastText: string;
      };
      vsc_required: {
        main: string;
        contrastText: string;
      };
      va_passed: {
        main: string;
        contrastText: string;
      };
      draft: {
        main: string;
        contrastText: string;
      };
      seen: {
        main: string;
        contrastText: string;
      };
      published: {
        main: string;
        contrastText: string;
      };
      unpublished: {
        main: string;
        contrastText: string;
      };
      submitted: {
        main: string;
        contrastText: string;
      };
      peer_submitted: {
        main: string;
        contrastText: string;
      };
      orientation_scheduled: {
        main: string;
        contrastText: string;
      };
      vsc_passed: {
        main: string;
        contrastText: string;
      };
      vsc_failed: {
        main: string;
        contrastText: string;
      };
      interview_scheduled: {
        main: string;
        contrastText: string;
      };
      interview_passed: {
        main: string;
        contrastText: string;
      };
      interview_failed: {
        main: string;
        contrastText: string;
      };
      selected: {
        main: string;
        contrastText: string;
      };
      reserve_list: {
        main: string;
        contrastText: string;
      };
      enrolled: {
        main: string;
        contrastText: string;
      };
      congratulatory_scheduled: {
        main: string;
        contrastText: string;
      };
      active: {
        main: string;
        contrastText?: string;
      };
      initiated: {
        main: string;
      };
      agent_connected: {
        main: string;
      };
      connecting: {
        main: string;
      };
      connected: {
        main: string;
        contrastText: string;
      };
      in_progress: {
        main: string;
      };
      completed: {
        main: string;
      };
      agent_disconnected: {
        main: string;
        contrastText: string;
      };
      not_connected: {
        main: string;
        contrastText: string;
      };
      agent_no_answer: {
        main: string;
      };
      sy_approved: {
        main: string;
        contrastText: string;
      };
      pc_rejected: {
        main: string;
        contrastText: string;
      };
      pc_approved: {
        main: string;
        contrastText: string;
      };
      baseline: {
        main: string;
        contrastText: string;
      };
      endline: {
        main: string;
        contrastText: string;
      };
      session_completed: {
        main: string;
        contrastText: string;
      };
      session_pending: {
        main: string;
        contrastText: string;
      };
    };
  }

  interface TypographyVariants {
    primaryColorText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    primaryColorText?: React.CSSProperties;
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    session_completed: true;
    session_pending: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primaryColorText: true;
    va_required: true;
    va_passed: true;
    va_failed: true;
    vsc_required: true;
    draft: true;
    seen: true;
    published: true;
    orientation_scheduled: true;
    interview_scheduled: true;
    interview_passed: true;
    interview_failed: true;
    sy_approved: true;
    pc_rejected: true;
    pc_approved: true;
    active: true;
    pending: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    secondaryLight: true;
    baseline: true;
    endline: true;
    va_required: true;
    va_passed: true;
    va_failed: true;
    draft: true;
    seen: true;
    published: true;
    unpublished: true;
    vsc_required: true;
    orientation_scheduled: true;
    interview_scheduled: true;
    interview_passed: true;
    interview_failed: true;
    sy_approved: true;
    pc_rejected: true;
    pc_approved: true;
    active: true;
    pending: true;
    peer_submitted: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: 21,
    },
    h2: {
      fontSize: 20,
      fontWeight: 600,
      color: "#212121",
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
      color: "rgba(0,0,0,0.87)",
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
      color: "#21212",
    },

    subtitle2: {
      fontSize: 15,
      fontWeight: 600,
      color: "#495057",
    },

    subtitle1: {
      fontSize: 14,
      fontWeight: 500,
      color: "#212121",
    },
    body1: {
      fontSize: 13,
    },
    body2: {
      fontSize: 11,
      fontWeight: 700,
    },
    primaryColorText: {
      fontSize: 13,
      fontWeight: 500,
      color: "#7D287D",
    },
    caption: {
      fontSize: 10,
      color: "#919191",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },

  palette: {
    primary: {
      main: "#391439",
    },
    secondary: {
      main: "#7D287D",
      light: "#EAE3F1",
    },
    secondaryLight: {
      main: "#fdeded",
      contrastText: "#5f2120",
    },
    va_failed: {
      main: "#fdeded",
      contrastText: "#5f2120",
    },
    va_required: {
      main: "#e5f6fd",
      contrastText: "#014361",
    },
    vsc_required: {
      main: "#e5f6fd",
      contrastText: "#014361",
    },
    va_passed: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    draft: {
      main: "#fff4e5",
      contrastText: "#663c00",
    },
    seen: {
      main: "#fff4e5",
      contrastText: "#663c00",
    },
    published: {
      main: "#E7F1E3",
      contrastText: "#287D2B",
    },
    unpublished: {
      main: "#FDEDED",
      contrastText: "#C93A3A",
    },
    submitted: {
      main: "#fff4e5",
      contrastText: "#663c00",
    },
    orientation_scheduled: {
      main: "#e5f6fd",
      contrastText: "#014361",
    },
    vsc_passed: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    vsc_failed: {
      main: "#fdeded",
      contrastText: "#5f2120",
    },
    interview_scheduled: {
      main: "#fff4e5",
      contrastText: "#014361",
    },
    interview_passed: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    interview_failed: {
      main: "#fdeded",
      contrastText: "#5f2120",
    },
    selected: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    reserve_list: {
      main: "#fff4e5",
      contrastText: "#014361",
    },
    enrolled: {
      main: "#014361",
      contrastText: "#fff",
    },
    congratulatory_scheduled: {
      main: "#fff4e5",
      contrastText: "#014361",
    },
    error: {
      main: "rgb(175, 47, 47)",
    },
    neutral: {
      main: "#014361",
      contrastText: "#fff",
    },
    active: {
      // main: "#4CAF50",
      // contrastText: "#1e4620",
      main: "#E7F1E3",
      contrastText: "#287D2B",
    },
    initiated: {
      main: "#4CAF50",
    },
    agent_connected: {
      main: "#4CAF50",
    },
    connecting: {
      main: "#03A9F4",
    },
    connected: {
      main: "#4CAF50",
      contrastText: "#edf7ed",
    },
    in_progress: {
      main: "#03A9F4",
    },
    completed: {
      main: "#4CAF50",
    },
    agent_disconnected: {
      main: "#EF5350",
      contrastText: "#FFFFFF",
    },
    not_connected: {
      main: "#014361",
      contrastText: "#e5f6fd",
    },
    agent_no_answer: {
      main: "#663c00",
    },
    sy_approved: {
      main: "#FFFAEC",
      contrastText: "#B2953B",
    },
    pc_approved: {
      main: "#E7F1E3",
      contrastText: "#287D2B",
    },
    pc_rejected: {
      main: "#F1E3E3",
      contrastText: "#C93A3A",
    },
    pending: { main: "#FFFAEC", contrastText: "#B2953B" },
    peer_submitted: { main: "#38C6351F", contrastText: "#287D2B" },
    baseline: {
      main: "#EDF7F9",
      contrastText: "rgba(33, 33, 33, 0.87)",
    },
    endline: {
      main: "#FFF6F4",
      contrastText: "rgba(33, 33, 33, 0.87)",
    },
    session_completed: {
      main: "#D8F2D9",
      contrastText: "#287D2B",
    },
    session_pending: {
      main: "#F9EE9154",
      contrastText: "#BA8705",
    },
  },

  custom: {
    pending: {
      dark: "#663c00",
      light: "#fff4e5",
      main: "#FFFAEC",
      contrastText: "#B2953B",
    },
    va_failed: {
      main: "#fdeded",
      contrastText: "#5f2120",
    },
    va_required: {
      main: "#e5f6fd",
      contrastText: "#014361",
    },
    vsc_required: {
      main: "#e5f6fd",
      contrastText: "#014361",
    },
    va_passed: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    draft: {
      main: "#fff4e5",
      contrastText: "#663c00",
    },
    seen: {
      main: "#fff4e5",
      contrastText: "#663c00",
    },
    published: {
      main: "#E7F1E3",
      contrastText: "#287D2B",
    },
    unpublished: {
      main: "#FDEDED",
      contrastText: "#C93A3A",
    },
    submitted: {
      main: "#fff4e5",
      contrastText: "#663c00",
    },
    orientation_scheduled: {
      main: "#e5f6fd",
      contrastText: "#014361",
    },
    vsc_passed: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    vsc_failed: {
      main: "#fdeded",
      contrastText: "#5f2120",
    },
    interview_scheduled: {
      main: "#fff4e5",
      contrastText: "#014361",
    },
    interview_passed: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    interview_failed: {
      main: "#fdeded",
      contrastText: "#5f2120",
    },

    selected: {
      main: "#edf7ed",
      contrastText: "#1e4620",
    },
    reserve_list: {
      main: "#fff4e5",
      contrastText: "#014361",
    },
    enrolled: {
      main: "#014361",
      contrastText: "#fff",
    },
    congratulatory_scheduled: {
      main: "#fff4e5",
      contrastText: "#014361",
    },
    active: {
      main: "#4CAF50",
    },
    initiated: {
      main: "#4CAF50",
    },
    agent_connected: {
      main: "#4CAF50",
    },
    connecting: {
      main: "#03A9F4",
    },
    connected: {
      main: "#4CAF50",
      contrastText: "#edf7ed",
    },
    in_progress: {
      main: "#03A9F4",
    },
    completed: {
      main: "#4CAF50",
    },
    agent_disconnected: {
      main: "#EF5350",
      contrastText: "#FFFFFF",
    },
    not_connected: {
      main: "#014361",
      contrastText: "#edf7ed",
    },
    agent_no_answer: {
      main: "#663c00",
    },
    sy_approved: {
      main: "#FFFAEC",
      contrastText: "#B2953B",
    },
    pc_approved: {
      main: "#E7F1E3",
      contrastText: "#287D2B",
    },
    pc_rejected: {
      main: "#F1E3E3",
      contrastText: "#C93A3A",
    },
    peer_submitted: { main: "#38C6351F", contrastText: "#287D2B" },
    baseline: {
      main: "#EDF7F9",
      contrastText: "rgba(33, 33, 33, 0.87)",
    },
    endline: {
      main: "#FFF6F4",
      contrastText: "rgba(33, 33, 33, 0.87)",
    },
    session_completed: {
      main: "#D8F2D9",
      contrastText: "#287D2B",
    },
    session_pending: {
      main: "#F9EE9154",
      contrastText: "#BA8705",
    },
  },
});

export default theme;
