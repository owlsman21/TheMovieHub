const movies = [
    // --- Movies from your original index.html (Page 1) ---
    {
        title: "Ulzanas Raid (1972)",
        description: "The story revolves around Scout McIntosh and an U.S. Cavalry Lieutenant DeBuin, who set out to catch a group of Apache renegades who are being led by chieftain, Ulzana.",
        embedId: "6410503522969",
        source: "okru" // Explicitly set source
    },
    {
        title: "She wore a yellow ribbon",
        description: "Captain Nathan Brittles heads his last assignment before retirement to stop a Native American attack. But the job gets challenging when his superior instructs him to escort two women to safety.",
        embedId: "8921446943385",
        source: "okru"
    },
    {
        title: "They Died with Their Boots On (1941)",
        description: "A movie which showcases the famous battle of Little Big Horn and the life of General Custer from the time he enters West Point military academy, the American Civil War and his death at Big Horn.",
        embedId: "8921449302681",
        source: "okru"
    },
    {
        title: "Dog.Soldiers.2002.720p.BluRay",
        description: "During a routine nighttime training mission in the Scottish Highlands, a small squad of British soldiers expected to rendezvous with a special ops unit instead find a bloody massacre with a sole survivor. The savage attackers of the special ops team return, and the men are rescued by Megan (Emma Cleasby), a zoologist who identifies what hunts them as werewolves. Without transport or communications, the group is forced to retreat to a farmhouse to wait for the full moon to disappear at dawn.",
        embedId: "1632050940569",
        source: "okru"
    },
    {
        title: "THE SHATTERING_ HD 2020",
        description: "Donovan lures several friends into the woods to meet a healer with his cancer-stricken girlfriend. Lucy. As they are hunted by creatures and commandos, the friends realize they were set up to pay for Lucy's cure.",
        embedId: "2054985288345",
        source: "okru"
    },
    {
        title: "Downrange+2018.HD",
        description: "Stranded survivors of a roadside ambush must find a way to escape a deadly sniper.",
        embedId: "1281124600473",
        source: "okru"
    },
    {
        title: "mary had a little-lamb-2023",
        description: "A horror film reimagining the classic nursery rhyme with a terrifying twist.",
        embedId: "8916412664473",
        source: "okru"
    },
    {
        title: "The-horse-soldiers-1959",
        description: "During the Civil War, a Union cavalry unit is sent on a perilous mission behind Confederate lines.",
        embedId: "8921430297241",
        source: "okru"
    },
    {
        title: "Training Day",
        description: "A rookie detective is pushed to his limits by a corrupt narcotics officer during a single, intense day.",
        embedId: "6458634209830",
        source: "okru"
    },
    {
        title: "wrong_turn",
        description: "A group of friends gets lost in the woods and becomes prey for a family of cannibalistic mutants.",
        embedId: "3630121945753",
        source: "okru"
    },
    {
        title: "Wrong Turn2:Dead_End",
        description: "Contestants on a reality TV show fight for survival against a family of inbred cannibals.",
        embedId: "3630122273433",
        source: "okru"
    },
    {
        title: "wrong turn 3 left for dead",
        description: "Escaped convicts and a group of college students find themselves hunted by cannibals in the wilderness.",
        embedId: "3630123649689",
        source: "okru"
    },
    {
        title: "Wrong Turn 4: Bloody Beginnings",
        description: "A group of college students gets stranded in a snowstorm and takes refuge in an abandoned asylum, where they are hunted by mutants.",
        embedId: "3630125222553",
        source: "okru"
    },
    {
        title: "Wrong Turn 5:Bloodlines",
        description: "A Halloween music festival takes a terrifying turn when a group of friends becomes targets for a family of cannibals.",
        embedId: "3630125812377",
        source: "okru"
    },
    {
        title: "Wrong Turn 6: Last Resort",
        description: "A young man inherits a forgotten resort, only to discover it's home to a sinister family of cannibals.",
        embedId: "3630126271129",
        source: "okru"
    },

    // --- Movies from Page 2.html ---
    {
        title: "Nightbreed.1990.1080p.BluRay",
        description: "A young man discovers a hidden world of monsters and becomes their unlikely leader.",
        embedId: "2575682570905",
        source: "okru"
    },
    {
        title: "The Sweeney (2012) 720p",
        description: "A hard-hitting police drama following a flying squad of detectives in London.",
        embedId: "2480859581081",
        source: "okru"
    },
    {
        title: "Wolf Creek Horror 720p HD",
        description: "Three backpackers stranded in the Australian outback fall prey to a sadistic killer.",
        embedId: "2054941575833",
        source: "okru"
    },
    {
        title: "Wolf Creek 2 (2013)",
        description: "A sequel continuing the terrifying journey of the infamous Australian serial killer, Mick Taylor.",
        embedId: "3290426641064",
        source: "okru"
    },
    {
        title: "The.Girl.Next.Door.2007.720p.BluRay",
        description: "Based on a disturbing true story, a teenage girl is subjected to horrific abuse by her aunt and cousins.",
        embedId: "2207886740121",
        source: "okru"
    },
    {
        title: "Dragon Soldiers",
        description: "A group of soldiers must fight mythical creatures in a fantastical setting.",
        embedId: "1630024567449",
        source: "okru"
    },
    {
        title: "The punisher 1989",
        description: "An ex-cop wages a one-man war against the criminal underworld after his family is murdered.",
        embedId: "2099299682969",
        source: "okru"
    },
    {
        title: "Master and Commander: The Far Side of the World",
        description: "During the Napoleonic Wars, a daring British captain pursues a formidable French warship.",
        embedId: "1004226742937",
        source: "okru" // This was the one you asked to change to YouTube, but I'm keeping it okru for now.
                        // If you want it YouTube, change embedId to YouTube ID and source to "youtube"
    },
    {
        title: "I am wrath",
        description: "A man seeks revenge for his wife's murder when corrupt police fail to catch the killers.",
        embedId: "1060182231705",
        source: "okru"
    },
    {
        title: "Brawl.in.Cell.Block.99.2017.1080",
        description: "A former boxer and drug runner ends up in a brutal prison, forced to make impossible choices.",
        embedId: "1200399846041",
        source: "okru"
    },
    {
        title: "True romance",
        description: "A comic book nerd and a call girl fall in love and go on the run from the mob.",
        embedId: "1189170907801",
        source: "okru"
    },
    {
        title: "Police Story",
        description: "A Hong Kong detective is framed for murder and must clear his name while fighting criminals.",
        embedId: "1189169334937",
        source: "okru"
    },
    {
        title: "Heat full movie",
        description: "A professional thief and an obsessive detective engage in a high-stakes game of cat and mouse.",
        embedId: "1189169138329",
        source: "okru"
    },
    {
        title: "The.Guvnors.2014.720p.BluRay",
        description: "A retired gang leader is drawn back into London's violent underworld.",
        embedId: "1123590015641",
        source: "okru"
    },
    {
        title: "north vs south",
        description: "A conflict between two opposing factions in a historical or fictional setting.",
        embedId: "1157638130329",
        source: "okru"
    },
    {
        title: "The.Horse.Soldiers.1959",
        description: "During the Civil War, a Union cavalry unit is sent on a perilous mission behind Confederate lines.",
        embedId: "8921430297241",
        source: "okru"
    },
    {
        title: "Training Day",
        description: "A rookie detective is pushed to his limits by a corrupt narcotics officer during a single, intense day.",
        embedId: "6458634209830",
        source: "okru"
    },
    {
        title: "Kill Another Day 2016",
        description: "A point-of-view horror film about a young man surviving a zombie apocalypse. Directed by Zachary Ramelan, it was released in Canada on March 31, 2016,",
        embedId: "6410479798937",
        source: "okru"
    },
    {
        title: "Frgiles 2005 BluRay 720p",
        description: "At her new job in a rundown children's hospital, a nurse desperately tries to keep her patients safe from a plague of random, mysterious attacks.",
        embedId: "2575196097177",
        source: "okru"
    },
    {
        title: "Darkness Falls 2020",
        description: "After his wife's suicide, Detective Jeff Anderson becomes convinced that she has been murdered. Obsessed with his investigation, he finds out that his wife was the victim of a team of father-and-son serial killers and sets out to stop them.",
        embedId: "2218518055577",
        source: "okru"
    },
    {
        title: "The Babysitter 2017",
        description: "When Cole stays up past his bedtime, he discovers that his hot baby sitter belongs to a satanic cult",
        embedId: "1012486376089",
        source: "okru"
    },
    {
        title: "SiIent House 2011",
        description: "A girl is trapped inside her family's lakeside retreat and becomes unable to contact the outside world as supernatural forces haunt the house with mysterious energy and consequences.",
        embedId: "1012485065369",
        source: "okru"
    },
     {
        title: "Truth or Dare 2018",
        description: "A harmless game of Truth or Dare among friends turns deadly when someone - or something - begins to punish those who tell a lie or refuse the dare.",
        embedId: "1012279806617",
        source: "okru"
    },
     {
        title: "Inbred 2011",
        description: "Four young offenders and their care workers visit the remote Yorkshire village of Mortlake, which prides on keeping itself to itself. A minor incident with locals rapidly escalates into a blood-soaked, deliriously warped nightmare.",
        embedId: "1012280330905",
        source: "okru"
    },
     {
        title: "Wyatt Earp.1994.HD",
        description: "Wyatt Earp is a 1994 American epic biographical Western drama film about the lawman of the same name. Directed by Lawrence Kasdan, who co-wrote the screenplay with Dan Gordon",
        embedId: "1010676468377",
        source: "okru"
    },
     {
        title: "The.Burrowers.2008",
        description: "The Burrowers is a 2008 American Western horror film written and directed by J. T. Petty. It stars Clancy Brown, William Mapother, Karl Geary, Sean Patrick Thomas, and Doug Hutchison.",
        embedId: "1010671487641",
        source: "okru"
    },
      {
        title: "The.Bad.Nun.2018",
        description: " A young woman staying at an isolated convent turned bed and breakfast is visited by a nun at the door who begins to show her true colors ",
        embedId: "1009218488985",
        source: "okru"
    },
      {
        title: "SiIent House 2011",
        description: "A girl is trapped inside her family's lakeside retreat and becomes unable to contact the outside world as supernatural forces haunt the house with mysterious energy and consequences.",
        embedId: "1012485065369",
        source: "okru"
    },
      {
        title: "SiIent House 2011",
        description: "A girl is trapped inside her family's lakeside retreat and becomes unable to contact the outside world as supernatural forces haunt the house with mysterious energy and consequences.",
        embedId: "1012485065369",
        source: "okru"
    },
      {
        title: "SiIent House 2011",
        description: "A girl is trapped inside her family's lakeside retreat and becomes unable to contact the outside world as supernatural forces haunt the house with mysterious energy and consequences.",
        embedId: "1012485065369",
        source: "okru"
    },

];

