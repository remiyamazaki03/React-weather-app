export default function Information(props) {
  if (props.information) {
    return (
      <ul>
        <li>Temperature: {props.information.temperature}°C</li>
        <li>Description: {props.information.description}</li>
        <li>Humidity: {props.information.humidity}%</li>
        <li>Wind: {props.information.wind}km/hr</li>
      </ul>
    );
  }
}
