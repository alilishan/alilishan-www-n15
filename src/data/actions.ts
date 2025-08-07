import data from "@/data/resume_json.json";

export const getResumeDataByKey = async (key: keyof typeof data): Promise<any> => {
    const data = await import("@/data/resume_json.json");
    return data[key];
}
