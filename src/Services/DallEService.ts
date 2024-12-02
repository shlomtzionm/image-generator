import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { DallEResponseModel } from "../Models/DallEResponseModel";

class DallEService {
  public async generateImage(prompt: string): Promise<string> {
    const requestBody = {
      model: "dall-e-3",
      prompt,
    };

    const options = {
      headers: {
        authorization: "Bearer " + appConfig.apiKey,
      },
    };

    const axiosResponse = await axios.post<DallEResponseModel>(appConfig.dallE3Url, requestBody, options);
    const DallEResponse = axiosResponse.data;

    const url = DallEResponse.data[0].url;

    return url;
  }
}

export const dallEService = new DallEService();
