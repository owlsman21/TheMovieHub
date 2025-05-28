const movies = [
    // --- Existing Movies (Ok.ru and YouTube) ---
    {
        title: "Ulzanas Raid (1972)",
        description: "The story revolves around Scout McIntosh and an U.S. Cavalry Lieutenant DeBuin, who set out to catch a group of Apache renegades who are being led by chieftain, Ulzana.",
        embedId: "6410503522969",
        source: "okru"
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
        embedId: "2575196097177",
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
        source: "okru"
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
        title: "Frgiles 2005 BluRay 720p",
        description: "At her new job in a rundown children's hospital, a nurse desperately tries to keep her patients safe from a plague of random, mysterious attacks.",
        embedId: "2575196097177",
        source: "okru"
    },
    {
        title: "Prisoner of war",
        description: "early Tom Hardy Movie.",
        embedId: "6YHTnOquIBY",
        source: "youtube"
    },
    {
        title: "Please Sir",
        description: "Fun with the Fenn st gang",
        embedId: "v6rgy5d/?pub=792qb",
        source: "rumble"
    },
    {
        title: "Cass",
        description: " Cass is a 2008 British crime drama film. It stars Nonso Anozie as Cass Pennant and is directed by Jon S. Baird. Cass is based on the true story of the life of Cass Pennant, adapted from his book.",
        embedId: "_uurzT-1Sck",
        source: "youtube"
    },
    {
        title: "Rise of the Footsoldier 2021",
        description: " Rise of the Footsoldier is a British gangster film franchise written and directed by Julian Gilbey, Will Gilbey, Ricci Harnett, Zackary Adler, Andrew Loveday and Nick Nevern, ",
        embedId: "qLFepx1SF80",
        source: "youtube"
    },
    {
        title: "The Hot Potato Movie 2011",
        description: " he Hot Potato is a 2012 British comedy crime thriller film. It was directed and written by Tim Lewiston and stars Ray Winstone, Colm Meaney and Jack Huston in the lead roles.",
        embedId: "O85tflN5Krg",
        source: "youtube"
    },
    {
        title: "Open Graves 2009",
        description: " A group of surfers discover an old board game which claims a life every time it is played.",
        embedId: "9519433386534",
        source: "okru"
    },
    {
        title: "Ouija: A New Beginning (2025) ",
        description: "Molly Price is a woman on the run, but when her oldest daughter finds a Ouija board and attempts to communicate with her deceased father, she invites the spirit of an ancient witch into her soul and puts the entire family at risk.",
        embedId: "9517571574310",
        source: "okru"
    },
    {
        title: "Abduct (2025) ",
        description: " A woman's peaceful mountain getaway takes a bizarre turn when her boyfriend disappears, and a random naked man shows up claiming to be him.",
        embedId: "9517374966310",
        source: "okru"
    },
    {
        title: "I Was Honey Boo Boo (2025) ",
        description: " Alana Thompson, famously known as honey boo boo reveals her story of rising to fame and the secrets behind the cameras.",
        embedId: "9517224757798",
        source: "okru"
    },
    {
        title: "The Surrender 2015 ",
        description: " When the family patriarch dies, a grieving mother and daughter risk their lives to perform a brutal resurrection ritual and bring him back from the dead.",
        embedId: "9516826429990",
        source: "okru"
    },
    {
        title: "Final Destination: Bloodlines 2025 ",
        description: " Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them.",
        embedId: "9514534111782",
        source: "okru"
    },
    {
        title: "Antisocial 2 2015 ",
        description: "Years after having her newborn child stolen from her, Sam searches a world infested with infected users from the Social Redroom website. After befriending a young girl named Bean, Sam is captured and locked in a facility dedicated to finding a cure for the Redroom Virus",
        embedId: "9506057947686",
        source: "okru"
    },
    {
        title: "Antisocial 2013 ",
        description: " Five university friends gather at a house party to ring in the New Year. Unbeknownst to them, an epidemic has erupted outside, causing outbreaks around the world.",
        embedId: "9500551088678",
        source: "okru"
    },
    {
        title: "Crossfire 2022",
        description: "After a shooting, Jo's family vacations turns into turmoil.",
        embedId: "pF_YIqju9gw",
        source: "youtube"
    },
    {
        title: "Blood Predator",
        description: " A handful of people wind up stranded in a desolate snowy mountain area in the wake of an airplane crash. They seek refuge in an old abandoned cabin. The group find themselves being terrorized by a lethal predatory extraterrestrial beast residing in the basement of the cabin.",
        embedId: "wN6OhOR43a4",
        source: "youtube"
    },
    {
        title: "Archangel 2005",
        description: " A British college professor, working in Russia, investigates certain mysteries surrounding the life and death of Joseph Stalin.",
        embedId: "zsZYaPNWcl4",
        source: "youtube"
    },
    {
        title: "Assassin 2015",
        description: " Jamie is a contract killer tasked with eliminating a crooked official, but complications arise when he falls for the daughter of his target.",
        embedId: "jTR6N8Ip6DM",
        source: "youtube"
    },
    {
        title: "Air Force One Is Down",
        description: " Alistair Maclean's highly charged novel is brought to life for a contemporary audience in this tense, international thriller.",
        embedId: "WzrYrcQPJqE",
        source: "youtube"
    },
    {
        title: "The Day of the Triffids 2009",
        description: " With most of the world blinded and the dangerous carnivorous Triffids set loose, it falls upon a band of scattered survivors to fight this plant invasion and the madness following.",
        embedId: "s4yS-X2525g",
        source: "youtube"
    },
    {
        title: "Decoys 2004",
        description: " Luke and Roger are just another couple of college guys trying to lose their virginity. But when Luke sees something unusual, he begins to suspect that the girls on campus aren't exactly human.",
        embedId: "rWS9TaHh0Jo",
        source: "youtube"
    },
    {
        title: "Mercury Plains 2004",
        description: " A troubled man runs away to Mexico and is recruited to join a paramilitary group of teens fighting the drug cartels. He proves himself to the group, but questions their motive.",
        embedId: "qwkiu0sk-9k",
        source: "youtube"
    },
    {
        title: "Wolf Town 2011 ",
        description: " Kyle, a shy college student finds himself and three of his friends trapped in an old western ghost town by a pack of ferocious wolves and has to overcome his personal fears to confront the wolves and lead his friends to safety.",
        embedId: "978941381273",
        source: "okru"
    },
    {
        title: "Shadowland 2008 ",
        description: "A taut reinvention of vampire lore, Shadowland opens in modern day North America, where construction workers uncover an old stone cross and what appears to be a wooden stake. They remove the stake from the ground, allowing Laura (Caitlin McIntosh), a slumbering vampire, to revive and rise from the earth",
        embedId: "979663850137",
        source: "okru"
    },
    {
        title: "The Surrender 2015 ",
        description: " When the family patriarch dies, a grieving mother and daughter risk their lives to perform a brutal resurrection ritual and bring him back from the dead.",
        embedId: "9516826429990",
        source: "okru"
    },
    {
        title: "Aliens.vs.Predator.Requiem.2007 ",
        description: " Residents (Steven Pasquale, Reiko Aylesworth, John Ortiz) of Gunnison, Colorado, are caught up in the crossfire when two deadly extraterrestrial species bring their longstanding conflict to Earth. On the one side, nearly indestructible Aliens; on the other, a lone Predator whose mission is to wipe out all traces of the Alien infestation from Earth, no matter who gets in the way.",
        embedId: "1005714934425",
        source: "okru"
    },
    {
        title: "The Devil's Rock ",
        description: " Set in the Channel Islands on the eve of D Day, two Kiwi commandos, sent to destroy German gun emplacements to distract Hitler's forces away from Normandy, discover a Nazi occult plot to unleash demonic forces to win the war",
        embedId: "979809208985",
        source: "okru"
    },
    {
        title: "The Last of the Mohicans (1992) ",
        description: "The last members of a dying Native American tribe, the Mohicans -- Uncas (Eric Schweig), his father Chingachgook (Russell Means), and his adopted half-white brother Hawkeye (Daniel Day-Lewis) -- live in peace alongside British colonists. But when the daughters (Madeleine Stowe, Jodhi May) of a British colonel are kidnapped by a traitorous scout, Hawkeye and Uncas must rescue them in the crossfire of a gruesome military conflict of which they wanted no part: the French and Indian War.",
        embedId: "967004064409",
        source: "okru"
    },
    {
        title: "The Surrender 2015 ",
        description: " When the family patriarch dies, a grieving mother and daughter risk their lives to perform a brutal resurrection ritual and bring him back from the dead.",
        embedId: "9516826429990",
        source: "okru"
    },
    {
        title: "The Surrender 2015 ",
        description: " When the family patriarch dies, a grieving mother and daughter risk their lives to perform a brutal resurrection ritual and bring him back from the dead.",
        embedId: "9516826429990",
        source: "okru"
    },
];

