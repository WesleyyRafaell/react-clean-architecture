import axios from "axios";

import { HttpResponse, IHttpClient } from "@infra/contracts/http-client";

export class AxiosHttpClient implements IHttpClient {
  async request(params: IHttpClient.Params): Promise<HttpResponse> {
    const {data} = await axios.request<HttpResponse>({
      method: params.method,
      url: params.url,
    });

    return {data}
  }
}