import Moment from "moment";
import { currentEducationData } from "./dataModifiers/girl-icon-menu-details";

export const handleGetDate = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("DD MMM YYYY");
};

export const handleGetFullDateAndDay = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("dddd, MMM DD, YYYY");
};

export const handleGetDateWithOrdinals = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("Do MMMM YYYY");
};

export const handleGetDayMonth = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("DD MMM");
};

export const handleGetDateFmt = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("YYYY-MM-DD");
};

export const getTimeOnly = (date: any) => {
  return Moment(date).format("hh:mm");
};

export const getTimeAmPm = (date: any) => {
  return Moment(date).utc().format("h:mm a");
};

export const getDateCalendarFmt = (date: any) => {
  return Moment(date).format("dddd, MMM DD");
};

export const getTimeOnlyOneHour = (date: any) => {
  return Moment(date).add(1, "hour").format("hh:mm a");
};

export const handleGetDateAndTime = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("DD MMM YYYY hh:mm a");
};
export const get24hrTime = (date: any) => {
  return Moment(date).format("HH:mm");
};

export const get24hrTimeWithSeconds = (date: any) => {
  return Moment(date).format("HH:mm:ss");
};

export const get24hrEndTime = (date: any) => {
  return Moment(date).add(1, "hour").format("HH:mm");
};

export const getTimeIn12Hour = (date: any) => {
  return Moment(date).format("h:mm A");
};

export const convert24Hrto12Hr = (date: any) => {
  return Moment(date, ["HH:mm"]).format("hh:mm A");
};

export const getDateInHTMLFormat = (date: any) => {
  return Moment(date).format("YYYY-MM-DD");
};

export const getDateInSlashFormat = (date: any) => {
  return Moment(date).format("DD/MM/YYYY");
};

export const getSessionStartDate = (date: any) => {
  return Moment(date).format("dddd DD MMM, h:mm A");
};

export const getCurriculumMeetingData = (date: any) => {
  return Moment(date).format("dddd, DD MMM");
};

export const getRolesForTabs = (rolesTabs: any, userRole: string) => {
  let requiredIndex = -1;
  rolesTabs.forEach((role: any, index: number) => {
    if (role.label.includes(userRole)) {
      requiredIndex = index;
    }
  });

  return rolesTabs.slice(requiredIndex + 1, rolesTabs.length);
};

export const getTotalPoints = (arrayList: any) => {
  let sum = arrayList?.reduce((accumulator: any, curValue: any) => {
    return accumulator + curValue.max_points;
  }, 0);
  return sum;
};

export const getAssessmentTotal = (arrayList: any) => {
  let sum = arrayList?.reduce((accumulator: any, curValue: any) => {
    return accumulator - 1 + curValue.max_points;
  }, 0);
  return sum;
};

export const getScoreTotalPoints = (arrayList: any) => {
  let sum = arrayList?.reduce((accumulator: any, curValue: any) => {
    return accumulator + curValue.score;
  }, 0);
  return sum;
};

export const summationOfArrayObjectValues = (arrayList: any) => {
  let sum: number = 0;
  arrayList.forEach((option: any) => {
    sum += option?.points;
  });

  return sum;
};

export const getAge = (dateString: any) => {
  return String(Moment().diff(dateString, "years"));
};

export const getClass = (curClass: number) => {
  return currentEducationData.find((clssObj: any) => clssObj.id === curClass)
    ?.name;
};
