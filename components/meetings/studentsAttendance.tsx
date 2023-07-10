import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import StatusTabs from "../ui-components/StatusTabs";
import { filterStudentsListWithAttendance } from "@/utils/dataModifiers/filterStudentListWithAttendance";

interface props {
  peerAttendanceList: any;
}

const peerList = [
  {
    attendance: true,
    attendee: "189",

    email: "peerthreae5454@think201.xyz",
    first_name: "Nishchitha",
    last_name: "Test 1",
    phone: "9878455569",
    status: "yet_to_join",
    uuid: "da438fd4-11e4-4755-ae9c-42e7cc185d96",
  },
  {
    attendance: false,
    attendee: "189",

    email: "peerthreae5454@think201.xyz",
    first_name: "Nishchitha",
    last_name: "Test 2",
    phone: "9878455569",
    status: "yet_to_join",
    uuid: "da438fd4-11e4-4755-ae9c-42e7cc185d91",
  },
  {
    attendance: true,
    attendee: "189",

    email: "peerthreae5454@think201.xyz",
    first_name: "Nishchitha",
    last_name: "Test 3",
    phone: "9878455569",
    status: "yet_to_join",
    uuid: "da438fd4-11e4-4755-ae9c-42e7cc185d99",
  },
  {
    attendance: false,
    attendee: "189",
    email: "peerthreae5454@think201.xyz",
    first_name: "Nishchitha",
    last_name: "Test 4",
    phone: "9878455569",
    status: "yet_to_join",
    uuid: "da438fd4-11e4-4755-ae9c-42e7cc185d98",
  },
  {
    attendance: false,
    attendee: "189",
    email: "peerthreae5454@think201.xyz",
    first_name: "Nishchitha",
    last_name: "Test 5",
    phone: "9878455569",
    status: "yet_to_join",
    uuid: "da438fd4-11e4-4755-ae9c-42e7cc185d97",
  },
];

const StudentsAttendance: React.FunctionComponent<props> = ({
  peerAttendanceList,
}) => {
  // const [peerList, setPeerList] = useState<any | []>([]);

  // const handleSingleAppTabChange = (option: any) => {
  //   if (option === "all") {
  //     setPeerList([...peerAttendanceList]);
  //     return;
  //   }
  //   setPeerList(filterStudentsListWithAttendance(peerAttendanceList, option));
  // };

  // useEffect(() => {
  //   setPeerList(peerAttendanceList);
  // }, [peerAttendanceList]);

  return (
    <Box py={3}>
      {/* <StatusTabs
        tabOptions={applicationTabOptions}
        onTabChange={handleSingleAppTabChange}
      /> */}
      <Box border="1px solid #E0E0E0" mt={2}>
        <Box
          bgcolor="#FCFCFC"
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontSize="0.875rem" fontWeight={600} color="#444444DE">
            Student Name
          </Typography>
          <Typography fontSize="0.875rem" fontWeight={600} color="#444444DE">
            Attendance
          </Typography>
        </Box>

        {peerList?.map((item: any, index: number) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop="1px solid #E0E0E0"
            p={2}
            key={index}
          >
            <Typography fontSize="0.875rem" fontWeight={600} color="#444444DE">
              {item?.first_name} {item?.last_name}
            </Typography>
            <Box bgcolor={item.attendance ? "#E8FDE6" : "#FF00001C"} p={1}>
              <Typography
                fontSize="0.8125rem"
                fontWeight={600}
                color={item.attendance ? "#287D2B" : "#C61717"}
              >
                {item.attendance ? "ATTENDED" : "ABSENT"}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StudentsAttendance;
