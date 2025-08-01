export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  flickr_images: string[];

  height: {
    meters: number;
    feet: number;
  };

  diameter: {
    meters: number;
    feet: number;
  };

  mass: {
    kg: number;
    lb: number;
  };

  first_stage: {
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };

  second_stage: {
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      option_1: string;
      composite_fairing: {
        height: {
          meters: number;
          feet: number;
        };
        diameter: {
          meters: number;
          feet: number;
        };
      };
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };

  engines: {
    isp: {
      sea_level: number;
      vacuum: number;
    };
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
  };

  landing_legs: {
    number: number;
    material: string | null;
  };

  payload_weights: {
    id: string;
    name: string;
    kg: number;
    lb: number;
  }[];
}
