import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: "25px auto",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <Typography variant="h4">{info.city}</Typography>

        <Typography variant="h6">
          {info.region}, {info.country}
        </Typography>

        <img src={info.icon} alt="weather icon" />

        <Typography>
          🌡 Temperature:
          {info.temp}°C
        </Typography>

        <Typography>
          🤗 Feels Like:
          {info.feelsLike}°C
        </Typography>

        <Typography>
          💧 Humidity:
          {info.humidity}%
        </Typography>

        <Typography>
          🌪 Wind:
          {info.wind} km/h
        </Typography>

        <Typography>
          ☁ Condition:
          {info.condition}
        </Typography>

        <Typography>
          🕒 Updated:
          {info.lastUpdated}
        </Typography>
      </CardContent>
    </Card>
  );
}
