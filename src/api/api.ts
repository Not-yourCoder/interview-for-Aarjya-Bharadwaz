/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LaunchResponse } from "@/types/launches";
import type { Launchpad } from "@/types/launchpads";
import type { Payload } from "@/types/payloads";
import type { Rocket } from "@/types/rockets";
import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v4";

export const getLaunches = async (): Promise<LaunchResponse[]> => {
  const res = await axios.get<LaunchResponse[]>(`${BASE_URL}/launches`);
  return res.data;
};

export const getLaunchpads = async (): Promise<Launchpad[]> => {
  const res = await axios.get<Launchpad[]>(`${BASE_URL}/launchpads`);
  return res.data;
};

export const getLaunchePadsById = async (
  id: string
): Promise<any[]> => {
  const res = await axios.get<any[]>(
    `${BASE_URL}/launchpads/${id}`
  );
  return res.data;
};

export const getRockets = async (): Promise<Rocket[]> => {
  const res = await axios.get<Rocket[]>(`${BASE_URL}/rockets`);
  return res.data;
};

export const getRocketsById = async (
  id: string
): Promise<any[]> => {
  const res = await axios.get<any[]>(`${BASE_URL}/rockets/${id}`);
  return res.data;
};

export const getPayloads = async (): Promise<Payload[]> => {
  const res = await axios.get<Payload[]>(`${BASE_URL}/payloads`);
  return res.data;
};

