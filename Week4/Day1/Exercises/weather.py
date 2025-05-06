from pyowm.owm import OWM
import datetime

owm = OWM('6219341e8d17f566b9fd75cc37ea687b')
mgr = owm.weather_manager()
observation = mgr.weather_at_place('Tel-Aviv, IL') 

# get weather information
weather = observation.weather

# Get the wind info
wind_dict_in_meters_per_sec = observation.weather.wind()\

# get sunrise and sunset times
# must add 3 hours time for timezone (the function is using utc time)
sunrise = weather.sunrise_time(timeformat="date")
sunset = weather.sunset_time(timeformat="date")
timezone_convert = datetime.timedelta(hours=3)
sunrise += timezone_convert
sunset += timezone_convert

weather_string = f"The weather in Tel Aviv is {weather.detailed_status}, The wind speed is {wind_dict_in_meters_per_sec['speed']} Meters per seconds. Sunrise is {sunrise.time()} and sunset is {sunset.time()}"

print(weather_string)