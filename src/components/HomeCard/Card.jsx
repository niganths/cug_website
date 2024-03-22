import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function HomeCard({ text, content }) {
  return (
    <Card className="mt-6  w-1/2 rounded-lg  p-6 bg-white border border-gray-200  shadow dark:bg-teal-300 dark:border-gray-700">
      <CardBody>
        <Typography variant="h5" color="black" className="mb-2 text-2xl">
          {text}
        </Typography>
        <Typography className="text-black text-lg tracking-wide">
          {content}
        </Typography>
      </CardBody>
    </Card>
  );
}
