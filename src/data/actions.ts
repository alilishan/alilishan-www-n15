import data from "@/data/resume_json.json";

export const getResumeDataByKey = async (key: keyof typeof data): Promise<any> => {
    return data[key];
}
