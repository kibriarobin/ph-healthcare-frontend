
const prefix = "/patient";

export const patientRoutes = [
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
    title: "Appointments",
    items: [
      {
        title: "Book Appointment",
        url: `${prefix}/book-appointment`,
      },
      {
        title: "My Appointments",
        url: `${prefix}/appointments`,
      },
    ],
  },
  {
    title: "Records",
    items: [
      {
        title: "Prescriptions",
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