// lib/fetchHomePageData.js

import axios from "axios";
import crypto from "crypto";

export async function fetchFormData({ host }, formSlug) {
  const baseurl = "https://cms.admin.tezcommerce.com:3340/api/client";
  const timeStamp = Math.floor(Date.now());

  // ❌ WARNING: Don't use real secrets in client-side code
  const key = "fd6c56a1a7ffd51e9f4cfd8ea3ae4a0dfb9f334d5a862778";
  const secret =
    "97ab14570ce5bbc9ef429a680e88646285dde85b54aeb70f3558840664c20199";

  const body = {
    timestamp: timeStamp,
  };

  const payload = Buffer.from(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host || "localhost:3000",
  };

  try {
    const response = await axios.get(`${baseurl}/form/fields/${formSlug}`, {
      headers,
    });

    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    // throw new Error('Failed to fetch home page data.');
  }
}
