// A few components should not be shown in the header depending on a few pages. Primarily pages that require no auth code. So for such pages, we return false.

export const sidebarChecks = (pathname: string) => {
  let listOfPathname: any = [
    "/",
    "/admin-signin",
    "/login/google",
    "/user-management/add-assessors",
    "/user-management/add-leads",
    "/user-management/add-call-support",
    "/user-management/add-interviewers",
    "/user-management/orientation-leads/send-invites",
    "/user-management/girl-icon/[user_uuid]",
    "/application-cycle/[single_cycle_id]",
    "/application-cycle/[single_cycle_id]/create-vsc-schedule/[assessment_id]",
    "/identify-phase/[applicationUuid]",
    "/identify-phase/vsc-call-support/[uuid]",
    "/identify-phase/vsc-call-support/[uuid]/check-lists",
    "/identify-phase/vsc-process/single-session/[group_uuid]",
    "/identify-phase/vsc-process/unassigned-applications",
    "/identify-phase/personal-interview/unassigned-applications",
    "/nurture-phase/training/peer-member-training/curriculum/create-curriculum",
    "/nurture-phase/training/peer-member-training/single-curriculum-details/[uuid]",
    "/nurture-phase/training/peer-member-training/girl-icon/[uuid]",
    "/nurture-phase/training/peer-member-training/girl-icon/[uuid]/single-curriculum/[curriculum_uuid]",
    "/nurture-phase/training/peer-member-training/girl-icon/[uuid]/single-curriculum/[curriculum_uuid]/single-curriculum-meeting/[meeting_id]",
    "/nurture-phase/training/peer-member-training/single-curriculum-details/[uuid]/single-meeting/[meeting_id]",
  ];
  if (listOfPathname.indexOf(pathname) !== -1) {
    return false;
  }
  return true;
};
