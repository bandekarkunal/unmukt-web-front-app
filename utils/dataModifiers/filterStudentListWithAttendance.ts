export const getMeetingAttendenceStats = (
  attendanceList: any,
  status: boolean
) => {
  let count: number = 0;
  attendanceList?.forEach((option: any) => {
    if (option.attendance === status) count++;
  });
  return count;
};

export const filterStudentsListWithAttendance = (
  peerList: any,
  status: boolean
) => {
  let requiredArr: any = [];
  peerList?.forEach((option: any) => {
    if (option?.attendance === status) {
      requiredArr.push(option);
    }
  });

  return requiredArr;
};
