
const prefix = "/doctor";

export const doctorRoutes = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        url: `${prefix}`,
      },
    ],
  },
  {
    title: "Schedule",
    items: [
      {
        title: "My Schedules",
        url: `${prefix}/schedules`,
      },
      {
        title: "Create Schedule",
        url: `${prefix}/schedules/create`,
      },
    ],
  },
  {
    title: "Appointments",
    items: [
      {
        title: "My Appointments",
        url: `${prefix}/appointments`,
      },
      {
        title: "Write Prescription",
        url: `${prefix}/prescriptions`,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        title: "Profile",
        url: `${prefix}/profile`,
      },
    ],
  },
];