import React from "react";
// import RightSection from "../components/RightSection";
// import LeftSection from "../components/LeftSection";
// import LeftSecttion from "./LeftSection";
// import RightSection from "./RightSection";
// import LeftSection from "./LeftSection";

const JobSeekerComponent = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto flex flex-col md:flex-row">
      <LeftSection />
      <RightSection />
    </div>
  </section>
);

export default JobSeekerComponent;



// Left section checkmark data
const benefits = [
  "User friendly mobile app",
  "New jobs everyday",
  "Payout in 24hrs",
  "Employment benefits",
  "Temporary & permanent positions",
];

// Component for the left section
const LeftSection = () => (
  <div className="flex-1 p-8">
    <h4 className="text-yellow-600 text-xs uppercase">For Job Seekers</h4>
    <h1 className="text-4xl font-bold mb-4">
      Connecting You With <span className="text-green-600">Flexible Work</span>
    </h1>
    <ul className="list-none space-y-4">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {benefit}
        </li>
      ))}
    </ul>
    <div className="mt-8">
      <a href="#" className="text-yellow-600 text-lg font-bold">
        Learn More &rarr;
      </a>
    </div>
  </div>
);






import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// Job card animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Component for the right section
const RightSection = () => (
  <motion.div
    className="flex-1 p-8"
    initial="hidden"
    animate="visible"
    variants={cardVariants}
  >
    <Card className="shadow-lg rounded-lg mb-4" sx={{ mb: 4 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" component="h4" fontWeight="bold">
              Food Production
            </Typography>
            <Typography color="textSecondary" variant="body2">
              1234 Main Street
            </Typography>
          </Box>
          <Typography variant="h5" color="green">
            $220
          </Typography>
        </Box>
        <Typography color="textSecondary" mt={1}>
          <span className="inline-block text-green-600 mr-2">🕒</span>
          7:00 pm - 3:30 am PST
          <br />
          30 min paid break
        </Typography>
      </CardContent>
    </Card>

    <Card className="shadow-lg rounded-lg mb-4" sx={{ mb: 4 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" component="h4" fontWeight="bold">
              E-transfer
            </Typography>
            <Typography color="textSecondary" variant="body2">
              johndoe@gmail.com
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Food Production
            </Typography>
          </Box>
          <Typography variant="h5" color="green">
            $220
          </Typography>
        </Box>
        <Typography color="textSecondary" mt={1}>
          Jan 25, Tuesday <br />
          7:00 pm - 3:30 am PST <br />
          30 min paid break
        </Typography>
      </CardContent>
    </Card>

    <Card
      className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 mb-4"
      sx={{ mb: 4 }}
    >
      <CardContent>
        <Typography variant="h6" component="p" fontWeight="bold">
          Congrats! Job has been awarded!
        </Typography>
        <Typography color="textSecondary" variant="body2">
          You can now start preparing for your job.
        </Typography>
      </CardContent>
    </Card>

    <Box className="grid grid-cols-2 gap-4">
      <Button
        variant="contained"
        fullWidth
        className="bg-gray-100 p-4 rounded-lg text-center"
        sx={{ m: 1 }}
      >
        Warehousing
      </Button>
      <Button
        variant="contained"
        fullWidth
        className="bg-gray-100 p-4 rounded-lg text-center"
        sx={{ m: 1 }}
      >
        Manufacturing
      </Button>
      <Button
        variant="contained"
        fullWidth
        className="bg-gray-100 p-4 rounded-lg text-center col-span-2"
        sx={{ m: 1 }}
      >
        Food Production
      </Button>
    </Box>
  </motion.div>
);
