
import datetime

class Airline:
    def __init__(self, id, name, planes):
        self.id = id 
        self.name = name
        self.planes = planes 

    def __str__(self):
        return f"{self.name}"


class Airplane:
    airplanes = []
    def __init__(self, id, current_location, company):
        self.id = id 
        self.current_location = current_location 
        self.company = company 
        self.next_flights = [] 
        # add this plane to the airport it's at
        self.current_location.planes.append(self)
        # add the plane to the list of all airplanes 
        Airplane.airplanes.append(self)

    def __str__(self):
        return f"{self.company} {self.id}"


    @classmethod
    def get_an_airplane(cls, date):
        """
        Returns an airplane that doesn't have a flight scheduled for the given date or the next day.
        """
        day = datetime.timedelta(days=1)
        for plane in cls.airplanes:
            if len(plane.next_flights) == 0:
                return plane
            for flight in plane.next_flights:
                if not flight.date == date and not flight.date + day == date:
                    return plane
                    



    def fly(self, destination):
        if self.next_flights[0].destination == destination:
            self.next_flights[0].take_off()
            self.next_flights[0].land()
            self.next_flights.pop(0)

    def location_on_date(self, date):
        # find out the location of the plane on that day, by seeing where the flight before was
        if len(self.next_flights) == 0: # If no flights return current airport.
            return self.current_location
        index = 0
        while self.next_flights[index].date <= date:
            index += 1 
        return self.next_flights[index - 1].destination

    def available_on_date(self, date, location):
        location_that_day = self.location_on_date(date)
        if location_that_day != location:
            return False
        
        # Go through flights to make sure that doesn't have flight planned for that day, or the next day so the plane can get back to where it needs to be if has an upcoming flight.
        added_day = datetime.timedelta(days=1)
        for flight in self.next_flights:
            if flight.date == date or flight.date == date + added_day:
                return False 
        return True 

            


class Flight:
    def __init__(self, date, destination, origin, plane, id):
        self.date = date
        self.destination = destination 
        self.origin = origin 
        self.plane = plane 
        self.id = id 

    def __str__(self):
        return f"flight {self.plane} from {self.origin} to {self.destination} on {self.date}"

    def take_off(self):
        #TODO update airports also
        if self.plane in self.origin.planes:
            self.origin.planes.remove(self.plane)
        print(f"Plane has departed {self.origin}")

    def land(self):
        self.destination.planes.append(self.plane)
        print(f"The plane has landed in {self.destination}")


class Airport:
    def __init__(self, city):
        self.city = city 
        self.planes = []
        self.scheduled_departures = []
        self.scheduled_arrivals = []

    def __str__(self):
        return f"The {self.city} airport"

    @classmethod
    def schedule_flight(cls, origin, destination, date):
        # find an available plane 
        available = None
        for plane in Airplane.airplanes:
            if plane.available_on_date(date=date, location=origin):
                available = plane 
                break 

        if not available:
            available = Airplane.get_an_airplane(date)
        

        # create a flight 
        flight = Flight(date, destination, origin, available, f"{destination}{available.company.id}{date}")

        # update plane 
        if len(available.next_flights) == 0:
            available.next_flights.append(flight)
        else:
            for num, next_flight in enumerate(available.next_flights):
                if next_flight.date > date:
                    available.next_flights.insert(num, flight)
                    break

        # update airport 
        if len(origin.scheduled_departures) == 0:
            origin.scheduled_departures.append(flight)
        else:
            for num, scheduled_flight in enumerate(origin.scheduled_departures):
                if scheduled_flight.date > date:
                    origin.scheduled_departures.insert(num, flight)
                    break

        
        for num, flight in enumerate(destination.scheduled_arrivals):
            if flight.date > date:
                destination.scheduled_arrivals.insert(num, flight)
                break
        if len(destination.scheduled_arrivals) == 0:
            destination.scheduled_arrivals.append(flight)


    def info(self, start_date, end_date):
        for flight in self.scheduled_departures + self.scheduled_arrivals:
            if flight.date > start_date and flight.date < end_date:
                print(flight)


airline1 = Airline("123", "Arkia", None)
airline2 = Airline("124", "El Al", None)
airline3 = Airline("175", "British Airways", None)

airport1 = Airport("Tel Aviv")
airport2 = Airport("Newark")
airport3 = Airport("Paris")
airport4 = Airport("London")


airplane1 = Airplane("777", airport1, airline1)
airplane2 = Airplane("127", airport2, airline2)
airplane3 = Airplane("999", airport3, airline3)


Airport.schedule_flight(airport4, airport2, datetime.date(2025, 6, 17))
airport1.info(datetime.date(2024, 3, 3), datetime.date(2026, 5, 5))
airplane1.fly(airport2)
