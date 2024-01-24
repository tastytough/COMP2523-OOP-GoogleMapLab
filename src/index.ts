// Import Student and Internship
import { Student, Internship } from "./Student";

let map: google.maps.Map;
async function initMap(): Promise<void> {
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const student = new Student();
  const internship = new Internship();


  // The map, centered at Uluru
  map = new Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 10,
      center: { lat: 49.28324, lng: -123.11498 },
      mapId: 'DEMO_MAP_ID',
    }
  );
  // Declare icon library:
    const iconBase = 'http://maps.google.com/mapfiles/kml/pal3/';
    const icons = {
      student: {
        icon: iconBase + `icon48.png`
      },
      internship: {
        icon: iconBase + `icon21.png`
      }
    }

  // The marker for student
  const studentMarker = new google.maps.Marker({
    map: map,
    position: {
      lat: student.getStudentLat(),
      lng: student.getStudentLng()
    },
    icon: icons.student.icon,
    title: student.getFullName(),
  });

  // The infoWindow for student
  const contentStudent = student.getFullName();

  const studentInfoWindow = new google.maps.InfoWindow({
    content: contentStudent,
    ariaLabel: "Student Info"
  })

  studentMarker.addListener("click", () => {
    studentInfoWindow.open({
      anchor: studentMarker,
      map,
    });
  });

  // The marker for internship
  const internshipMarker = new google.maps.Marker({
    map: map,
    position: {
      lat: internship.getLocationBusinessLat(),
      lng: internship.getLocationBusinessLng(),
    },
    icon: icons.internship.icon,
    title: internship.getCompanyName(),
  })

  // The infoWindow for internship
  const contentInternship = `Welcome to ${internship.getCompanyName()}'s Internship!`;

  const internshipInfoWindow = new google.maps.InfoWindow({
    content: contentInternship,
    ariaLabel: "Internship Info"
  })

  internshipMarker.addListener("click", () => {
    internshipInfoWindow.open({
      anchor: internshipMarker,
      map,
    });
  });
}
initMap();