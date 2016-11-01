var bio = {
    
    "name": "Danny Arvizu",
    "role": "Full Stack Web Developer",
    "contacts": {
        "mobile": "+1 (708) 645-6304",
        "email": "danny.arvizu1@gmail.com",
        "github": "Darvizu061",
        "location": "Chicago,IL"
    },
    "welcomeMessage": "Hey my name is Danny, and I'm a full stack web developer",
    "skills": [
        "JavaScript",
        "Ruby",
        "Ruby on Rails", 
        "JQuery", 
        "HTML5", 
        "CSS3", 
        "BootStrap"
        ],
    'bioPic' : '../images/floralShirt.jpg'
};
var education = {
    "schools" : [
        {
            "name": "Cristo Rey Jesuit High School",
            "location": "1852 W 22nd Pl, Chicago, IL 60608",
            "dates": "August 2006 - June 2010",
            "degree": "High School Diploma",
            "schoolURL": "http://www.cristorey.net/",
            "major": "Not Applicable"
        }
    ],

	'onlineCourses' : [
		{
		'title' : 'Udacity Front End Web Developer',
		'school' : 'Udacity',
		'date' : 2015,
		'url' : 'http://www.udacity.com/'
		}
	]

};
var work = {
    "jobs": [
        {
            "employer": "Zara",
            "title": "Cashier",
            "address": "700 North Michigan Avenue. Chicago, Illinois",
            "date": "August 2014 – February 2015 ",
            "descriptions": [
                "•	Assist customers with purchasing store items while ensuring they have had an overall satisfactory shopping experience. ",
                "•	Organize, remerchandise, and accurately price clothing garments throughout the store and stockroom.",
                "•	Accurately close store registers at night by counting currency, filling security deposits, organizing closing paper work, and restocking cashier supplies. ",
                "•	Quickly open the store during morning shifts by depositing initial funds in all registers, remerchandising customer returns, and removing customer hold items that have been left unwanted. "
                ]
            
        },
        {
            "employer": "Papyrus Recycled Paper Greetings",
            "title": "Internship",
            "address": "111 North Canal Suite 700 Chicago, Illinois",
            "date": "August 2013 – June 2014",
            "descriptions": [
                "•	Merchandize Papyrus and RPG showrooms according to seasonal and new everyday inventory. ",
                "•	Prepare card fixtures and displays for future New York, Atlanta, Las Vegas and Chicago tradeshows. ",
                "•	Organize all inventory of seasonal and everyday merchandise to simplify item lookups and keep invoice records properly stored. "
                ]
            
        },
        {
            "employer": "Sterling Partners",
            "title": "Internship",
            "address": "401 North Michigan Avenue Chicago, Illinois",
            "date": "January 2013 – June 2013",
            "descriptions": [
                "•	Assist project mangers by retrieving, collecting, and organizing data from online databases regarding economic progress of various educational companies.",
                "•	Greet company guests and answer phone calls all in a warm and welcoming manner and also provide orientation towards specific project leaders."
                ]
            
        },
        {
            "employer": "Newfuturo.com",
            "title": "Internship",
            "address": "325 West Huron Street Suite 200 Chicago, Illinois",
            "date": "August 2011 – January 2013",
            "descriptions": [
                "•	Collect and record statistics of social media engagement through Twitter, Facebook, and LinkedIn channels.",
                "•	Schedule future tweets; respond to current social activity and strategist to produce formulas to increase social media presence."
                ]
            
        }
    ]
};
var projects = {
    "projects": [
        {
          "title": "Mock-Up Replica",
          "dates": "October 2015",
          "descriptions": "Given a simple jpg image, I was instructed to create a functional static website that resembled the exact layout of the image but replaced images and strings for individual preference. To add more sophisticated detail, I incorporated bootstrap 3 for responsive layouts.",
          "images": "../images/arvizu.png"
        }
    ]
};
    //Displays Bio
bio.displayBio = function() {

	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

	var formattedMob = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').prepend(formattedMob);
	$('#footerContacts').prepend(formattedMob);

	var formattedLoc = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').prepend(formattedLoc);
	$('#footerContacts').prepend(formattedLoc);

	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').prepend(formattedGithub);
	$('#footerContacts').prepend(formattedGithub);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').prepend(formattedEmail);
	$('#footerContacts').prepend(formattedEmail);

	var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
	$('#header').append(formattedPic);
	
	$('#header').append(HTMLskillsStart);
	for(i in bio.skills) {
		$('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
	}
};
bio.displayBio();


    //Displays Work Resume
work.displayWork = function (){
    for (job in work.jobs) {
        
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].address);
        //Seeing how I had an array in my descriptions object, I nested a for in loop inside my for in loop to get the bullet points in my resume in good format. 
        var points = "";
        for (bulPoint in work.jobs[job].descriptions){
            points += work.jobs[job].descriptions[bulPoint] + "<br>";
        }
        
        var formattedDescription = HTMLworkDescription.replace("%data%", points);
        
        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    }
}
work.displayWork();
    
    //Function that displays projects
projects.display = function (){
    
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descriptions);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        
        // for (image in projects.projects[project].images){
        //     img += projects.projects[project].images[image];
        // }
        
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
};
projects.display();

    //Displays education
education.displayEducation = function() {
	var ed;
	for(ed in education.schools) {
			$('#education').append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[ed].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[ed].degree);
			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[ed].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[ed].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[ed].major);


			$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);

	}
	
	var online;
		for(online in education.onlineCourses) {
			$('#education').append(HTMLonlineClasses);
            $('#education').append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[online].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[online].school);
			var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[online].date);
			var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[online].url);

			$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
		}
}
education.displayEducation();

    //Prints X and Y coordinates of mouse when user clicks.
$(document).click(function(loc) {
  
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
  
});

    //Function that makes (Danny Arvizu ) => (Danny ARVIZU)
function inName(name){
    var nameArray = name.trim().toUpperCase().split(" ");
    nameArray[0] = nameArray[0].charAt(0) + nameArray[0].slice(1).toLowerCase();
    
    return nameArray.join(" ");
}



$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);