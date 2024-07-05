import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LeadsService {
  private readonly amoApiUrl = `https://${process.env.YOUR_AMOCRM_URL}.amocrm.ru`;
  private accessToken: string | null = null;
  private refresh_token: string | null = null;
  constructor() {}

  private async auth(): Promise<void> {
    try {
      const { data } = await axios.post(
        `${this.amoApiUrl}/oauth2/access_token`,
        {
          client_id: process.env.AMOCRM_CLIENT_ID,
          client_secret: process.env.AMOCRM_CLIENT_SECRET,
          grant_type: 'authorization_code',
          code: process.env.AMOCRM_AUTH_CODE,
          redirect_uri: process.env.AMOCRM_REDIRECT_URI,
        },
      );
      this.accessToken = data.access_token;
      this.refresh_token = data.refresh_token;
    } catch (error) {
      console.log('error', error);
    }
  }

  async getLeads(query?: string) {
    try {
      this.auth();
      const { data } = await axios.get(`${this.amoApiUrl}/api/v4/leads`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        params: {
          query,
        },
      });
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
}