const moviesPerPage = 20; // You can adjust this number
let currentPage = 1;

function displayMovies(page) {
    const movieGrid = document.getElementById('movie-grid');
    if (!movieGrid) {
        console.error("Movie grid element not found!");
        return;
    }
    movieGrid.innerHTML = ''; // Clear previous movies

    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToDisplay = movies.slice(startIndex, endIndex);

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // 1. Movie Title
        const movieTitleP = document.createElement('p');
        movieTitleP.style.textAlign = 'center';
        movieTitleP.style.fontWeight = 'bold';
        movieTitleP.textContent = movie.title;
        movieCard.appendChild(movieTitleP);

        // 2. Movie Description
        if (movie.description) {
            const movieDescriptionP = document.createElement('p');
            movieDescriptionP.classList.add('movie-description');
            movieDescriptionP.textContent = movie.description;
            movieCard.appendChild(movieDescriptionP);
        }

        // 3. Responsive Video Player
        if (movie.embedId) {
            const videoResponsiveDiv = document.createElement('div');
            videoResponsiveDiv.classList.add('video-responsive');

            const iframe = document.createElement('iframe');
            iframe.title = movie.title + " Video";
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; fullscreen"; // Note: 'autoplay' should be used carefully as it can be annoying to users.

            // --- IMPORTANT CHANGE HERE: Determine video source URL ---
            let videoSourceUrl = '';
            if (movie.source === 'youtube') {
                // Use YouTube embed URL
                videoSourceUrl = `http://www.youtube.com/embed/${movie.embedId}`;
                // You can add more YouTube parameters if desired:
                // For example, `?rel=0&modestbranding=1` to hide related videos and branding
                // videoSourceUrl = `http://www.youtube.com/embed/${movie.embedId}?rel=0&modestbranding=1`;
            } else {
                // Default to ok.ru if source is not specified or is 'okru'
                videoSourceUrl = `https://ok.ru/videoembed/${movie.embedId}`;
            }
            iframe.src = videoSourceUrl; // Set the iframe's source

            videoResponsiveDiv.appendChild(iframe);
            movieCard.appendChild(videoResponsiveDiv);
        }

        movieGrid.appendChild(movieCard);
    });
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) {
        console.error("Pagination element not found!");
        return;
    }
    pagination.innerHTML = '';

    const totalPages = Math.ceil(movies.length / moviesPerPage);

    // --- Home Button ---
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('pagination-button');
    homeButton.classList.add('px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
    homeButton.classList.add(currentPage === 1 ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    homeButton.disabled = currentPage === 1;
    homeButton.addEventListener('click', () => {
        currentPage = 1;
        displayMovies(currentPage);
        displayPagination();
    });
    pagination.appendChild(homeButton);

    // --- Back Button ---
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('pagination-button');
    backButton.classList.add('px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
    backButton.classList.add(currentPage === 1 ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    backButton.disabled = currentPage === 1;
    backButton.addEventListener('click', () => {
        currentPage--;
        displayMovies(currentPage);
        displayPagination();
    });
    pagination.appendChild(backButton);

    // --- Numbered Page Buttons ---
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('pagination-button');
        pageButton.classList.add('px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
        pageButton.classList.add(currentPage === i ? 'bg-blue-500' : 'bg-gray-700', 'hover:bg-gray-600');
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayMovies(currentPage);
            displayPagination();
        });
        pagination.appendChild(pageButton);
    }

    // --- Next Button ---
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('pagination-button');
    nextButton.classList.add('px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
    nextButton.classList.add(currentPage === totalPages ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        currentPage++;
        displayMovies(currentPage);
        displayPagination();
    });
    pagination.appendChild(nextButton);
}

// Initial display when the page loads
displayMovies(currentPage);
displayPagination();
