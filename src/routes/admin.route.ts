
const prefix = "/admin";

export const adminRoutes = [
  {
    title: "Management",
    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Doctor Applications",
        url: `${prefix}/approve-doctor`,
      },
      {
        title: "Manage Doctors",
        url: `${prefix}/doctors`,
      },
      {
        title: "Manage Patients",
        url: `${prefix}/patients`,
      },
    ],
  },
  {
    title: "Appointments",
    items: [
      {
        title: "All Appointments",
        url: `${prefix}/appointments`,
      },
      {
        title: "Payments",
        url: `${prefix}/payments`,
      },
    ],
  },
];