import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useSpring, animated } from "react-spring";

export default function HomeCard({ text, content }) {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.5) rotate(-45deg)' },
    to: { opacity: 1, transform: 'scale(1) rotate(0deg)' },
    config: { tension: 280, friction: 20, duration: 800 } // Adjust tension, friction, and duration as needed
  });

  return (
    <animated.div style={animationProps}>
      <Card className="mt-6 w-full sm:w-1/2 rounded-lg p-6 bg-white border border-gray-200 shadow dark:bg-teal-300 dark:border-gray-700">
        <CardBody>
          <Typography variant="h5" color="black" className="mb-2 text-2xl">
            {text}
          </Typography>
          <Typography className="text-black text-lg tracking-wide">
            {content}
          </Typography>
        </CardBody>
      </Card>
    </animated.div>
  );
}
