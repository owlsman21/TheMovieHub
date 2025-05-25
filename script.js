const movies = [
    // --- Movies from your original index.html (Page 1) ---
    {
        title: "Ulzanas Raid (1972)",
        description: "The story revolves around Scout McIntosh and an U.S. Cavalry Lieutenant DeBuin, who set out to catch a group of Apache renegades who are being led by chieftain, Ulzana.",
        embedId: "6410503522969"
    },
    {
        title: "She wore a yellow ribbon",
        description: "Captain Nathan Brittles heads his last assignment before retirement to stop a Native American attack. But the job gets challenging when his superior instructs him to escort two women to safety.",
        embedId: "8921446943385"
    },
    {
        title: "They Died with Their Boots On (1941)",
        description: "A movie which showcases the famous battle of Little Big Horn and the life of General Custer from the time he enters West Point military academy, the American Civil War and his death at Big Horn.",
        embedId: "8921449302681"
    },
    {
        title: "Dog.Soldiers.2002.720p.BluRay",
        description: "During a routine nighttime training mission in the Scottish Highlands, a small squad of British soldiers expected to rendezvous with a special ops unit instead find a bloody massacre with a sole survivor. The savage attackers of the special ops team return, and the men are rescued by Megan (Emma Cleasby), a zoologist who identifies what hunts them as werewolves. Without transport or communications, the group is forced to retreat to a farmhouse to wait for the full moon to disappear at dawn.",
        embedId: "1632050940569"
    },
    {
        title: "THE SHATTERING_ HD 2020",
        description: "Donovan lures several friends into the woods to meet a healer with his cancer-stricken girlfriend. Lucy. As they are hunted by creatures and commandos, the friends realize they were set up to pay for Lucy's cure.", // Added a placeholder description
        embedId: "2054985288345"
    },
    {
        title: "Downrange+2018.HD",
        description: "Stranded survivors of a roadside ambush must find a way to escape a deadly sniper.", // Added a placeholder description
        embedId: "1281124600473"
    },
    {
        title: "mary had a little-lamb-2023",
        description: "A horror film reimagining the classic nursery rhyme with a terrifying twist.", // Added a placeholder description
        embedId: "8916412664473"
    },
    {
        title: "The-horse-soldiers-1959",
        description: "During the Civil War, a Union cavalry unit is sent on a perilous mission behind Confederate lines.", // Added a placeholder description
        embedId: "8921430297241"
    },
    {
        title: "Training Day",
        description: "A rookie detective is pushed to his limits by a corrupt narcotics officer during a single, intense day.", // Added a placeholder description
        embedId: "6458634209830"
    },
    {
        title: "wrong_turn",
        description: "A group of friends gets lost in the woods and becomes prey for a family of cannibalistic mutants.", // Added a placeholder description
        embedId: "3630121945753"
    },
    {
        title: "Wrong Turn2:Dead_End",
        description: "Contestants on a reality TV show fight for survival against a family of inbred cannibals.", // Added a placeholder description
        embedId: "3630122273433"
    },
    {
        title: "wrong turn 3 left for dead",
        description: "Escaped convicts and a group of college students find themselves hunted by cannibals in the wilderness.", // Added a placeholder description
        embedId: "3630123649689"
    },
    {
        title: "Wrong Turn 4: Bloody Beginnings",
        description: "A group of college students gets stranded in a snowstorm and takes refuge in an abandoned asylum, where they are hunted by mutants.", // Added a placeholder description
        embedId: "3630125222553"
    },
    {
        title: "Wrong Turn 5:Bloodlines",
        description: "A Halloween music festival takes a terrifying turn when a group of friends becomes targets for a family of cannibals.", // Added a placeholder description
        embedId: "3630125812377"
    },
    {
        title: "Wrong Turn 6: Last Resort",
        description: "A young man inherits a forgotten resort, only to discover it's home to a sinister family of cannibals.", // Added a placeholder description
        embedId: "3630126271129"
    },

    // --- Movies from Page 2.html ---
    {
        title: "Nightbreed.1990.1080p.BluRay",
        description: "A young man discovers a hidden world of monsters and becomes their unlikely leader.", // Added a placeholder description
        embedId: "2575682570905"
    },
    {
        title: "The Sweeney (2012) 720p",
        description: "A hard-hitting police drama following a flying squad of detectives in London.", // Added a placeholder description
        embedId: "2480859581081"
    },
    {
        title: "Wolf Creek Horror 720p HD",
        description: "Three backpackers stranded in the Australian outback fall prey to a sadistic killer.", // Added a placeholder description
        embedId: "2054941575833"
    },
    {
        title: "Wolf Creek 2 (2013)",
        description: "A sequel continuing the terrifying journey of the infamous Australian serial killer, Mick Taylor.", // Added a placeholder description
        embedId: "3290426641064"
    },
    {
        title: "The.Girl.Next.Door.2007.720p.BluRay",
        description: "Based on a disturbing true story, a teenage girl is subjected to horrific abuse by her aunt and cousins.", // Added a placeholder description
        embedId: "2207886740121"
    },
    {
        title: "Dragon Soldiers",
        description: "A group of soldiers must fight mythical creatures in a fantastical setting.", // Added a placeholder description
        embedId: "1630024567449"
    },
    {
        title: "The punisher 1989",
        description: "An ex-cop wages a one-man war against the criminal underworld after his family is murdered.", // Added a placeholder description
        embedId: "2099299682969"
    },
    {
        title: "Master and Commander: The Far Side of the World",
        description: "During the Napoleonic Wars, a daring British captain pursues a formidable French warship.", // Added a placeholder description
        embedId: "1004226742937"
    },
    {
        title: "I am wrath",
        description: "A man seeks revenge for his wife's murder when corrupt police fail to catch the killers.", // Added a placeholder description
        embedId: "1060182231705"
    },
    {
        title: "Brawl.in.Cell.Block.99.2017.1080",
        description: "A former boxer and drug runner ends up in a brutal prison, forced to make impossible choices.", // Added a placeholder description
        embedId: "1200399846041"
    },
    {
        title: "True romance",
        description: "A comic book nerd and a call girl fall in love and go on the run from the mob.", // Added a placeholder description
        embedId: "1189170907801"
    },
    {
        title: "Police Story",
        description: "A Hong Kong detective is framed for murder and must clear his name while fighting criminals.", // Added a placeholder description
        embedId: "1189169334937"
    },
    {
        title: "Heat full movie",
        description: "A professional thief and an obsessive detective engage in a high-stakes game of cat and mouse.", // Added a placeholder description
        embedId: "1189169138329"
    },
    {
        title: "The.Guvnors.2014.720p.BluRay",
        description: "A retired gang leader is drawn back into London's violent underworld.", // Added a placeholder description
        embedId: "1123590015641"
    },
    {
        title: "north vs south",
        description: "A conflict between two opposing factions in a historical or fictional setting.", // Added a placeholder description
        embedId: "1157638130329"
    }
];