const moviesPerPage = 20;
let currentPage = 1;
let currentMovies = [...movies]; // Initialize with all movies

const movieGrid = document.getElementById('movie-grid');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const clearSearchButton = document.getElementById('clear-search-button');
const searchResultsInfo = document.getElementById('search-results-info');

// Helper function to sanitize titles for URL hashes
function sanitizeTitleForUrl(title) {
    // Replace spaces with underscores, remove non-alphanumeric characters except underscore
    return title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

// Helper function to create a single movie card HTML element
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    // Click event to update URL hash and display single movie
    movieCard.addEventListener('click', () => {
        window.location.hash = sanitizeTitleForUrl(movie.title);
        // handleHashChange will be triggered by the hashchange event
    });

    // 1. Movie Title
    const movieTitleP = document.createElement('p');
    movieTitleP.style.textAlign = 'center';
    movieTitleP.style.fontWeight = 'bold';
    movieTitleP.style.whiteSpace = 'normal';
    movieTitleP.style.overflowWrap = 'break-word';
    movieTitleP.style.wordBreak = 'break-all';
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
        iframe.allow = "autoplay; fullscreen";
        iframe.allowFullscreen = true;

        let videoSourceUrl = '';
        if (movie.source === 'youtube') {
            videoSourceUrl = `https://www.youtube.com/embed/${movie.embedId}`;
        } else if (movie.source === 'okru') {
            videoSourceUrl = `https://ok.ru/videoembed/${movie.embedId}`;
        } else if (movie.source === 'rumble') {
            videoSourceUrl = `https://rumble.com/embed/${movie.embedId}`;
        }
        iframe.src = videoSourceUrl;

        videoResponsiveDiv.appendChild(iframe);
        movieCard.appendChild(videoResponsiveDiv);
    }

    return movieCard;
}

