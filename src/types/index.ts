export interface JobProps {
    id: string;
    name: string;
    job_address: {
      street: string;
      district: string;
      city: string;
      zipcode: string;
    };
    level: string;
    major: { name: string }[];
    min_salary: string;
    max_salary: string;
  }

export  interface JobDetailProps {
    id: any;
    name: string;
    job_address: {
      street: string;
      district: string;
      city: string;
      zipcode: string;
    };
    level: string;
    major: { name: string }[];
    min_salary: string;
    max_salary: string;
    description: string;
    expired_time: string;
  }

  export interface CompanyDetailProps {
    id: string;
    name: string;
    company_address: {
      street: string;
      district: string;
      city: string;
      zipcode: string;
    };
    major: [
      {
        name: string;
      },
    ];
    personal_introduction: string;
  }

  export interface CompanyProps {
    id: string;
    name: string;
    company_address: {
      street: string;
      district: string;
      city: string;
      zipcode: string;
    };
    major: [
      {
        name: string;
      },
    ];
    personal_introduction: string;
  }