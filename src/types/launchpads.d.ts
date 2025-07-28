export interface Launchpad {
  id: string;
  name: string;
  full_name: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  timezone: string;
  status: string;
  launch_attempts: number;
  launch_successes: number;
  rockets: string[];
  launches: string[];
  details: string;
  images: {
    large: string[];
  };
}