// Main function to display content (either paginated list or single movie)
function displayContent(data, isSingleMovie = false) {
    if (!movieGrid || !pagination || !searchResultsInfo) {
        console.error("Required DOM elements not found!");
        return;
    }
    movieGrid.innerHTML = ''; // Clear previous movies

    if (isSingleMovie) {
        // Display a single movie
        pagination.style.display = 'none'; // Hide pagination
        searchResultsInfo.style.display = 'none'; // Hide search info

        movieGrid.appendChild(createMovieCard(data));

    } else {
        // Display paginated/search results
        pagination.style.display = 'flex'; // Show pagination
        searchResultsInfo.style.display = 'block'; // Show search info

        // Update search results info for multiple movies
        if (data === movies) { // No active search
            searchResultsInfo.textContent = '';
        } else if (data.length === 0) {
            searchResultsInfo.textContent = 'No movies found matching your search.';
        } else {
            searchResultsInfo.textContent = `Found ${data.length} movie(s).`;
        }

        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShowOnPage = data.slice(startIndex, endIndex);

        moviesToShowOnPage.forEach(movie => {
            movieGrid.appendChild(createMovieCard(movie));
        });
        displayPagination(data); // Call pagination based on the provided data list
    }
}


function displayPagination(moviesToPaginate = currentMovies) {
    if (!pagination) {
        console.error("Pagination element not found!");
        return;
    }
    pagination.innerHTML = '';

    const totalPages = Math.ceil(moviesToPaginate.length / moviesPerPage);

    // --- Home Button ---
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
    homeButton.classList.add(currentPage === 1 ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    homeButton.disabled = currentPage === 1;
    homeButton.addEventListener('click', () => {
        currentPage = 1;
        displayContent(moviesToPaginate, false);
    });
    pagination.appendChild(homeButton);

    // --- Back Button ---
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
    backButton.classList.add(currentPage === 1 ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    backButton.disabled = currentPage === 1;
    backButton.addEventListener('click', () => {
        currentPage--;
        displayContent(moviesToPaginate, false);
    });
    pagination.appendChild(backButton);

    // --- Numbered Page Buttons ---
    const maxPageButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    if (startPage > 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.classList.add('px-2', 'py-2', 'text-gray-400');
        pagination.appendChild(ellipsis);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
        pageButton.classList.add(currentPage === i ? 'bg-blue-500' : 'bg-gray-700', 'hover:bg-gray-600');
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayContent(moviesToPaginate, false);
        });
        pagination.appendChild(pageButton);
    }

    if (endPage < totalPages) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.classList.add('px-2', 'py-2', 'text-gray-400');
        pagination.appendChild(ellipsis);
    }

    // --- Next Button ---
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('pagination-button', 'px-4', 'py-2', 'rounded-md', 'text-white', 'focus:outline-none');
    nextButton.classList.add(currentPage === totalPages ? 'bg-gray-500' : 'bg-blue-600', 'hover:bg-blue-500');
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        currentPage++;
        displayContent(moviesToPaginate, false);
    });
    pagination.appendChild(nextButton);
}

// --- Search Functionality ---
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    window.location.hash = ''; // Clear hash when performing a search

    if (searchTerm === '') {
        currentMovies = [...movies];
    } else {
        currentMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm) ||
            (movie.description && movie.description.toLowerCase().includes(searchTerm))
        );
    }
    currentPage = 1;
    displayContent(currentMovies, false);
}

// --- Hash Change Handler ---
function handleHashChange() {
    const hash = window.location.hash.substring(1); // Get hash without '#'

    if (hash) {
        const foundMovie = movies.find(movie => sanitizeTitleForUrl(movie.title) === hash);
        if (foundMovie) {
            displayContent(foundMovie, true);
        } else {
            // Hash didn't match a movie, revert to main list
            window.location.hash = ''; // Clear invalid hash
            displayContent(currentMovies, false);
        }
    } else {
        // No hash, or hash cleared, display paginated list
        displayContent(currentMovies, false);
    }
}

// --- Event Listeners ---
if (searchInput) {
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' || searchInput.value.trim() === '') {
            performSearch();
        }
    });
}
if (searchButton) {
    searchButton.addEventListener('click', performSearch);
}
if (clearSearchButton) {
    clearSearchButton.addEventListener('click', () => {
        searchInput.value = '';
        window.location.hash = ''; // Clear hash when clearing search
        performSearch(); // This will display all movies
    });
}

// Initial load: check hash or display main list
window.addEventListener('DOMContentLoaded', handleHashChange);
window.addEventListener('hashchange', handleHashChange); // Listen for direct hash changes
