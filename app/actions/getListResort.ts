"use client";

import axios from "axios";

export default async function getListResort(pageNo: string) {
  try {
    const listResort = await axios.get(
      `https://holiday-swap.click/api/v1/resorts?pageNo=${pageNo}&pageSize=9`
    );

    if (!listResort) {
      return null;
    }

    return listResort.data;
  } catch (error) {}
}
