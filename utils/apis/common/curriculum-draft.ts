import { post } from "@/src/config/axiosClient";

export const SaveCurriculumAsDraft = (formData: any) => {
  return new Promise((resolve, reject) => {
    post(`nurture/training-curriculums`, formData).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
