import express from "express";
import { apiLimiter } from "../middlewares/rateLimiter";
import { AdminRoutes } from "../modules/admin/admin.routes";
import { AppointmentRoutes } from "../modules/appointment/appointment.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { DoctorRoutes } from "../modules/doctor/doctor.routes";
import { DoctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.routes";
import { MetaRoutes } from "../modules/meta/meta.routes";
import { PatientRoutes } from "../modules/patient/patient.route";
import { PaymentRoutes } from "../modules/payment/payment.routes";
import { PrescriptionRoutes } from "../modules/prescription/prescription.routes";
import { ReviewRoutes } from "../modules/review/review.routes";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes";
import { SpecialtiesRoutes } from "../modules/specialties/specialties.routes";
import { userRoutes } from "../modules/user/user.routes";

const router = express.Router();

router.use(apiLimiter); // Apply to all routes

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/specialties",
    route: SpecialtiesRoutes,
  },
  {
    path: "/doctor",
    route: DoctorRoutes,
  },
  {
    path: "/patient",
    route: PatientRoutes,
  },
  {
    path: "/schedule",
    route: ScheduleRoutes,
  },
  {
    path: "/doctor-schedule",
    route: DoctorScheduleRoutes,
  },
  {
    path: "/appointment",
    route: AppointmentRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
  {
    path: "/prescription",
    route: PrescriptionRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
  {
    path: "/meta",
    route: MetaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