const moviesPerPage = 20; // You can adjust this number
let currentPage = 1;

function displayMovies(page) {
    const movieGrid = document.getElementById('movie-grid'); // Changed to getElementById
    if (!movieGrid) { // Added a check in case element isn't found
        console.error("Movie grid element not found!");
        return;
    }
    movieGrid.innerHTML = ''; // Clear previous movies

    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToDisplay = movies.slice(startIndex, endIndex);

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card'); // Use movie-card class for consistency with CSS

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
            iframe.title = movie.title + " Video"; // Add title for accessibility
            iframe.src = `https://ok.ru/videoembed/${movie.embedId}`; // Use embedId
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; fullscreen";
            // No width/height attributes here, CSS handles it

            videoResponsiveDiv.appendChild(iframe);
            movieCard.appendChild(videoResponsiveDiv);
        }
        
        movieGrid.appendChild(movieCard);
    });
}

function displayPagination() {
    const pagination = document.getElementById('pagination'); // Changed to getElementById
    if (!pagination) { // Added a check
        console.error("Pagination element not found!");
        return;
    }
    pagination.innerHTML = '';

    const totalPages = Math.ceil(movies.length / moviesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        // Use a class for consistency and better styling
        pageButton.classList.add('pagination-button'); 
        
        // Add styling classes (similar to what was in your HTML with Tailwind, if you keep using it)
        // Note: For custom CSS, these Tailwind classes (px-4, py-2, etc.) might not be strictly necessary
        // if your style.css defines .pagination-button clearly.
        pageButton.classList.add('px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
        pageButton.classList.add(currentPage === i ? 'bg-blue-500' : 'bg-gray-700', 'hover:bg-gray-600'); // Tailwind classes

        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayMovies(currentPage);
            displayPagination(); // Re-render pagination to update active button
        });
        pagination.appendChild(pageButton);
    }
}

// Initial display when the page loads
displayMovies(currentPage);
displayPagination();
